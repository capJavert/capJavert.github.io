var apps = {}
var apiUrl = 'https://api.kickass.website'
function endpoint(path) {
	return apiUrl + path
}

apps.me = new Vue({
	el: '.wrapper',
	data: {
		title: null,
		titleMarkup: null,
		about: '',
		cv: null,
		email: null,
		skills: [],
		social: []
	},
	methods: {
		breakLabel: function(label) {
			return label.split(' ').join('<br/>')
		}
	},
	created: function() {
		var vm = this

		fetch(endpoint('/pages/me'))
			.then(function(res) {
				return res.json()
			})
			.then(function(data) {
				vm.title = data.title
				vm.titleMarkup = data.titleMarkup
			})

		fetch(endpoint('/me'))
			.then(function(res) {
				return res.json()
			})
			.then(function(data) {
				vm.about = data.about
				vm.cv = data.cv
				vm.email = data.email
			})

		fetch(endpoint('/skills'))
			.then(function(res) {
				return res.json()
			})
			.then(function(data) {
				vm.skills = data
			})

		fetch(endpoint('/social'))
			.then(function(res) {
				return res.json()
			})
			.then(function(data) {
				vm.social = data
			})
	}
})
