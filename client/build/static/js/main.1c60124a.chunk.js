(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{98:function(e,n,t){"use strict";t.r(n);var r,c,i,a,o,s,l,d,j,p,b,x,u,h,f,O,g,m,w,v,y,k,z,S,D,C,P,H,M,A,U,B,F,G,I,q,T,V,_,W,Y,E,J,L,R,$,N,Z,K,Q,X,ee,ne,te,re,ce,ie,ae,oe,se,le,de,je,pe,be,xe,ue,he,fe,Oe,ge,me,we,ve,ye,ke,ze,Se,De,Ce,Pe,He,Me,Ae,Ue,Be,Fe,Ge,Ie,qe,Te,Ve,_e,We,Ye,Ee,Je,Le,Re,$e,Ne,Ze,Ke,Qe,Xe,en,nn,tn,rn,cn=t(1),an=t(42),on=t.n(an),sn=t(13),ln=t(17),dn=t(7),jn=t(5),pn=t.n(jn),bn=t(10),xn=t(9),un=t(111),hn=t(112),fn=t(113),On=t(114),gn=t(20),mn=t(58),wn=Object(mn.a)({apiKey:"AIzaSyCOvTYeicrCgrs52TV-ApqesUAGeWf-V2A",authDomain:"shop-e412d.firebaseapp.com",projectId:"shop-e412d",storageBucket:"shop-e412d.appspot.com",messagingSenderId:"379033798897",appId:"1:379033798897:web:195de3b1bb5485100dc150"}),vn=wn,yn=t(47),kn=t.n(yn),zn="https://social-media-mern-applications.herokuapp.com/api/",Sn=kn.a.create({baseURL:zn}),Dn=(kn.a.create({baseURL:zn}),t(64)),Cn=t.p+"static/media/like.be1d10c9.png",Pn=t.p+"static/media/heart.d03a6207.png",Hn=t(110),Mn=t(2),An=t(3),Un=An.a.div(r||(r=Object(Mn.a)(["\n  width: 90%;\n  margin-bottom: 50px;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  border-radius: 10px;\n"]))),Bn=An.a.div(c||(c=Object(Mn.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n"]))),Fn=An.a.div(i||(i=Object(Mn.a)(["\n  display: flex;\n  align-items: center;\n  margin-left: 20px;\n"]))),Gn=An.a.img(a||(a=Object(Mn.a)(["\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  object-fit: cover;\n  cursor: pointer;\n"]))),In=An.a.span(o||(o=Object(Mn.a)(["\n  font-size: 18px;\n  margin-left: 10px;\n  font-weight: 600;\n  cursor: pointer;\n"]))),qn=An.a.span(s||(s=Object(Mn.a)(["\n  font-size: 13px;\n  margin-left: 10px;\n"]))),Tn=An.a.div(l||(l=Object(Mn.a)(["\n  margin: 0px 5px;\n"]))),Vn=An.a.div(d||(d=Object(Mn.a)(["\n  margin: 20px 0px 20px 20px;\n"]))),_n=An.a.span(j||(j=Object(Mn.a)(["\n  margin-bottom: 20px;\n"]))),Wn=An.a.img(p||(p=Object(Mn.a)(["\n  width: 95%;\n  height: 90%;\n  object-fit: cover;\n  margin-top: 20px;\n"]))),Yn=An.a.div(b||(b=Object(Mn.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin: 0px 20px;\n  margin-bottom: 20px;\n"]))),En=An.a.div(x||(x=Object(Mn.a)(["\n  display: flex;\n  align-items: center;\n"]))),Jn=An.a.img(u||(u=Object(Mn.a)(["\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  object-fit: cover;\n  cursor: pointer;\n  margin-right: 7px;\n"]))),Ln=An.a.img(h||(h=Object(Mn.a)(["\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  object-fit: cover;\n  cursor: pointer;\n"]))),Rn=An.a.span(f||(f=Object(Mn.a)(["\n  margin-left: 10px;\n  font-weight: 500;\n"]))),$n=An.a.span(O||(O=Object(Mn.a)(["\n  cursor: pointer;\n  text-decoration: underline;\n"]))),Nn=t(0),Zn=function(e){var n=e.desc,t=e.photo,r=e.date,c=e.userId,i=e.like,a=e.comment,o=e.id,s=Object(cn.useState)(null),l=Object(xn.a)(s,2),d=l[0],j=l[1],p=Object(cn.useState)(i),b=Object(xn.a)(p,2),x=b[0],u=b[1],h=Object(cn.useState)(!1),f=Object(xn.a)(h,2),O=f[0],g=f[1],m=function(){var e=Object(bn.a)(pn.a.mark((function e(){return pn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(O?x-1:x+1),g(!O),e.prev=2,e.next=5,Sn.put("/posts/".concat(o,"/like"),{userId:c});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(){return e.apply(this,arguments)}}();return Object(cn.useEffect)((function(){(function(){var e=Object(bn.a)(pn.a.mark((function e(){var n;return pn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Sn.get("/users/".concat(c));case 3:n=e.sent,j(n.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(Nn.jsxs)(Un,{children:[Object(Nn.jsxs)(Bn,{children:[Object(Nn.jsxs)(Fn,{children:[d&&Object(Nn.jsxs)(Nn.Fragment,{children:[Object(Nn.jsx)(ln.b,{to:"/user/".concat(c),children:Object(Nn.jsx)(Gn,{src:d.profilePicture})}),Object(Nn.jsx)(ln.b,{to:"/user/".concat(c),style:{textDecoration:"none",color:"black"},children:Object(Nn.jsx)(In,{children:d.username.charAt(0).toUpperCase()+d.username.slice(1)})})]}),Object(Nn.jsx)(qn,{children:Object(Dn.a)(r)})]}),Object(Nn.jsx)(Tn,{children:Object(Nn.jsx)(Hn.a,{style:{cursor:"pointer"}})})]}),Object(Nn.jsxs)(Vn,{children:[Object(Nn.jsx)(_n,{children:n}),t&&Object(Nn.jsx)(Wn,{src:t})]}),Object(Nn.jsxs)(Yn,{children:[Object(Nn.jsxs)(En,{children:[Object(Nn.jsx)(Jn,{src:Cn,onClick:m}),Object(Nn.jsx)(Ln,{src:Pn,onClick:m}),Object(Nn.jsxs)(Rn,{children:[x," people like it"]})]}),Object(Nn.jsx)($n,{children:a?"".concat(a," comments"):"0 comment"})]})]})},Kn=An.a.div(g||(g=Object(Mn.a)(["\n  flex: 3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  \n"]))),Qn=An.a.div(m||(m=Object(Mn.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0px;\n  text-align:center;\n"]))),Xn=An.a.h1(w||(w=Object(Mn.a)(["\n  font-size: 24px;\n  font-weight: 400;\n  margin: 5px 0px;\n"]))),et=An.a.span(v||(v=Object(Mn.a)(["\n  font-size: 18px;\n  margin: 2px 0px;\n  cursor:pointer;\n"]))),nt=An.a.div(y||(y=Object(Mn.a)(["\n  width: 90%;\n  height: 200px;\n  margin-top: 25px;\n  margin-bottom: 50px;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n"]))),tt=An.a.div(k||(k=Object(Mn.a)(["\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),rt=An.a.img(z||(z=Object(Mn.a)(["\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin-left: 20px;\n"]))),ct=An.a.input(S||(S=Object(Mn.a)(["\n  width: 90%;\n  margin-left: 20px;\n  font-size: 18px;\n  border: none;\n  outline: none;\n"]))),it=An.a.div(D||(D=Object(Mn.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 25px 0px;\n"]))),at=An.a.div(C||(C=Object(Mn.a)(["\n  width: 90%;\n  height: 0.1px;\n  background-color: #a1a1a1;\n"]))),ot=An.a.div(P||(P=Object(Mn.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin: 10px 50px;\n"]))),st=An.a.ul(H||(H=Object(Mn.a)(["\n  display: flex;\n  align-items: center;\n  list-style: none;\n"]))),lt=An.a.li(M||(M=Object(Mn.a)(["\n  margin-left: 2px;\n  margin-right: 25px;\n  font-size: 18px;\n  cursor: pointer;\n"]))),dt=An.a.button(A||(A=Object(Mn.a)(["\n  background-color: green;\n  color: white;\n  font-size: 16px;\n  border: none;\n  border-radius: 5px;\n  width: 70px;\n  height: 35px;\n  cursor: pointer;\n"]))),jt=function(){var e=Object(cn.useRef)(),n=Object(sn.c)((function(e){return e.user.currentUser})),t=Object(dn.h)(),r=Object(cn.useState)([]),c=Object(xn.a)(r,2),i=c[0],a=c[1],o=Object(cn.useState)(null),s=Object(xn.a)(o,2),l=s[0],d=s[1],j=Object(cn.useState)(""),p=Object(xn.a)(j,2),b=p[0],x=p[1],u=n._id;Object(cn.useEffect)((function(){(function(){var e=Object(bn.a)(pn.a.mark((function e(){var n,t;return pn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Sn.get("/posts/timeline/".concat(u));case 3:n=e.sent,t=n.data.sort((function(e,n){var t=new Date(e.createdAt).getTime();return new Date(n.createdAt).getTime()-t})),a(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=function(){var e=Object(bn.a)(pn.a.mark((function e(){var t,r,c,i,a;return pn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l){e.next=8;break}t=(new Date).getTime()+l.name,r=Object(gn.b)(vn),c=Object(gn.c)(r,t),(i=Object(gn.d)(c,l)).on("state_changed",(function(e){var n=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+n+"% done"),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}}),(function(e){}),(function(){Object(gn.a)(i.snapshot.ref).then(function(){var e=Object(bn.a)(pn.a.mark((function e(t){var r,c;return pn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n._id,c={userId:r,desc:b,img:t},e.prev=2,e.next=5,Sn.post("/posts",c);case 5:window.location.reload(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(n){return e.apply(this,arguments)}}())})),e.next=18;break;case 8:return a={userId:u,desc:b},e.prev=9,e.next=12,Sn.post("/posts",a);case 12:window.location.reload(!1),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(9),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[9,15]])})));return function(){return e.apply(this,arguments)}}(),f=function(){e.current.click()};return Object(Nn.jsxs)(Kn,{children:[(u===t.id||void 0===t.id)&&Object(Nn.jsxs)(Nn.Fragment,{children:[Object(Nn.jsxs)(Qn,{children:[Object(Nn.jsx)(Xn,{children:"No Friends? Add these people first!"}),Object(Nn.jsx)(ln.b,{style:{textDecoration:"none",color:"black"},to:"/user/61b9245908565465138e85bd",children:Object(Nn.jsx)(et,{children:"Jane"})}),Object(Nn.jsx)(ln.b,{style:{textDecoration:"none",color:"black"},to:"/user/61b25fce2cd53769d8abb7c1",children:Object(Nn.jsx)(et,{children:"Ozkan Selcuk"})})]}),Object(Nn.jsxs)(nt,{children:[Object(Nn.jsxs)(tt,{children:[Object(Nn.jsx)(ln.b,{to:"/user/".concat(n._id),children:Object(Nn.jsx)(rt,{src:n.profilePicture})}),Object(Nn.jsx)(ct,{placeholder:"What's in your mind ".concat(n.username.charAt(0).toUpperCase()+n.username.slice(1),"?"),value:b,onChange:function(e){return x(e.target.value)}})]}),Object(Nn.jsx)(it,{children:Object(Nn.jsx)(at,{})}),Object(Nn.jsxs)(ot,{children:[Object(Nn.jsxs)(st,{children:[Object(Nn.jsx)("input",{type:"file",ref:e,style:{display:"none"},onChange:function(e){return d(e.target.files[0])}}),Object(Nn.jsx)(un.a,{onClick:f,style:{color:"tomato",cursor:"pointer"}}),Object(Nn.jsx)(lt,{onClick:f,children:"Photo or Video"}),Object(Nn.jsx)(hn.a,{style:{color:"blue",cursor:"pointer"}}),Object(Nn.jsx)(lt,{children:"Tag"}),Object(Nn.jsx)(fn.a,{style:{color:"green",cursor:"pointer"}}),Object(Nn.jsx)(lt,{children:"Location"}),Object(Nn.jsx)(On.a,{style:{color:"goldenrod",cursor:"pointer"}}),Object(Nn.jsx)(lt,{children:"Feelings"})]}),Object(Nn.jsx)(dt,{onClick:h,children:"Share"})]})]})]}),i.map((function(e){return Object(Nn.jsx)(Zn,{id:e._id,desc:e.desc,photo:e.img,date:e.createdAt,userId:e.userId,like:e.likes.length,comment:e.comment},e._id)}))]})},pt=t(115),bt=t(116),xt=t(117),ut=t(118),ht=t(119),ft=t(120),Ot=t(121),gt=t(122),mt=t(123),wt=[{id:1,profilePicture:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",username:"Ozkan Selcuk"},{id:2,profilePicture:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",username:"Janell Shrum"},{id:3,profilePicture:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",username:"Alex Durden"},{id:4,profilePicture:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",username:"Dora Hawks"},{id:5,profilePicture:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",username:"Thomas Holden"},{id:6,profilePicture:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",username:"Shirley Beauchamp"},{id:7,profilePicture:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",username:"Travis Bennett"},{id:8,profilePicture:"https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=971&q=80",username:"Kristen Thomas"},{id:9,profilePicture:"https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",username:"Gary Duty"},{id:10,profilePicture:"https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",username:"Jane Iverson"}],vt=An.a.div(U||(U=Object(Mn.a)(["\n  flex: 1;\n  height: calc(100vh - 70px);\n  top: 50px;\n  position: sticky;\n  overflow-y: scroll;\n  width: 300px;\n  z-index: 998;\n\n  ::-webkit-scrollbar {\n    width: 5px;\n  }\n  ::-webkit-scrollbar-track {\n    background-color: #f1f1f1;\n  }\n  ::-webkit-scrollbar-thumb {\n    background-color: rgb(179, 179, 179);\n  }\n"]))),yt=An.a.div(B||(B=Object(Mn.a)(["\n  margin-top: 20px;\n  margin-left: 20px;\n"]))),kt=An.a.ul(F||(F=Object(Mn.a)(["\n  list-style: none;\n"]))),zt=An.a.li(G||(G=Object(Mn.a)(["\n  margin-bottom: 20px;\n  display: flex;\n  cursor: pointer;\n  height: 27px;\n\n  &:hover {\n    background-color: #d6d6d6;\n    border-radius: 5px;\n  }\n"]))),St=An.a.div(I||(I=Object(Mn.a)(["\n  font-size: 20px;\n  margin-left: 10px;\n"]))),Dt=An.a.button(q||(q=Object(Mn.a)(["\n  border: none;\n  border-radius: 5px;\n  background-color: #d4d4d4;\n  font-size: 16px;\n  font-weight: 500;\n  width: 120px;\n  height: 40px;\n  cursor: pointer;\n"]))),Ct=An.a.div(T||(T=Object(Mn.a)(["\n  display: flex;\n  align-items: center;\n  height: 50px;\n  margin-left: 20px;\n"]))),Pt=An.a.div(V||(V=Object(Mn.a)(["\n  width: 90%;\n  height: 0.5px;\n  background-color: black;\n"]))),Ht=An.a.div(_||(_=Object(Mn.a)(["\n  margin-left: 20px;\n"]))),Mt=An.a.div(W||(W=Object(Mn.a)(["\n  height: 50px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  margin-bottom: 5px;\n"]))),At=An.a.img(Y||(Y=Object(Mn.a)(["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  margin-right: 10px;\n  object-fit: cover;\n"]))),Ut=An.a.span(E||(E=Object(Mn.a)(["\n  font-size: 18px;\n"]))),Bt=An.a.div(J||(J=Object(Mn.a)(["\n  position: absolute;\n  background-color: #00b600;\n  width: 12px;\n  height: 12px;\n  border: 0.3px solid white;\n  border-radius: 50%;\n  left: 27px;\n  top: 2px;\n"]))),Ft=function(e){var n=e.name,t=e.image,r=e.online;return Object(Nn.jsxs)(Mt,{children:[Object(Nn.jsx)(At,{src:t}),Object(Nn.jsx)(Ut,{children:n}),"online"===r&&Object(Nn.jsx)(Bt,{})]})},Gt=function(){return Object(Nn.jsxs)(vt,{children:[Object(Nn.jsxs)(yt,{children:[Object(Nn.jsxs)(kt,{children:[Object(Nn.jsxs)(zt,{children:[Object(Nn.jsx)(pt.a,{}),Object(Nn.jsx)(St,{children:"Feed"})]}),Object(Nn.jsxs)(zt,{children:[Object(Nn.jsx)(bt.a,{}),Object(Nn.jsx)(St,{children:"Chats"})]}),Object(Nn.jsxs)(zt,{children:[Object(Nn.jsx)(xt.a,{}),Object(Nn.jsx)(St,{children:"Videos"})]}),Object(Nn.jsxs)(zt,{children:[Object(Nn.jsx)(ut.a,{}),Object(Nn.jsx)(St,{children:"Groups"})]}),Object(Nn.jsxs)(zt,{children:[Object(Nn.jsx)(ht.a,{}),Object(Nn.jsx)(St,{children:"Bookmarks"})]}),Object(Nn.jsxs)(zt,{children:[Object(Nn.jsx)(ft.a,{}),Object(Nn.jsx)(St,{children:"Questions"})]}),Object(Nn.jsxs)(zt,{children:[Object(Nn.jsx)(Ot.a,{}),Object(Nn.jsx)(St,{children:"Jobs"})]}),Object(Nn.jsxs)(zt,{children:[Object(Nn.jsx)(gt.a,{}),Object(Nn.jsx)(St,{children:"Events"})]}),Object(Nn.jsxs)(zt,{children:[Object(Nn.jsx)(mt.a,{}),Object(Nn.jsx)(St,{children:"Courses"})]})]}),Object(Nn.jsx)(Dt,{children:"Show More"})]}),Object(Nn.jsx)(Ct,{children:Object(Nn.jsx)(Pt,{})}),Object(Nn.jsx)(Ht,{children:wt.map((function(e){return Object(Nn.jsx)(Ft,{name:e.username,image:e.profilePicture},e.id)}))})]})},It=t(124),qt=t(125),Tt=t(126),Vt=t(127),_t=t(44),Wt=t(18),Yt=Object(Wt.b)(),Et=Object(_t.b)({name:"user",initialState:{currentUser:null,isFetching:!1,error:!1},reducers:{loginStart:function(e){e.isFetching=!0},loginSuccess:function(e,n){e.isFetching=!1,e.error=!1,e.currentUser=n.payload,Yt.push("/"),Yt.go(0)},loginFailure:function(e){e.isFetching=!1,e.error=!0},logout:function(e){e.currentUser=null,e.error=!1},registerStart:function(e){e.isFetching=!0},registerSuccess:function(e,n){e.isFetching=!1,e.currentUser=n.payload,e.error=!1,Yt.push("/"),Yt.go(0)},registerFailure:function(e){e.isFetching=!1,e.error=!0}}}),Jt=Et.actions,Lt=Jt.loginStart,Rt=Jt.loginSuccess,$t=Jt.loginFailure,Nt=Jt.logout,Zt=Jt.registerStart,Kt=Jt.registerSuccess,Qt=Jt.registerFailure,Xt=Et.reducer,er=An.a.div(L||(L=Object(Mn.a)(["\n  height: 50px;\n  width: 100%;\n  background-color: #4267b2;\n  display: flex;\n  align-items: center;\n  position: sticky;\n  top: 0;\n  z-index: 999;\n"]))),nr=An.a.div(R||(R=Object(Mn.a)(["\n  flex: 1;\n  margin-left: 20px;\n"]))),tr=An.a.h1($||($=Object(Mn.a)(["\n  font-size: 24px;\n  color: white;\n  cursor: pointer;\n  width: max-content;\n"]))),rr=An.a.div(N||(N=Object(Mn.a)(["\n  flex: 2;\n  display: flex;\n  align-items: center;\n"]))),cr=An.a.div(Z||(Z=Object(Mn.a)(["\n  padding: 0 10px;\n  align-items: center;\n  border-radius: 30px;\n  width: 70%;\n  height: 30px;\n  background-color: white;\n  display: flex;\n"]))),ir=An.a.input(K||(K=Object(Mn.a)(["\n  width: 90%;\n  border: none;\n  outline: none;\n  margin-left: 10px;\n  font-size: 16px;\n"]))),ar=An.a.span(Q||(Q=Object(Mn.a)(["\n  color: white;\n  margin-left: 15px;\n  font-size: 17px;\n  cursor: pointer;\n"]))),or=An.a.div(X||(X=Object(Mn.a)(["\n  flex: 0.5;\n  margin-right: 20px;\n  display: flex;\n  align-items: center;\n"]))),sr=An.a.div(ee||(ee=Object(Mn.a)(["\n  color: white;\n  font-size: 40px;\n  cursor: pointer;\n  margin-right: 10px;\n  position: relative;\n"]))),lr=An.a.div(ne||(ne=Object(Mn.a)(["\n  position: absolute;\n  top: 5px;\n  right: -4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  width: 15px;\n  height: 15px;\n  background-color: crimson;\n  border-radius: 50%;\n"]))),dr=An.a.img(te||(te=Object(Mn.a)(["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin-left: 50px;\n  cursor: pointer;\n"]))),jr=function(){var e=Object(sn.b)(),n=Object(sn.c)((function(e){return e.user.currentUser}));return Object(Nn.jsxs)(er,{children:[Object(Nn.jsx)(nr,{children:Object(Nn.jsx)(ln.b,{to:"/",style:{textDecoration:"none"},children:Object(Nn.jsx)(tr,{children:"Ozkan's Social"})})}),Object(Nn.jsxs)(rr,{children:[Object(Nn.jsxs)(cr,{children:[Object(Nn.jsx)(It.a,{}),Object(Nn.jsx)(ir,{placeholder:"Search for friend, post or video"})]}),Object(Nn.jsx)(ln.b,{to:"/user/".concat(n._id),style:{textDecoration:"none",color:"white"},children:Object(Nn.jsx)(ar,{children:"Homepage"})}),Object(Nn.jsx)(ln.b,{to:"/",style:{textDecoration:"none",color:"white"},children:Object(Nn.jsx)(ar,{children:"Timeline"})})]}),Object(Nn.jsxs)(or,{children:[Object(Nn.jsxs)(sr,{children:[Object(Nn.jsx)(lr,{children:"1"}),Object(Nn.jsx)(qt.a,{style:{fontSize:"28px"}})]}),Object(Nn.jsxs)(sr,{children:[Object(Nn.jsx)(lr,{children:"5"}),Object(Nn.jsx)(Tt.a,{style:{fontSize:"28px"}})]}),Object(Nn.jsxs)(sr,{children:[Object(Nn.jsx)(lr,{children:"2"}),Object(Nn.jsx)(Vt.a,{style:{fontSize:"28px"}})]}),Object(Nn.jsx)(ln.b,{to:"/user/".concat(n._id),children:Object(Nn.jsx)(dr,{src:n.profilePicture})}),Object(Nn.jsx)(ar,{onClick:function(){e(Nt())},children:"Logout"})]})]})},pr=t.p+"static/media/gift.4a9c4d62.png",br=t.p+"static/media/ad.833b6750.png",xr=An.a.div(re||(re=Object(Mn.a)(["\n  flex: 1;\n  padding: 20px;\n"]))),ur=An.a.div(ce||(ce=Object(Mn.a)(["\n  display: flex;\n  align-items: center;\n"]))),hr=An.a.img(ie||(ie=Object(Mn.a)(["\n  width: 40px;\n  height: 42px;\n  margin-right: 10px;\n"]))),fr=An.a.span(ae||(ae=Object(Mn.a)(["\n  font-size: 18px;\n"]))),Or=An.a.div(oe||(oe=Object(Mn.a)(["\n  margin: 20px 0px;\n"]))),gr=An.a.img(se||(se=Object(Mn.a)(["\n  width: 450px;\n  height: 300px;\n  border-radius: 30px;\n"]))),mr=An.a.div(le||(le=Object(Mn.a)(["\n  margin-top: 20px;\n"]))),wr=An.a.span(de||(de=Object(Mn.a)(["\n  font-size: 24px;\n  font-weight: 500;\n"]))),vr=An.a.div(je||(je=Object(Mn.a)(["\n  margin: 20px 0px;\n\n"]))),yr=An.a.button(pe||(pe=Object(Mn.a)(["\n  background-color: blue;\n  color: white;\n  font-size: 16px;\n  border: none;\n  border-radius: 5px;\n  width: 70px;\n  height: 35px;\n  cursor: pointer;\n"]))),kr=An.a.div(be||(be=Object(Mn.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),zr=An.a.h3(xe||(xe=Object(Mn.a)(["\n  margin-bottom: 10px;\n"]))),Sr=An.a.div(ue||(ue=Object(Mn.a)(["\n  display: flex;\n  margin-bottom: 5px;\n"]))),Dr=An.a.span(he||(he=Object(Mn.a)(["\n  color: #696969;\n  font-weight: 500;\n  margin-right: 10px;\n"]))),Cr=An.a.p(fe||(fe=Object(Mn.a)(["\n  color: #8f8f8f;\n  font-weight: 300;\n"]))),Pr=An.a.div(Oe||(Oe=Object(Mn.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Hr=An.a.h3(ge||(ge=Object(Mn.a)(["\n  margin-top: 20px;\n"]))),Mr=An.a.div(me||(me=Object(Mn.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),Ar=An.a.div(we||(we=Object(Mn.a)(["\n  width: 120px;\n  height: 120px;\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0px;\n  cursor: pointer;\n"]))),Ur=An.a.img(ve||(ve=Object(Mn.a)(["\n  width: 100px;\n  height: 100px;\n  border-radius: 5px;\n  object-fit: cover;\n"]))),Br=An.a.span(ye||(ye=Object(Mn.a)(["\n  margin-top: 5px;\n"]))),Fr=function(e){var n=e.page,t=e.city,r=e.from,c=e.relationShip,i=Object(dn.h)(),a=Object(sn.c)((function(e){return e.user.currentUser._id})),o=function(){var e=Object(bn.a)(pn.a.mark((function e(){return pn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Sn.put("/users/".concat(i.id,"/follow"),{userId:a});case 3:Yt.push("/"),Yt.go(0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(Nn.jsx)(xr,{children:"home"===n?Object(Nn.jsxs)(Nn.Fragment,{children:[Object(Nn.jsxs)(ur,{children:[Object(Nn.jsx)(hr,{src:pr}),Object(Nn.jsxs)(fr,{children:[Object(Nn.jsx)("b",{children:"Pola Foster"})," and ",Object(Nn.jsx)("b",{children:"3 other friends"})," have a birthday today."]})]}),Object(Nn.jsx)(Or,{children:Object(Nn.jsx)(gr,{src:br})}),Object(Nn.jsx)(wr,{children:"Online Friends"}),Object(Nn.jsx)(mr,{children:wt.map((function(e){return Object(Nn.jsx)(Ft,{name:e.username,image:e.profilePicture,online:"online"},e.id)}))})]}):Object(Nn.jsxs)(Nn.Fragment,{children:[Object(Nn.jsx)(vr,{children:Object(Nn.jsx)(yr,{onClick:o,children:"Follow"})}),Object(Nn.jsxs)(kr,{children:[Object(Nn.jsx)(zr,{children:"User Information"}),Object(Nn.jsxs)(Sr,{children:[Object(Nn.jsx)(Dr,{children:"City:"}),Object(Nn.jsx)(Cr,{children:t})]}),Object(Nn.jsxs)(Sr,{children:[Object(Nn.jsx)(Dr,{children:"From:"}),Object(Nn.jsx)(Cr,{children:r})]}),Object(Nn.jsxs)(Sr,{children:[Object(Nn.jsx)(Dr,{children:"Relationship:"}),Object(Nn.jsx)(Cr,{children:c})]})]}),Object(Nn.jsxs)(Pr,{children:[Object(Nn.jsx)(Hr,{children:"User Friends"}),Object(Nn.jsx)(Mr,{children:wt.map((function(e){return Object(Nn.jsxs)(Ar,{children:[Object(Nn.jsx)(Ur,{src:e.profilePicture}),Object(Nn.jsx)(Br,{children:e.username})]},e.id)}))})]})]})})},Gr=An.a.div(ke||(ke=Object(Mn.a)(["\n  display: flex;\n  background-color: #eeeeee;\n"]))),Ir=function(){return Object(Nn.jsxs)(Nn.Fragment,{children:[Object(Nn.jsx)(jr,{}),Object(Nn.jsxs)(Gr,{children:[Object(Nn.jsx)(Gt,{}),Object(Nn.jsx)(jt,{}),Object(Nn.jsx)(Fr,{page:"home"})]})]})},qr=function(){var e=Object(bn.a)(pn.a.mark((function e(n,t){var r;return pn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Lt()),e.prev=1,e.next=4,Sn.post("/auth/login",t);case 4:r=e.sent,n(Rt(r.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n($t());case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n,t){return e.apply(this,arguments)}}(),Tr=function(){var e=Object(bn.a)(pn.a.mark((function e(n,t){var r;return pn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Zt()),e.prev=1,e.next=4,Sn.post("/auth/register",t);case 4:r=e.sent,n(Kt(r.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n(Qt());case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n,t){return e.apply(this,arguments)}}(),Vr=An.a.div(ze||(ze=Object(Mn.a)(["\n  display: flex;\n  background-color: #e9e9e9;\n"]))),_r=An.a.div(Se||(Se=Object(Mn.a)(["\n  height: 100vh;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Wr=An.a.div(De||(De=Object(Mn.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 500px;\n"]))),Yr=An.a.h1(Ce||(Ce=Object(Mn.a)(["\n  font-size: 50px;\n  color: #4267b2;\n  margin-bottom: 10px;\n"]))),Er=An.a.span(Pe||(Pe=Object(Mn.a)(["\n  font-size: 28px;\n"]))),Jr=An.a.div(He||(He=Object(Mn.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),Lr=An.a.form(Me||(Me=Object(Mn.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 500px;\n  padding: 50px 5px;\n  background-color: white;\n  border-radius: 20px;\n"]))),Rr=An.a.input(Ae||(Ae=Object(Mn.a)(["\n  font-size: 18px;\n  margin: 10px 0px;\n  padding: 5px 20px;\n  width: 80%;\n  height: 50px;\n  border: none;\n  border: 1px solid gray;\n  outline: none;\n  border-radius: 10px;\n"]))),$r=An.a.button(Ue||(Ue=Object(Mn.a)(["\n  font-size: 24px;\n  margin: 20px 0px;\n  padding: 15px 20px;\n  width: 80%;\n  border: none;\n  border-radius: 10px;\n  background-color: #4267b2;\n  color: white;\n  cursor: pointer;\n"]))),Nr=An.a.span(Be||(Be=Object(Mn.a)(["\n  color: #0273be;\n  cursor: pointer;\n"]))),Zr=An.a.button(Fe||(Fe=Object(Mn.a)(["\n  font-size: 24px;\n  margin: 20px 0px;\n  padding: 15px 20px;\n  width: 60%;\n  border: none;\n  border-radius: 10px;\n  background-color: #197e00;\n  color: white;\n  cursor: pointer;\n"]))),Kr=An.a.span(Ge||(Ge=Object(Mn.a)(["\n  font-size: 12px;\n  color: red;\n  margin: 5px 0px;\n"]))),Qr=function(){var e=Object(sn.b)(),n=Object(sn.c)((function(e){return e.user.error})),t=Object(cn.useState)(""),r=Object(xn.a)(t,2),c=r[0],i=r[1],a=Object(cn.useState)(""),o=Object(xn.a)(a,2),s=o[0],l=o[1];return Object(Nn.jsxs)(Vr,{children:[Object(Nn.jsx)(_r,{children:Object(Nn.jsxs)(Wr,{children:[Object(Nn.jsx)(Yr,{children:"Ozkan's Social"}),Object(Nn.jsx)(Er,{children:"Connect with friends and the world around you on Ozkan's Social"})]})}),Object(Nn.jsx)(Jr,{children:Object(Nn.jsxs)(Lr,{onSubmit:function(n){n.preventDefault(),qr(e,{username:c,password:s})},children:[Object(Nn.jsx)(Rr,{placeholder:"Username",value:c,onChange:function(e){return i(e.target.value)}}),Object(Nn.jsx)(Rr,{type:"password",placeholder:"Password",value:s,onChange:function(e){return l(e.target.value)}}),Object(Nn.jsx)($r,{children:"Log In"}),Object(Nn.jsx)(Nr,{children:"Forgot Password?"}),n&&Object(Nn.jsx)(Kr,{children:"Wrong Credentials!"}),Object(Nn.jsx)(Zr,{onClick:function(){Yt.push("/register"),Yt.go(0)},children:"Create a New Account"})]})})]})},Xr=t(6),ec=t(35),nc=An.a.div(Ie||(Ie=Object(Mn.a)(["\n  display: flex;\n  background-color: #e9e9e9;\n"]))),tc=An.a.div(qe||(qe=Object(Mn.a)(["\n  height: 100vh;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),rc=An.a.div(Te||(Te=Object(Mn.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 500px;\n"]))),cc=An.a.h1(Ve||(Ve=Object(Mn.a)(["\n  font-size: 50px;\n  color: #4267b2;\n  margin-bottom: 10px;\n"]))),ic=An.a.span(_e||(_e=Object(Mn.a)(["\n  font-size: 28px;\n"]))),ac=An.a.div(We||(We=Object(Mn.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),oc=An.a.form(Ye||(Ye=Object(Mn.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 500px;\n  padding: 50px 5px;\n  background-color: white;\n  border-radius: 20px;\n"]))),sc=An.a.input(Ee||(Ee=Object(Mn.a)(["\n  font-size: 18px;\n  margin: 10px 0px;\n  padding: 5px 20px;\n  width: 80%;\n  height: 50px;\n  border: none;\n  border: 1px solid gray;\n  outline: none;\n  border-radius: 10px;\n"]))),lc=(An.a.button(Je||(Je=Object(Mn.a)(["\n  font-size: 24px;\n  margin: 20px 0px;\n  padding: 15px 20px;\n  width: 80%;\n  border: none;\n  border-radius: 10px;\n  background-color: #4267b2;\n  color: white;\n  cursor: pointer;\n"]))),An.a.span(Le||(Le=Object(Mn.a)(["\n  color: #0273be;\n  cursor: pointer;\n"]))),An.a.button(Re||(Re=Object(Mn.a)(["\n  font-size: 24px;\n  margin: 20px 0px;\n  padding: 15px 20px;\n  width: 60%;\n  border: none;\n  border-radius: 10px;\n  background-color: #197e00;\n  color: white;\n  cursor: pointer;\n"])))),dc=function(){var e=Object(sn.b)(),n=Object(cn.useState)({username:"",email:"",password:"",confirmPassword:""}),t=Object(xn.a)(n,2),r=t[0],c=t[1],i=[{id:1,name:"username",type:"text",placeholder:"Username",title:"Username should be 3-16 characters and shouldn't include any special character!",pattern:"^[A-Za-z0-9]{3,16}$",required:!0},{id:2,name:"email",type:"email",placeholder:"Email",title:"It should be a valid email address!",required:!0},{id:3,name:"password",type:"password",placeholder:"Password",title:" Passwrod should be 8-16 characters and include at least 1 letter, 1 number and 1 special character!",pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",required:!0},{id:4,name:"confirmPassword",type:"password",placeholder:"Confirm Password",title:"Password don't match!",pattern:r.password,required:!0}],a=function(e){c((function(n){return Object(ec.a)(Object(ec.a)({},n),{},Object(Xr.a)({},e.target.name,e.target.value))}))};return Object(Nn.jsxs)(nc,{children:[Object(Nn.jsx)(tc,{children:Object(Nn.jsxs)(rc,{children:[Object(Nn.jsx)(cc,{children:"Ozkan's Social"}),Object(Nn.jsx)(ic,{children:"Connect with friends and the world around you on Ozkan's Social"})]})}),Object(Nn.jsx)(ac,{children:Object(Nn.jsxs)(oc,{onSubmit:function(n){n.preventDefault();var t=Object(ec.a)({},r);Tr(e,t)},children:[i.map((function(e){return Object(Nn.jsx)(sc,Object(ec.a)(Object(ec.a)({},e),{},{value:r[e.name],onChange:a}),e.id)})),Object(Nn.jsx)(lc,{children:"Create a New Account"})]})})]})},jc=An.a.div($e||($e=Object(Mn.a)(["\n  display: flex;\n  background-color: #eeeeee;\n"]))),pc=An.a.div(Ne||(Ne=Object(Mn.a)(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n"]))),bc=An.a.img(Ze||(Ze=Object(Mn.a)(["\n  width: 100%;\n  height: 300px;\n  object-fit: cover;\n  cursor: pointer;\n"]))),xc=An.a.img(Ke||(Ke=Object(Mn.a)(["\n  width: 250px;\n  height: 250px;\n  border-radius: 50%;\n  border: 3px solid white;\n  object-fit: cover;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 150px;\n  margin: auto;\n  cursor: pointer;\n"]))),uc=An.a.div(Qe||(Qe=Object(Mn.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 110px;\n  margin-bottom: 15px;\n"]))),hc=An.a.h3(Xe||(Xe=Object(Mn.a)(["\n  font-size: 40px;\n"]))),fc=An.a.button(en||(en=Object(Mn.a)(["\n  background-color: blue;\n  color: white;\n  width: 150px;\n  padding: 5px;\n  border: none;\n  border-radius: 5px;\n  font-size: 18px;\n  font-weight: 400;\n  margin: 5px;\n  cursor: pointer;\n"]))),Oc=An.a.span(nn||(nn=Object(Mn.a)(["\n  font-size: 24px;\n  font-weight: 300;\n"]))),gc=An.a.div(tn||(tn=Object(Mn.a)(["\n  flex: 4;\n"]))),mc=An.a.div(rn||(rn=Object(Mn.a)(["\n  display: flex;\n"]))),wc=function(){var e=Object(dn.h)().id,n=Object(sn.c)((function(e){return e.user.currentUser._id})),t=Object(cn.useState)({username:"",profilePicture:"",coverPicture:"",city:"",from:"",realationShip:""}),r=Object(xn.a)(t,2),c=r[0],i=r[1],a=Object(cn.useState)(null),o=Object(xn.a)(a,2),s=o[0],l=o[1],d=Object(cn.useRef)();Object(cn.useEffect)((function(){(function(){var n=Object(bn.a)(pn.a.mark((function n(){var t;return pn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Sn.get("/users/".concat(e));case 3:t=n.sent,console.log(t.data),i(t.data),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}})()()}),[]);var j=function(){var e=Object(bn.a)(pn.a.mark((function e(){var n,t,r,i;return pn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=(new Date).getTime()+s.name,t=Object(gn.b)(vn),r=Object(gn.c)(t,n),(i=Object(gn.d)(r,s)).on("state_changed",(function(e){var n=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+n+"% done"),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}}),(function(e){}),(function(){Object(gn.a)(i.snapshot.ref).then(function(){var e=Object(bn.a)(pn.a.mark((function e(n){var t,r;return pn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c._id,r={userId:t,profilePicture:n},e.prev=2,e.next=5,Sn.put("/users/".concat(t),r);case 5:window.location.reload(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(n){return e.apply(this,arguments)}}())}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(bn.a)(pn.a.mark((function e(){var n,t,r,i;return pn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=(new Date).getTime()+s.name,t=Object(gn.b)(vn),r=Object(gn.c)(t,n),(i=Object(gn.d)(r,s)).on("state_changed",(function(e){var n=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+n+"% done"),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}}),(function(e){}),(function(){Object(gn.a)(i.snapshot.ref).then(function(){var e=Object(bn.a)(pn.a.mark((function e(n){var t,r;return pn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c._id,r={userId:t,coverPicture:n},e.prev=2,e.next=5,Sn.put("/users/".concat(t),r);case 5:window.location.reload(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(n){return e.apply(this,arguments)}}())}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(Nn.jsxs)(Nn.Fragment,{children:[Object(Nn.jsx)(jr,{}),Object(Nn.jsxs)(jc,{children:[Object(Nn.jsx)(Gt,{}),c&&Object(Nn.jsxs)(gc,{children:[Object(Nn.jsxs)(pc,{children:[Object(Nn.jsx)(bc,{src:c.coverPicture}),Object(Nn.jsx)(xc,{src:c.profilePicture}),Object(Nn.jsxs)(uc,{children:[Object(Nn.jsx)(hc,{children:c.username.charAt(0).toUpperCase()+c.username.slice(1)}),Object(Nn.jsx)(Oc,{children:c.desc})]})]}),Object(Nn.jsx)("input",{type:"file",ref:d,style:{display:"none"},onChange:function(e){return l(e.target.files[0])}}),e===n&&Object(Nn.jsxs)(Nn.Fragment,{children:[Object(Nn.jsx)(fc,{onClick:function(){d.current.click()},children:"Add Photo"}),Object(Nn.jsx)(fc,{onClick:j,children:"Change Profile Picture"}),Object(Nn.jsx)(fc,{onClick:p,children:"Change Cover Image"})]}),Object(Nn.jsxs)(mc,{children:[Object(Nn.jsx)(jt,{}),Object(Nn.jsx)(Fr,{page:"user",city:c.city,from:c.from,relationShip:c.relationShip})]})]})]})]})},vc=function(){var e=Object(sn.c)((function(e){return e.user.currentUser}));return Object(Nn.jsx)(ln.a,{children:Object(Nn.jsx)(Nn.Fragment,{children:Object(Nn.jsxs)(dn.d,{children:[Object(Nn.jsx)(dn.b,{path:"/",element:e?Object(Nn.jsx)(Ir,{}):Object(Nn.jsx)(dn.a,{to:"/login"})}),Object(Nn.jsx)(dn.b,{path:"/user/:id",element:e?Object(Nn.jsx)(wc,{}):Object(Nn.jsx)(dn.a,{to:"/login"})}),Object(Nn.jsx)(dn.b,{path:"/login",element:Object(Nn.jsx)(Qr,{})}),Object(Nn.jsx)(dn.b,{path:"/register",element:Object(Nn.jsx)(dc,{})})]})})})},yc=t(19),kc=t(25),zc=t(62),Sc={key:"root",version:1,storage:t.n(zc).a},Dc=Object(yc.b)({user:Xt}),Cc=Object(kc.g)(Sc,Dc),Pc=Object(_t.a)({reducer:Cc,middleware:function(e){return e({serializableCheck:{ignoredActions:[kc.a,kc.f,kc.b,kc.c,kc.d,kc.e]}})}}),Hc=Object(kc.h)(Pc),Mc=t(63);on.a.render(Object(Nn.jsx)(sn.a,{store:Pc,children:Object(Nn.jsx)(Mc.a,{loading:null,persistor:Hc,children:Object(Nn.jsx)(vc,{})})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.1c60124a.chunk.js.map