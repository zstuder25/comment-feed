(this["webpackJsonpcomment-feed"]=this["webpackJsonpcomment-feed"]||[]).push([[0],{23:function(e,t,n){e.exports=n.p+"static/media/profilePicture.00b475ef.jpg"},25:function(e,t,n){e.exports=n.p+"static/media/location.2590c4f7.svg"},26:function(e,t,n){e.exports=n.p+"static/media/heart.6f63e093.svg"},27:function(e,t,n){e.exports=n.p+"static/media/edit.4a5a13c5.svg"},28:function(e,t,n){e.exports=n.p+"static/media/delete.a340eabf.svg"},29:function(e,t,n){e.exports=n.p+"static/media/hoverDot.ccbdd814.svg"},30:function(e,t,n){e.exports=n.p+"static/media/heartGray.8b9e4892.svg"},31:function(e,t,n){e.exports=n.p+"static/media/comment.7876e7b0.svg"},32:function(e,t,n){e.exports=n.p+"static/media/ellipsis.ba0cc007.svg"},37:function(e,t,n){e.exports=n(57)},42:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(11),m=n.n(c),s=(n(42),n(20)),r=n(21),l=n(36),i=n(34),u=(n(43),n(7)),p=n(8),d=n(61),E=n(58),f=n(59),x=n(62),T=n(23),b=n.n(T),v=(n(49),function(){return o.a.createElement(E.a,{className:"profileImage",src:b.a,roundedCircle:!0})}),I=n(25),C=n.n(I),D=n(13),O=n.n(D),k=function(e){return o.a.createElement("div",{className:"textBox"},o.a.createElement(d.a.Text,null,"Zach Studer"),o.a.createElement(d.a.Text,{className:"location"},o.a.createElement(E.a,{src:C.a}),"OH, USA"),o.a.createElement(d.a.Text,{className:"relativeTime"},O()(e.time).fromNow()))},y=n(60),N=(n(51),n(26)),h=n.n(N),j=n(27),g=n.n(j),w=n(28),S=n.n(w),M=function(e){var t=Object(a.useState)(!1),n=Object(p.a)(t,2),c=n[0],m=n[1],s=Object(a.useState)(e.comment.commentText),r=Object(p.a)(s,2),l=r[0],i=r[1];return o.a.createElement(d.a,{className:"commentCard"},o.a.createElement(d.a.Title,{className:"innerCard"},o.a.createElement("div",{className:"metaInfo"},o.a.createElement(d.a.Text,null,"Zach Studer"),o.a.createElement(d.a.Text,{style:{color:"blue"}},"Software Developer")),o.a.createElement(d.a.Text,{className:"timeStamp"},O()(e.comment.commentDateTime).fromNow())),o.a.createElement(d.a.Text,{className:"innerCard commentText"},c?o.a.createElement(y.a.Control,{defaultValue:e.comment.commentText,type:"text",onInput:function(e){13!==e.keyCode&&i(e.target.value)},onKeyDown:function(t){13===t.keyCode&&(e.editComment(l),m(!1))}}):e.comment.commentText),o.a.createElement(f.a,{className:"commentOptions"},o.a.createElement(x.a,{variant:"outline-secondary",disabled:!0},e.comment.likes,o.a.createElement("span",{className:"text"}," Likes")),o.a.createElement("span",{className:"text"},"|"),o.a.createElement(x.a,{variant:"outline-secondary",onClick:e.likeComment},o.a.createElement(E.a,{src:h.a}),o.a.createElement("span",{className:"text"}," Like")),o.a.createElement("span",{className:"text"},"|"),o.a.createElement(x.a,{variant:"outline-secondary",onClick:function(){return m(!c)}},o.a.createElement(E.a,{src:g.a}),o.a.createElement("span",{className:"text"}," Edit")),o.a.createElement("span",{className:"text"},"|"),o.a.createElement(x.a,{variant:"outline-secondary",onClick:e.deleteComment},o.a.createElement(E.a,{src:S.a}),o.a.createElement("span",{className:"text"}," Delete"))))},P=Object(u.b)(null,(function(e,t){return{likeComment:function(){e({type:"LIKE_COMMENT",postIndex:t.postIndex,commentIndex:t.commentIndex})},editComment:function(n){e({type:"EDIT_COMMENT",postIndex:t.postIndex,commentIndex:t.commentIndex,commentText:n})},deleteComment:function(){e({type:"DELETE_COMMENT",postIndex:t.postIndex,commentIndex:t.commentIndex})}}}))(M),_=function(e){var t=e.comments.map((function(t,n){return o.a.createElement("div",null,o.a.createElement(v,null),o.a.createElement(P,{postIndex:e.postIndex,comment:t,commentIndex:n}))}));return(o.a.createElement(o.a.Fragment,null,t))},L=(n(53),function(e){var t=Object(a.useState)(""),n=Object(p.a)(t,2),c=n[0],m=n[1];return(o.a.createElement("div",null,o.a.createElement(v,null),o.a.createElement(y.a.Control,{className:"addCommentBox",type:"text",placeholder:"Add a Comment",value:c,onInput:function(e){13!==e.keyCode&&m(e.target.value)},onKeyDown:function(t){13===t.keyCode&&(e.addComment(c),m(""))}})))}),B=(n(54),n(29)),K=n.n(B),A=n(30),W=n.n(A),F=n(31),G=n.n(F),J=n(32),V=n.n(J),Z=function(e){var t=Object(a.useState)(!1),n=Object(p.a)(t,2),c=n[0],m=n[1];return(o.a.createElement(d.a,{className:"post"},o.a.createElement(d.a.Title,null,o.a.createElement(v,null),o.a.createElement(k,{time:e.post.postDateTime}),o.a.createElement(E.a,{src:V.a,className:"ellipsis"})),o.a.createElement(d.a.Body,null,e.post.postText,o.a.createElement(d.a.Text,{className:"likesComments"},o.a.createElement("span",null,e.post.likes," Likes"),o.a.createElement(E.a,{src:K.a}),o.a.createElement("span",null,e.post.comments.length," Comments"))),o.a.createElement(d.a.Footer,null,o.a.createElement(f.a,{className:"likesCommentsButtons"},o.a.createElement(x.a,{variant:"outline-secondary",onClick:function(){return e.likePost(e.postIndex)}},o.a.createElement(E.a,{src:W.a}),"Like"),o.a.createElement(x.a,{variant:"outline-secondary",onClick:function(){return m(!c)}},o.a.createElement(E.a,{src:G.a}),"Comment")),c&&o.a.createElement(L,{addComment:e.addComment}),e.post.comments.length>0&&o.a.createElement(_,{comments:e.post.comments,postIndex:e.postIndex}))))},H=function(e){return e.posts.slice().sort((function(e,t){return t.postDateTime-e.postDateTime}))},R=Object(u.b)((function(e,t){return{post:H(e)[t.postIndex]}}),(function(e,t){return{likePost:function(){e({type:"LIKE_POST",postIndex:t.postIndex})},addComment:function(n){e({type:"ADD_COMMENT",postIndex:t.postIndex,comment:n})}}}))(Z),U=function(e){var t=e.allPosts.map((function(e,t){return o.a.createElement(R,{postIndex:t})}));return(o.a.createElement("div",null,t))},$=Object(u.b)((function(e){return{allPosts:H(e)}}))(U),q={display:"inline-block",float:"left",borderRadius:"3vh"},z=function(){return o.a.createElement(x.a,{variant:"dark",style:q},"Photo/Video")},Q=(n(55),function(e){var t=Object(a.useState)(""),n=Object(p.a)(t,2),c=n[0],m=n[1];return(o.a.createElement(d.a,{className:"cardStyle"},o.a.createElement(d.a.Body,null,o.a.createElement(y.a,null,o.a.createElement(y.a.Group,null,o.a.createElement(v,null),o.a.createElement(y.a.Control,{as:"textarea",rows:"3",placeholder:"What is on your mind?",className:"inputStyle",value:c,onInput:function(e){return m(e.target.value)}})),o.a.createElement(z,null),o.a.createElement(x.a,{variant:"primary",className:"postItButtonStyle",disabled:""===c,onClick:function(){e.submitPost(c),m("")}},"Post It")))))}),X=Object(u.b)(null,(function(e){return{submitPost:function(t){e({type:"MAKE_POST",post:t})}}}))(Q),Y=(n(56),function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(X,null),o.a.createElement($,null))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee,te=n(5),ne=n(33),ae=n(9),oe=n(35),ce={posts:[{postText:"First!",postDateTime:new Date((new Date).getTime()-3e5),likes:1,comments:[{commentText:"woah, so cool",likes:1,commentDateTime:new Date((new Date).getTime()-18e4)},{commentText:"this is the next comment",likes:0,commentDateTime:new Date}]},{postText:"Second is best!",postDateTime:new Date,likes:2,comments:[]}]},me=Object(oe.a)(ce,(ee={},Object(ae.a)(ee,"MAKE_POST",(function(e,t){e.posts.push({postText:t.post,postDateTime:new Date,likes:0,comments:[]})})),Object(ae.a)(ee,"LIKE_POST",(function(e,t){e.posts.sort((function(e,t){return t.postDateTime-e.postDateTime})),e.posts[t.postIndex].likes++})),Object(ae.a)(ee,"LIKE_COMMENT",(function(e,t){e.posts.sort((function(e,t){return t.postDateTime-e.postDateTime})),e.posts[t.postIndex].comments[t.commentIndex].likes++})),Object(ae.a)(ee,"ADD_COMMENT",(function(e,t){e.posts.sort((function(e,t){return t.postDateTime-e.postDateTime})),e.posts[t.postIndex].comments.push({commentText:t.comment,likes:0,commentDateTime:new Date})})),Object(ae.a)(ee,"EDIT_COMMENT",(function(e,t){e.posts.sort((function(e,t){return t.postDateTime-e.postDateTime})),e.posts[t.postIndex].comments[t.commentIndex].commentText=t.commentText})),Object(ae.a)(ee,"DELETE_COMMENT",(function(e,t){e.posts.sort((function(e,t){return t.postDateTime-e.postDateTime}));var n=t.commentIndex;e.posts[t.postIndex].comments.splice(n,n+1)})),ee)),se=Object(te.createStore)(me,Object(ne.composeWithDevTools)());m.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u.a,{store:se},o.a.createElement(Y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.dae11da8.chunk.js.map