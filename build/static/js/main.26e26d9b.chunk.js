(window.webpackJsonpproject_chat_application=window.webpackJsonpproject_chat_application||[]).push([[0],{104:function(e,a){},107:function(e,a,t){},143:function(e,a,t){},144:function(e,a,t){},145:function(e,a,t){},146:function(e,a,t){},147:function(e,a,t){},148:function(e,a,t){},151:function(e,a,t){"use strict";t.r(a);var n,r=t(0),c=t.n(r),l=t(54),o=t.n(l),s=t(61),m=t(5),i=t(55),u=t.n(i),E=t(56),A=t.n(E),f=t(16),g=t.n(f),p=(t(107),function(e){var a=e.users;return c.a.createElement("div",{className:"textContainer"},c.a.createElement("div",null,c.a.createElement("h1",null,"Chat.exe - A Room for all your texts. ",c.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\udcac")),c.a.createElement("h2",null,"Built using React, Express, Node and Socket.IO ",c.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2764\ufe0f")),c.a.createElement("h2",null,"P.S : We do not save your texts... ",c.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2b05\ufe0f")),c.a.createElement("h2",null," Made by : Sai Ram  ",c.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\ude0a")," ")),a?c.a.createElement("div",null,c.a.createElement("h1",null,"People currently chatting :"),c.a.createElement("div",{className:"activeContainer"},c.a.createElement("h2",null,a.map(function(e){var a=e.name;return c.a.createElement("div",{key:a,className:"activeItem"},a,c.a.createElement("img",{alt:"Online Icon",src:g.a}))})))):null)}),d=t(57),h=t.n(d),v=(t(143),t(30)),N=t.n(v),b=function(e){var a=e.message,t=a.text,n=a.user,r=!1,l=e.name.trim().toLowerCase();return n===l&&(r=!0),r?c.a.createElement("div",{className:"messageContainer justifyEnd"},c.a.createElement("p",{className:"sentText pr-10"},l),c.a.createElement("div",{className:"messageBox backgroundBlue"},c.a.createElement("p",{className:"messageText colorWhite"},N.a.emojify(t)))):c.a.createElement("div",{className:"messageContainer justifyStart"},c.a.createElement("div",{className:"messageBox backgroundLight"},c.a.createElement("p",{className:"messageText colorDark"},N.a.emojify(t))),c.a.createElement("p",{className:"sentText pl-10 "},n))},j=(t(144),function(e){var a=e.messages,t=e.name;return c.a.createElement(h.a,{className:"messages"},a.map(function(e,a){return c.a.createElement("div",{key:a},c.a.createElement(b,{message:e,name:t}))}))}),I=t(58),C=t.n(I),O=(t(145),function(e){var a=e.room;return c.a.createElement("div",{className:"infoBar"},c.a.createElement("div",{className:"leftInnerContainer"},c.a.createElement("img",{className:"onlineIcon",src:g.a,alt:"online icon"}),c.a.createElement("h3",null,a)),c.a.createElement("div",{className:"rightInnerContainer"},c.a.createElement("a",{href:"/"},c.a.createElement("img",{src:C.a,alt:"close icon",className:"closeIcon"}))))}),y=(t(146),function(e){var a=e.setMessage,t=e.sendMessage,n=e.message;return c.a.createElement("form",{className:"form"},c.a.createElement("input",{className:"input",type:"text",placeholder:"Type a message...",value:n,onChange:function(e){var t=e.target.value;return a(t)},onKeyPress:function(e){return"Enter"===e.key?t(e):null}}),c.a.createElement("button",{className:"sendButton",onClick:function(e){return t(e)}},"Send"))}),x=(t(147),"https://chatdotexe.herokuapp.com/"),S=function(e){var a=e.location,t=Object(r.useState)(""),l=Object(m.a)(t,2),o=l[0],i=l[1],E=Object(r.useState)(""),f=Object(m.a)(E,2),g=f[0],d=f[1],h=Object(r.useState)(""),v=Object(m.a)(h,2),N=v[0],b=v[1],I=Object(r.useState)(""),C=Object(m.a)(I,2),S=C[0],R=C[1],w=Object(r.useState)([]),k=Object(m.a)(w,2),B=k[0],M=k[1];Object(r.useEffect)(function(){var e=u.a.parse(a.search),t=e.name,r=e.room;n=A()(x),d(r),i(t),n.emit("join",{name:t,room:r},function(e){e&&alert(e)})},[x,a.search]),Object(r.useEffect)(function(){n.on("message",function(e){M(function(a){return[].concat(Object(s.a)(a),[e])})}),n.on("roomData",function(e){var a=e.users;b(a)})},[]);return c.a.createElement("div",{className:"outerContainer"},c.a.createElement("div",{className:"container"},c.a.createElement(O,{room:g}),c.a.createElement(j,{messages:B,name:o}),c.a.createElement(y,{message:S,setMessage:R,sendMessage:function(e){e.preventDefault(),S&&n.emit("sendMessage",S,function(){return R("")})}})),c.a.createElement(p,{users:N}))},R=t(17);t(148);function w(){var e=Object(r.useState)(""),a=Object(m.a)(e,2),t=a[0],n=a[1],l=Object(r.useState)(""),o=Object(m.a)(l,2),s=o[0],i=o[1];return c.a.createElement("div",{className:"joinOuterContainer"},c.a.createElement("div",{className:"joinInnerContainer"},c.a.createElement("h1",{className:"title"},c.a.createElement("strong",null,"Enter or Create your name & your Room-Id")),c.a.createElement("h1",{className:"heading"},"Join"),c.a.createElement("div",null,c.a.createElement("input",{placeholder:"Your Name",className:"joinInput",type:"text",onChange:function(e){return n(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("input",{placeholder:"Room ID ",className:"joinInput mt-20",type:"text",onChange:function(e){return i(e.target.value)}})),c.a.createElement(R.b,{onClick:function(e){return t&&s?null:e.preventDefault()},to:"/chat?name=".concat(t,"&room=").concat(s)},c.a.createElement("button",{className:"button mt-20",type:"submit"},"Sign - In")),c.a.createElement("h2",{className:"heading1"},"How to use?"),c.a.createElement("h2",{className:"footer"}," 1. Enter your name.",c.a.createElement("br",null)," 2. Create a room ID or enter one if you have.",c.a.createElement("br",null),"3. Share the Room-ID with friends if you have created it. ",c.a.createElement("br",null)," 4. Enjoy Texting !!! ")))}var k=t(6),B=function(){return c.a.createElement(R.a,null,c.a.createElement(k.a,{path:"/",exact:!0,component:w}),c.a.createElement(k.a,{path:"/chat",component:S}))};o.a.render(c.a.createElement(B,null),document.getElementById("root"))},16:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="},58:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},62:function(e,a,t){e.exports=t(151)}},[[62,1,2]]]);
//# sourceMappingURL=main.26e26d9b.chunk.js.map