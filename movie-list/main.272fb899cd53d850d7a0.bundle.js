webpackJsonp([1],{0:function(t,e,o){t.exports=o("0eYE")},"0eYE":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("aMZo"),i=(o("Dqrr"),o("Z87M")),r=o("DVPM"),c=o("SbQH"),s=o("RB68"),a=o("vq1X"),l=o("q58L"),u=o("iEW0"),d=function(){function t(t){this.link=null,this.uid=n.v4(),this.completed=!1,this.title=t.trim()}return t.prototype.setTitle=function(t){this.title=t.trim()},t}(),f=(o("PSNg"),o("HT7u"),o("Wy0q"),o("ABGK"),o("GQSG"),o("RSzd"),o("XD1n"),o("NzBy"),{apiKey:"AIzaSyB1tptv7puWh_09MZadQCQa-5K45sKpdO8",authDomain:"movie-list-9dba0.firebaseapp.com",databaseURL:"wss://movie-list-9dba0.firebaseio.com",storageBucket:"movie-list-9dba0.appspot.com"}),p=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c},h=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},m=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))(function(i,r){function c(t){try{a(n.next(t))}catch(t){r(t)}}function s(t){try{a(n.throw(t))}catch(t){r(t)}}function a(t){t.done?i(t.value):new o(function(e){e(t.value)}).then(c,s)}a((n=n.apply(t,e||[])).next())})},g=this&&this.__generator||function(t,e){function o(t){return function(e){return n([t,e])}}function n(o){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,r&&(c=r[2&o[0]?"return":o[0]?"throw":"next"])&&!(c=c.call(r,o[1])).done)return c;switch(r=0,c&&(o=[0,c.value]),o[0]){case 0:case 1:c=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(c=a.trys,!(c=c.length>0&&c[c.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!c||o[1]>c[0]&&o[1]<c[3])){a.label=o[1];break}if(6===o[0]&&a.label<c[1]){a.label=c[1],c=o;break}if(c&&a.label<c[2]){a.label=c[2],a.ops.push(o);break}c[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{i=c=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}var i,r,c,s,a={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},y=function(){function t(){this.todos=[],this.remainingTodos=null,this.completedTodos=null,u.initializeApp(f),this.provider=new u.auth.GoogleAuthProvider,this.provider.addScope("https://www.googleapis.com/auth/plus.login")}return t.prototype.signIn=function(){u.auth().signInWithRedirect(this.provider).then()},t.prototype.list=function(){return m(this,void 0,void 0,function(){var t=this;return g(this,function(e){switch(e.label){case 0:return[4,u.database().ref("todos").once("value").then(function(e){if(null!==e.val()){var o=e.val();t.todos=o.map(function(t){var e=new d(t.title);return e.completed=t.completed,t.hasOwnProperty("link")&&(e.link=t.link),e.uid=t.uid,e}),t.persist()}})];case 1:return e.sent(),[2]}})})},t.prototype.get=function(t){return this.todos.filter(function(e){return e.completed===t.completed})},t.prototype.allCompleted=function(){return this.todos.length===this.completed.length},t.prototype.setAllTo=function(t){this.todos.forEach(function(e){return e.completed=t}),this.persist()},t.prototype.removeCompleted=function(){this.todos=this.get({completed:!1}),this.persist()},Object.defineProperty(t.prototype,"remaining",{get:function(){return this.remainingTodos||(this.remainingTodos=this.get({completed:!1})),this.remainingTodos},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"completed",{get:function(){return this.completedTodos||(this.completedTodos=this.get({completed:!0})),this.completedTodos},enumerable:!0,configurable:!0}),t.prototype.toggleCompletion=function(t){var e=this._findByUid(t);e&&(e.completed=!e.completed,this.persist())},t.prototype.remove=function(t){var e=this._findByUid(t);e&&(this.todos.splice(this.todos.indexOf(e),1),this.persist())},t.prototype.add=function(t){this.todos.unshift(new d(t)),this.persist()},t.prototype.addWithLink=function(t,e){var o=new d(t);o.link=e,this.todos.unshift(o),this.persist()},t.prototype.persist=function(){this._clearCache(),u.database().ref("todos").set(this.todos).then()},t.prototype._findByUid=function(t){return this.todos.find(function(e){return e.uid===t})},t.prototype._clearCache=function(){this.completedTodos=null,this.remainingTodos=null},t=p([Object(l.I)(),h("design:paramtypes",[])],t)}(),b=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c},v=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},w=function(){function t(t){this.todoStore=t,this.todoStore=t}return t=b([Object(l.u)({selector:"todo-app",template:o("uM4G")}),v("design:paramtypes",["function"==typeof(e=void 0!==y&&y)&&e||Object])],t);var e}(),j=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c},O=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},R=function(){function t(t,e){this.todoStore=t,this.route=e,this.currentStatus=""}return t.prototype.ngOnInit=function(){var t=this;this.route.params.map(function(t){return t.status}).subscribe(function(e){t.currentStatus=e||""})},t.prototype.removeCompleted=function(){this.todoStore.removeCompleted()},t.prototype.getCount=function(){return this.todoStore.todos.length},t.prototype.getRemainingCount=function(){return this.todoStore.remaining.length},t.prototype.hasCompleted=function(){return this.todoStore.completed.length>0},t=j([Object(l.u)({selector:"todo-footer",template:o("bHlc")}),O("design:paramtypes",["function"==typeof(e=void 0!==y&&y)&&e||Object,"function"==typeof(n=void 0!==a.a&&a.a)&&n||Object])],t);var e,n}(),_=o("AP4T"),S=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c},k=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},T=function(){function t(t){this.http=t,this.baseUrl="http://www.theimdbapi.org/api"}return e=t,t.prototype.get=function(t){return this.http.get(this.baseUrl+"/movie?movie_id="+t).map(e.extractData).catch(e.handleError)},t.extractData=function(t){return t.json()||{}},t.handleError=function(t){var e;if(t instanceof s.c){var o=t.json()||"",n=o.error||JSON.stringify(o);e=t.status+" - "+(t.statusText||"")+" "+n}else e=t.message?t.message:t.toString();return console.error(e),_.a.throw(e)},t=e=S([Object(l.I)(),k("design:paramtypes",["function"==typeof(o=void 0!==s.a&&s.a)&&o||Object])],t);var e,o}(),P=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c},x=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},C=new RegExp("(http|https):\\/\\/(www\\.)?imdb\\.com\\/title\\/(.*)\\/.*"),I=function(){function t(t,e){this.todoStore=t,this.movieService=e,this.newTodo=""}return e=t,t.prototype.addTodo=function(){var t=this;if(this.newTodo.trim().length){if(e.isMovieUrl(this.newTodo)){var o=this.newTodo,n=e.getMovieId(this.newTodo);this.movieService.get(n).subscribe(function(e){t.todoStore.addWithLink(e.title+" ("+e.year+")",o)})}else this.todoStore.add(this.newTodo);this.newTodo=""}},Object.defineProperty(t.prototype,"isAuth",{get:function(){return!!u.auth().currentUser},enumerable:!0,configurable:!0}),t.isMovieUrl=function(t){return C.test(t)},t.getMovieId=function(t){var e=C.exec(t);return e[e.length-1]},t=e=P([Object(l.u)({selector:"todo-header",template:o("Kf2E")}),x("design:paramtypes",["function"==typeof(n=void 0!==y&&y)&&n||Object,"function"==typeof(i=void 0!==T&&T)&&i||Object])],t);var e,n,i}(),A=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c},M=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},D=function(){function t(){this.itemModified=new l.D,this.itemRemoved=new l.D,this.editing=!1}return t.prototype.cancelEditing=function(){this.editing=!1},t.prototype.stopEditing=function(t){this.todo.setTitle(t.value),this.editing=!1,0===this.todo.title.length?this.remove():this.update()},t.prototype.edit=function(){this.editing=!0},t.prototype.toggleCompletion=function(){this.todo.completed=!this.todo.completed,this.update()},t.prototype.remove=function(){this.itemRemoved.next(this.todo.uid)},t.prototype.update=function(){this.itemModified.next(this.todo.uid)},A([Object(l.K)(),M("design:type",Object)],t.prototype,"todo",void 0),A([Object(l.X)(),M("design:type",Object)],t.prototype,"itemModified",void 0),A([Object(l.X)(),M("design:type",Object)],t.prototype,"itemRemoved",void 0),t=A([Object(l.u)({selector:"todo-item",template:o("s5E6")})],t)}(),E=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c},L=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},U=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))(function(i,r){function c(t){try{a(n.next(t))}catch(t){r(t)}}function s(t){try{a(n.throw(t))}catch(t){r(t)}}function a(t){t.done?i(t.value):new o(function(e){e(t.value)}).then(c,s)}a((n=n.apply(t,e||[])).next())})},K=this&&this.__generator||function(t,e){function o(t){return function(e){return n([t,e])}}function n(o){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,r&&(c=r[2&o[0]?"return":o[0]?"throw":"next"])&&!(c=c.call(r,o[1])).done)return c;switch(r=0,c&&(o=[0,c.value]),o[0]){case 0:case 1:c=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(c=a.trys,!(c=c.length>0&&c[c.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!c||o[1]>c[0]&&o[1]<c[3])){a.label=o[1];break}if(6===o[0]&&a.label<c[1]){a.label=c[1],c=o;break}if(c&&a.label<c[2]){a.label=c[2],a.ops.push(o);break}c[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{i=c=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}var i,r,c,s,a={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},B=function(){function t(t,e){this.todoStore=t,this.route=e,this.isAuth=!1,this.isLoading=!1,this._currentStatus=""}return t.prototype.ngOnInit=function(){var t=this;u.auth().getRedirectResult().then(function(){return U(t,void 0,void 0,function(){var t=this;return K(this,function(e){switch(e.label){case 0:return u.auth().currentUser?(this.isAuth=!0,this.isLoading=!0,[4,this.todoStore.list()]):[3,2];case 1:e.sent(),this.route.params.map(function(t){return t.status}).subscribe(function(e){t._currentStatus=e,t.isLoading=!1}),e.label=2;case 2:return[2]}})})})},t.prototype.login=function(){this.todoStore.signIn()},t.prototype.remove=function(t){this.todoStore.remove(t)},t.prototype.update=function(){this.todoStore.persist()},Object.defineProperty(t.prototype,"todos",{get:function(){return"completed"===this._currentStatus?this.todoStore.completed:"active"===this._currentStatus?this.todoStore.remaining:this.todoStore.todos},enumerable:!0,configurable:!0}),t.prototype.allCompleted=function(){return this.todoStore.allCompleted()},t.prototype.setAllTo=function(t){this.todoStore.setAllTo(t.checked)},t=E([Object(l.u)({selector:"todo-list",template:o("wslK")}),L("design:paramtypes",["function"==typeof(e=void 0!==y&&y)&&e||Object,"function"==typeof(n=void 0!==a.a&&a.a)&&n||Object])],t);var e,n}(),G=[{path:"",component:B,pathMatch:"full"},{path:":status",component:B}],W=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c},H=function(){function t(){}return t.prototype.transform=function(t,e){return t.trim()},t=W([Object(l._0)({name:"trim"})],t)}(),Q=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c},q=function(){function t(){}return t=Q([Object(l.Q)({bootstrap:[w],declarations:[w,B,R,I,D,H],imports:[r.a,c.a,s.b,a.b.forRoot(G,{useHash:!0})],providers:[y,T]})],t)}();Object(l._27)(),Object(i.a)().bootstrapModule(q).then()},Kf2E:function(t,e){t.exports='<header class="header">\n    <h1>Movie list</h1>\n    <input *ngIf="!isAuth" disabled class="new-todo" placeholder="Add new movie.." [(ngModel)]="newTodo" autofocus="" (keyup.enter)="addTodo()">\n    <input *ngIf="isAuth" class="new-todo" placeholder="Add new movie.." [(ngModel)]="newTodo" autofocus="" (keyup.enter)="addTodo()">\n</header>\n'},bHlc:function(t,e){t.exports='<footer class="footer" *ngIf="getCount()">\n    <span class="todo-count"><strong>{{ getRemainingCount() }}</strong> {{ getRemainingCount() == 1 ? \'movie\' : \'movies\' }} left</span>\n    <ul class="filters">\n        <li>\n            <a [routerLink]="[\'\']" [class.selected]="currentStatus == \'\'">All</a>\n        </li>\n        <li>\n            <a [routerLink]="[\'\', \'active\']" [class.selected]="currentStatus == \'active\'">Active</a>\n        </li>\n        <li>\n            <a [routerLink]="[\'\', \'completed\']" [class.selected]="currentStatus == \'completed\'">Completed</a>\n        </li>\n    </ul>\n    <button class="clear-completed" *ngIf="hasCompleted()" (click)="removeCompleted()">Clear completed</button>\n</footer>\n'},gFIY:function(t,e){function o(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}o.keys=function(){return[]},o.resolve=o,t.exports=o,o.id="gFIY"},s5E6:function(t,e){t.exports='<li [class.completed]="todo.completed" [class.editing]="editing">\n    <div class="view">\n        <input id="movie-input" class="toggle" type="checkbox" (click)="toggleCompletion()" [checked]="todo.completed">\n        <label for="movie-input" (dblclick)="edit(todo)">\n            {{ todo.title | trim }}\n            <a class="movie-link" *ngIf="todo.link" (href)="todo.link">IMDb</a>\n        </label>\n        <button class="destroy" (click)="remove()"></button>\n    </div>\n    <input class="edit" *ngIf="editing" [value]="todo.title" #editedtodo (blur)="stopEditing(editedtodo)" (keyup.enter)="stopEditing(editedtodo)" (keyup.escape)="cancelEditing()">\n</li>\n'},uM4G:function(t,e){t.exports="<router-outlet></router-outlet>\n"},wslK:function(t,e){t.exports='<section class="todoapp">\n    <todo-header></todo-header>\n\n    <div *ngIf="isLoading" id="loader"></div>\n\n    <section *ngIf="isAuth" class="main">\n        <input class="toggle-all" type="checkbox" #toggleall [checked]="allCompleted()" (click)="setAllTo(toggleall)">\n        <ul class="todo-list">\n            <todo-item *ngFor="let todo of todos" [todo]="todo" (itemRemoved)="remove($event)" (itemModified)="update($event)"></todo-item>\n        </ul>\n    </section>\n    <todo-footer></todo-footer>\n</section>\n\n<section *ngIf="!isAuth" id="login-area">\n    <img (click)="login()" src="assets/img/btn_google_signin_light_normal_web.png" alt="Sign in" />\n</section>\n\n<footer *ngIf="isAuth" class="info">\n    <p>Double-click to edit a movie</p>\n</footer>\n\n'}},[0]);