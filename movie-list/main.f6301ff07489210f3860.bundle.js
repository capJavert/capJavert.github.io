webpackJsonp([1],{"+wTc":function(t,e){t.exports={omdbApiKey:"YOUR_API_KEY"}},0:function(t,e,o){t.exports=o("0eYE")},"0eYE":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("aMZo"),i=(o("Dqrr"),o("Z87M")),r=o("DVPM"),s=o("SbQH"),c=o("RB68"),a=o("vq1X"),u=o("q58L"),l=o("iEW0"),f=function(){function t(t){this.uid=n.v4(),this.completed=!1,this.title=t.trim(),this.isOscarsNominated=!1}return t.prototype.setTitle=function(t){this.title=t.trim()},t}(),d=(o("PSNg"),o("HT7u"),o("Wy0q"),o("ABGK"),o("GQSG"),o("RSzd"),o("XD1n"),o("NzBy"),{apiKey:"AIzaSyB1tptv7puWh_09MZadQCQa-5K45sKpdO8",authDomain:"movie-list-9dba0.firebaseapp.com",databaseURL:"wss://movie-list-9dba0.firebaseio.com",storageBucket:"movie-list-9dba0.appspot.com"}),p=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(e,o,s):i(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s},h=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},y=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))(function(i,r){function s(t){try{a(n.next(t))}catch(t){r(t)}}function c(t){try{a(n.throw(t))}catch(t){r(t)}}function a(t){t.done?i(t.value):new o(function(e){e(t.value)}).then(s,c)}a((n=n.apply(t,e||[])).next())})},m=this&&this.__generator||function(t,e){function o(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,i&&(r=i[2&o[0]?"return":o[0]?"throw":"next"])&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[0,r.value]),o[0]){case 0:case 1:r=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,i=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(r=c.trys,!(r=r.length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){c=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){c.label=o[1];break}if(6===o[0]&&c.label<r[1]){c.label=r[1],r=o;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(o);break}r[2]&&c.ops.pop(),c.trys.pop();continue}o=e.call(t,c)}catch(t){o=[6,t],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}var n,i,r,s,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},b=function(){function t(){this.todos=[],this.remainingTodos=null,this.completedTodos=null,this.oscarsNominatedTodos=null,l.initializeApp(d),this.provider=new l.auth.GoogleAuthProvider,this.provider.addScope("https://www.googleapis.com/auth/plus.login")}return t.prototype.signIn=function(){l.auth().signInWithRedirect(this.provider).then()},t.prototype.list=function(){return y(this,void 0,void 0,function(){var t=this;return m(this,function(e){switch(e.label){case 0:return[4,l.database().ref("todos").once("value",function(e){t.loadList(e)})];case 1:return e.sent(),[4,l.database().ref("todos").on("value",function(e){t.loadList(e)})];case 2:return e.sent(),[2]}})})},t.prototype.loadList=function(t){if(null!==t.val()){var e=t.val();this.todos=e.map(function(t){var e=new f(t.title);return e.completed=t.completed,t.hasOwnProperty("websiteRef")&&(e.websiteRef=t.websiteRef),e.uid=t.uid,t.hasOwnProperty("isOscarsNominated")?e.isOscarsNominated=t.isOscarsNominated:e.isOscarsNominated=!1,e}),this.persist()}},t.prototype.get=function(t){return this.todos.filter(function(e){return e.completed===t.completed&&!1===e.isOscarsNominated})},t.prototype.allCompleted=function(){return this.todos.length===this.completed.length},t.prototype.setAllTo=function(t){this.todos.forEach(function(e){return e.completed=t}),this.persist()},t.prototype.removeCompleted=function(){this.todos=this.get({completed:!1}),this.persist()},Object.defineProperty(t.prototype,"remaining",{get:function(){return this.remainingTodos||(this.remainingTodos=this.get({completed:!1})),this.remainingTodos},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"completed",{get:function(){return this.completedTodos||(this.completedTodos=this.get({completed:!0})),this.completedTodos},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"oscars",{get:function(){return this.todos.filter(function(t){return!0===t.isOscarsNominated})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"allRegular",{get:function(){return this.todos.filter(function(t){return!1===t.isOscarsNominated})},enumerable:!0,configurable:!0}),t.prototype.toggleCompletion=function(t){var e=this._findByUid(t);e&&(e.completed=!e.completed,this.persist())},t.prototype.remove=function(t){var e=this._findByUid(t);e&&(this.todos.splice(this.todos.indexOf(e),1),this.persist())},t.prototype.add=function(t,e){var o=new f(t);o.isOscarsNominated=e,this.todos.unshift(o),this.persist()},t.prototype.addWebsiteRef=function(t,e,o){var n=new f(t);n.websiteRef=e,n.isOscarsNominated=o,this.todos.unshift(n),this.persist()},t.prototype.persist=function(){this._clearCache(),l.database().ref("todos").set(this.todos).then()},t.prototype._findByUid=function(t){return this.todos.find(function(e){return e.uid===t})},t.prototype._clearCache=function(){this.completedTodos=null,this.remainingTodos=null,this.oscarsNominatedTodos=null},t=p([Object(u.I)(),h("design:paramtypes",[])],t)}(),g=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(e,o,s):i(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s},v=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},w=function(){function t(t){this.todoStore=t,this.todoStore=t}return t=g([Object(u.u)({selector:"todo-app",template:o("uM4G")}),v("design:paramtypes",["function"==typeof(e="undefined"!=typeof b&&b)&&e||Object])],t);var e}(),O=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(e,o,s):i(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s},_=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},R=function(){function t(t,e){this.todoStore=t,this.route=e,this.currentStatus=""}return t.prototype.ngOnInit=function(){var t=this;this.route.params.map(function(t){return t.status}).subscribe(function(e){t.currentStatus=e||""})},t.prototype.removeCompleted=function(){this.todoStore.removeCompleted()},t.prototype.getCount=function(){return this.todoStore.todos.length},t.prototype.getRemainingCount=function(){return this.todoStore.remaining.length},t.prototype.hasCompleted=function(){return this.todoStore.completed.length>0},t=O([Object(u.u)({selector:"todo-footer",template:o("bHlc")}),_("design:paramtypes",["function"==typeof(e="undefined"!=typeof b&&b)&&e||Object,"function"==typeof(n="undefined"!=typeof a.a&&a.a)&&n||Object])],t);var e,n}(),j=o("AP4T"),S=function(){function t(){}return t.extractData=function(e){for(var o=e.json(),n=Object.keys(o),i=0;i<n.length;i++){var r=n[i],s=t.lowerCaseFirstLetter(r);r!==s&&(o[s]=o[r],delete o[r])}return o||{}},t.handleError=function(t){var e;if(t instanceof c.c){var o=t.json()||"",n=o.error||JSON.stringify(o);e=t.status+" - "+(t.statusText||"")+" "+n}else e=t.message?t.message:t.toString();return console.error(e),j.a.throw(e)},t.lowerCaseFirstLetter=function(t){return t[0].toLowerCase()+t.slice(1)},t}(),P=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),k=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(e,o,s):i(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s},T=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},x=function(t){function e(e){var o=t.call(this)||this;return o.http=e,o.baseUrl="https://yts.am/api/v2",o}return P(e,t),o=e,e.prototype.search=function(t){return t=t.substring(0,t.length-5),t=t.replace(/-/g," "),this.http.get(this.baseUrl+"/list_movies.json?query_term="+t).map(o.extractData).catch(o.handleError)},e.prototype.get=function(t){return this.http.get(this.baseUrl+"/movie?movie_id="+t).map(o.extractData).catch(o.handleError)},e=o=k([Object(u.I)(),T("design:paramtypes",["function"==typeof(n="undefined"!=typeof c.a&&c.a)&&n||Object])],e);var o,n}(S),C=function(){return function(){}}(),I=o("+wTc"),A=I,E=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),D=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(e,o,s):i(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s},M=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},L=function(t){function e(e){var o=t.call(this)||this;return o.http=e,o.baseUrl="https://www.omdbapi.com/?apikey="+A.omdbApiKey,o}return E(e,t),o=e,e.prototype.get=function(t){return this.http.get(this.baseUrl+"&i="+t).map(o.extractData).catch(o.handleError)},e=o=D([Object(u.I)(),M("design:paramtypes",["function"==typeof(n="undefined"!=typeof c.a&&c.a)&&n||Object])],e);var o,n}(S),N=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(e,o,s):i(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s},U=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},K={imdb:new RegExp("(http|https):\\/\\/(www\\.)?imdb\\.com\\/title\\/(.*)\\/.*"),yify:new RegExp("(http|https):\\/\\/(www\\.)?yts\\.am\\/movie\\/(.*)")},B=function(){function t(t,e,o,n){this.todoStore=t,this.omdbService=e,this.yifyService=o,this.route=n,this.newTodo="",this._currentStatus=""}return e=t,t.prototype.ngOnInit=function(){var t=this;this.route.params.map(function(t){return t.status}).subscribe(function(e){t._currentStatus=e})},t.prototype.addTodo=function(){var t=this;if(this.newTodo.trim().length){var o=new C;if(o.origin=e.isMovieUrl(this.newTodo),o.origin){o.link=this.newTodo;var n=e.getMovieId(this.newTodo,o.origin);switch(o.origin){case"imdb":o.name="IMDb",this.omdbService.get(n).subscribe(function(e){t.todoStore.addWebsiteRef(e.title+" ("+e.year+")",o,"oscars"==t._currentStatus)});break;case"yify":o.name="YTS",this.yifyService.search(n).subscribe(function(e){if(e.data.movies){var n=e.data.movies.find(function(t){return t.url==o.link});n&&t.todoStore.addWebsiteRef(n.title+" ("+n.year+")",o,"oscars"==t._currentStatus)}})}}else this.todoStore.add(this.newTodo,"oscars"==this._currentStatus);this.newTodo=""}},Object.defineProperty(t.prototype,"isAuth",{get:function(){return!!l.auth().currentUser},enumerable:!0,configurable:!0}),t.isMovieUrl=function(t){for(var e in K)if(K.hasOwnProperty(e)&&K[e].test(t))return e;return!1},t.getMovieId=function(t,e){var o=K[e].exec(t);return o[o.length-1]},t=e=N([Object(u.u)({selector:"todo-header",template:o("Kf2E")}),U("design:paramtypes",["function"==typeof(n="undefined"!=typeof b&&b)&&n||Object,"function"==typeof(i="undefined"!=typeof L&&L)&&i||Object,"function"==typeof(r="undefined"!=typeof x&&x)&&r||Object,"function"==typeof(s="undefined"!=typeof a.a&&a.a)&&s||Object])],t);var e,n,i,r,s}(),G=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(e,o,s):i(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s},W=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},Y=function(){function t(){this.itemModified=new u.D,this.itemRemoved=new u.D,this.editing=!1}return t.prototype.cancelEditing=function(){this.editing=!1},t.prototype.stopEditing=function(t){this.todo.setTitle(t.value),this.editing=!1,0===this.todo.title.length?this.remove():this.update()},t.prototype.edit=function(){this.editing=!0},t.prototype.toggleCompletion=function(){this.todo.completed=!this.todo.completed,this.update()},t.prototype.remove=function(){this.itemRemoved.next(this.todo.uid)},t.prototype.update=function(){this.itemModified.next(this.todo.uid)},G([Object(u.K)(),W("design:type",Object)],t.prototype,"todo",void 0),G([Object(u.X)(),W("design:type",Object)],t.prototype,"itemModified",void 0),G([Object(u.X)(),W("design:type",Object)],t.prototype,"itemRemoved",void 0),t=G([Object(u.u)({selector:"todo-item",template:o("s5E6")})],t)}(),q=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(e,o,s):i(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s},F=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},H=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))(function(i,r){function s(t){try{a(n.next(t))}catch(t){r(t)}}function c(t){try{a(n.throw(t))}catch(t){r(t)}}function a(t){t.done?i(t.value):new o(function(e){e(t.value)}).then(s,c)}a((n=n.apply(t,e||[])).next())})},Q=this&&this.__generator||function(t,e){function o(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,i&&(r=i[2&o[0]?"return":o[0]?"throw":"next"])&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[0,r.value]),o[0]){case 0:case 1:r=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,i=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(r=c.trys,!(r=r.length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){c=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){c.label=o[1];break}if(6===o[0]&&c.label<r[1]){c.label=r[1],r=o;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(o);break}r[2]&&c.ops.pop(),c.trys.pop();continue}o=e.call(t,c)}catch(t){o=[6,t],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}var n,i,r,s,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},z=function(){function t(t,e){this.todoStore=t,this.route=e,this.isAuth=!1,this.isLoading=!1,this._currentStatus=""}return t.prototype.ngOnInit=function(){return H(this,void 0,void 0,function(){var t=this;return Q(this,function(e){switch(e.label){case 0:return this.isLoading=!0,[4,l.auth().getRedirectResult()];case 1:return e.sent(),l.auth().currentUser?(this.isAuth=!0,[4,this.todoStore.list()]):[3,4];case 2:return e.sent(),[4,this.route.params.map(function(t){return t.status}).subscribe(function(e){t._currentStatus=e})];case 3:e.sent(),e.label=4;case 4:return this.isLoading=!1,[2]}})})},t.prototype.login=function(){this.todoStore.signIn()},t.prototype.remove=function(t){this.todoStore.remove(t)},t.prototype.update=function(){this.todoStore.persist()},Object.defineProperty(t.prototype,"todos",{get:function(){return"oscars"==this._currentStatus?this.todoStore.oscars:"completed"===this._currentStatus?this.todoStore.completed:"active"===this._currentStatus?this.todoStore.remaining:this.todoStore.allRegular},enumerable:!0,configurable:!0}),t.prototype.allCompleted=function(){return this.todoStore.allCompleted()},t.prototype.setAllTo=function(t){this.todoStore.setAllTo(t.checked)},t=q([Object(u.u)({selector:"todo-list",template:o("wslK")}),F("design:paramtypes",["function"==typeof(e="undefined"!=typeof b&&b)&&e||Object,"function"==typeof(n="undefined"!=typeof a.a&&a.a)&&n||Object])],t);var e,n}(),X=[{path:"",component:z,pathMatch:"full"},{path:":status",component:z}],Z=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(e,o,s):i(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s},J=function(){function t(){}return t.prototype.transform=function(t,e){return t.trim()},t=Z([Object(u._0)({name:"trim"})],t)}(),$=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(e,o,s):i(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s},V=function(){function t(){}return t=$([Object(u.Q)({bootstrap:[w],declarations:[w,z,R,B,Y,J],imports:[r.a,s.a,c.b,a.b.forRoot(X,{useHash:!0})],providers:[b,L,x]})],t)}();Object(u._27)(),Object(i.a)().bootstrapModule(V).then()},Kf2E:function(t,e){t.exports='<header class="header">\n    <h1>Movie list</h1>\n    <input *ngIf="!isAuth" disabled class="new-todo" placeholder="Add new movie.." [(ngModel)]="newTodo" autofocus="" (keyup.enter)="addTodo()">\n    <input *ngIf="isAuth" class="new-todo" placeholder="Add new movie.." [(ngModel)]="newTodo" autofocus="" (keyup.enter)="addTodo()">\n</header>\n'},bHlc:function(t,e){t.exports='<footer class="footer" *ngIf="getCount()">\n    <span class="todo-count"><strong>{{ getRemainingCount() }}</strong> {{ getRemainingCount() == 1 ? \'movie\' : \'movies\' }} left</span>\n    <ul class="filters">\n        <li>\n            <a [routerLink]="[\'\']" [class.selected]="currentStatus == \'\'">All</a>\n        </li>\n        <li>\n            <a [routerLink]="[\'\', \'active\']" [class.selected]="currentStatus == \'active\'">Active</a>\n        </li>\n        <li>\n            <a [routerLink]="[\'\', \'completed\']" [class.selected]="currentStatus == \'completed\'">Completed</a>\n        </li>\n        <li>\n            <a [routerLink]="[\'\', \'oscars\']" [class.selected]="currentStatus == \'oscars\'">Oscars 2018</a>\n        </li>\n    </ul>\n    <button class="clear-completed" *ngIf="hasCompleted()" (click)="removeCompleted()">Clear completed</button>\n</footer>\n'},gFIY:function(t,e){function o(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}o.keys=function(){return[]},o.resolve=o,t.exports=o,o.id="gFIY"},s5E6:function(t,e){t.exports='<li [class.completed]="todo.completed" [class.editing]="editing">\n    <div class="view">\n        <input id="movie-input" class="toggle" type="checkbox" (click)="toggleCompletion()" [checked]="todo.completed">\n        <label for="movie-input" (dblclick)="edit(todo)">\n            {{ todo.title | trim }}\n            <a [class]="\'movie-link movie-link-\'+todo.websiteRef.origin" *ngIf="todo.websiteRef" [href]="todo.websiteRef.link">{{todo.websiteRef.name}}</a>\n        </label>\n        <button class="destroy" (click)="remove()"></button>\n    </div>\n    <input class="edit" *ngIf="editing" [value]="todo.title" #editedtodo (blur)="stopEditing(editedtodo)" (keyup.enter)="stopEditing(editedtodo)" (keyup.escape)="cancelEditing()">\n</li>\n'},uM4G:function(t,e){t.exports="<router-outlet></router-outlet>\n"},wslK:function(t,e){t.exports='<section class="todoapp">\n    <todo-header></todo-header>\n\n    <div *ngIf="isLoading" id="loader"></div>\n\n    <section *ngIf="isAuth || isLoading" class="main">\n        <label>\n            <input class="toggle-all" type="checkbox" #toggleall [checked]="allCompleted()" (click)="setAllTo(toggleall)">\n        </label>\n\n        <ul *ngIf="todos.length" class="todo-list">\n            <todo-item *ngFor="let todo of todos" [todo]="todo" (itemRemoved)="remove($event)" (itemModified)="update($event)"></todo-item>\n        </ul>\n    </section>\n    <todo-footer></todo-footer>\n</section>\n\n<section *ngIf="!isAuth && !isLoading" id="login-area">\n    <img (click)="login()" src="assets/img/btn_google_signin_light_normal_web.png" alt="Sign in" />\n</section>\n\n<footer *ngIf="isAuth" class="info">\n    <p>Double-click to edit a movie</p>\n</footer>\n'}},[0]);