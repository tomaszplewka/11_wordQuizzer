(()=>{"use strict";console.log("twoja stara");var e=document.querySelector("#front-page-start-btn"),t=document.querySelector("#front-page-demo-btn"),s=document.querySelector("#front-page-login-btn"),i=document.querySelector("#front-page-register-btn"),n=document.querySelector("#front-page-logo"),o=document.querySelector(".face.front"),a=document.querySelector(".face.top"),l=document.querySelector(".face.left");e.addEventListener("click",(function(){n.classList.add("loader-wrapper"),o.classList.add("loader-face-front"),a.classList.add("loader-face-top"),l.classList.add("loader-face-left"),e.classList.add("button-dissapear"),setTimeout((function(){o.classList.add("strip-background-border"),a.classList.add("strip-background-border"),l.classList.add("strip-background-border"),setTimeout((function(){n.parentElement.classList.add("logo-enlarge"),setTimeout((function(){t.parentElement.classList.remove("hide"),t.classList.remove("hidden"),s.classList.remove("hidden"),i.parentElement.classList.remove("hidden")}),500)}),250)}),750)}));var r=document.querySelector("#burger"),d=document.querySelector("#times"),c=document.querySelector("#options-wrapper");r.addEventListener("click",(function(){r.classList.toggle("hide"),d.classList.toggle("hide"),c.classList.toggle("hidden-options")})),d.addEventListener("click",(function(){r.classList.toggle("hide"),d.classList.toggle("hide"),c.classList.toggle("hidden-options")}));var u=document.querySelector("#main-section-wrapper"),m=document.querySelector("#register-wrapper");i.addEventListener("click",(function(){u.firstElementChild.classList.add("shrink"),setTimeout((function(){u.classList.toggle("hidden-options"),m.classList.toggle("hidden-options"),C("register-tabindex"),setTimeout((function(){p.username.focus()}),500)}),600)})),document.querySelector("#register-back-btn").addEventListener("click",(function(){u.classList.toggle("hidden-options"),m.classList.toggle("hidden-options"),setTimeout((function(){u.firstElementChild.classList.remove("shrink"),k("register-tabindex"),x("#register-form input",p["register-submit"]),V(H)}),600)}));var f=document.querySelector("#login-wrapper");s.addEventListener("click",(function(){u.firstElementChild.classList.add("shrink"),setTimeout((function(){u.classList.toggle("hidden-options"),f.classList.toggle("hidden-options"),C("login-tabindex"),setTimeout((function(){J.email.focus()}),500)}),600)})),document.querySelector("#login-back-btn").addEventListener("click",(function(){u.classList.toggle("hidden-options"),f.classList.toggle("hidden-options"),setTimeout((function(){u.firstElementChild.classList.remove("shrink"),k("login-tabindex"),x("#login-form input",J["login-submit"]),V(W)}),600)}));var p=document.querySelector("#register-form"),h=/^(\w+( \w+)*){6,20}$/,L=/^([a-zA-Z]{1}[\w\.]{0,20})@([a-zA-Z]{2,15})\.([a-zA-Z]{2,5})(\.[a-zA-Z]{2,5})?$/,v=/^[a-zA-Z]{4,}$/,g=document.querySelector("#username-validation"),E=document.querySelector("#email-validation"),b=document.querySelector("#password-validation"),w=document.querySelector("#confirm-password-validation"),y=function(){return p.username.classList.contains("input-valid")&&p.email.classList.contains("input-valid")&&p.password.classList.contains("input-valid")&&p["confirm-password"].classList.contains("input-valid")?(p["register-submit"].classList.remove("disabled"),!0):(p["register-submit"].classList.add("disabled"),!1)},C=function(e){var t=document.querySelectorAll(".".concat(e));Array.from(t).forEach((function(e){e.removeAttribute("tabindex")}))},k=function(e){var t=document.querySelectorAll(".".concat(e));Array.from(t).forEach((function(e){e.setAttribute("tabindex","-1")}))};document.addEventListener("keypress",(function(e){if(13===e.key)return e.preventDefault(),!1}));var q=function(e,t){t.lastElementChild.classList.contains("hide")||(t.lastElementChild.classList.add("hide"),e.classList.remove("input-invalid"),e.classList.add("input-valid")),t.firstElementChild.classList.remove("hide"),e.classList.add("input-valid")},S=function(e,t){t.firstElementChild.classList.contains("hide")||(t.firstElementChild.classList.add("hide"),e.classList.remove("input-valid"),e.classList.add("input-invalid")),t.lastElementChild.classList.remove("hide"),e.classList.add("input-invalid")},T=function(e,t){t.lastElementChild.classList.add("hide"),e.classList.remove("input-invalid")},A=function(e,t,s){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"username"===i?e.test(t.value)&&!z.includes(t.value)?q(t,s):S(t,s):"email"===i?e.test(t.value)&&!D.includes(t.value)?q(t,s):S(t,s):e.test(t.value)?q(t,s):S(t,s)},x=function(e,t){var s=document.querySelectorAll(e);Array.from(s).forEach((function(e){e.value="",e.classList.remove("input-valid"),e.classList.remove("input-invalid"),e.parentElement.lastElementChild.firstElementChild.classList.contains("hide")||e.parentElement.lastElementChild.firstElementChild.classList.add("hide"),e.parentElement.lastElementChild.lastElementChild.classList.contains("hide")||e.parentElement.lastElementChild.lastElementChild.classList.add("hide")})),t.classList.contains("disabled")||t.classList.add("disabled")},z=[],D=[];p.username.addEventListener("keyup",(function(){A(h,p.username,g,"username"),y()})),p.username.addEventListener("blur",(function(){A(h,p.username,g,"username"),y()})),p.email.addEventListener("keyup",(function(){A(L,p.email,E,"email"),y()})),p.email.addEventListener("blur",(function(){A(L,p.email,E,"email"),y()})),p.password.addEventListener("keyup",(function(){A(v,p.password,b),p.password.classList.contains("input-valid")&&""!==p.password.value&&p["confirm-password"].value===p.password.value?q(p["confirm-password"],w):S(p["confirm-password"],w),y()})),p.password.addEventListener("blur",(function(){A(v,p.password,b),p.password.classList.contains("input-valid")&&""!==p.password.value&&p["confirm-password"].value===p.password.value?q(p["confirm-password"],w):S(p["confirm-password"],w),y()})),p["confirm-password"].addEventListener("keyup",(function(){p.password.classList.contains("input-valid")&&""!==p.password.value&&p["confirm-password"].value===p.password.value?q(p["confirm-password"],w):S(p["confirm-password"],w),y()})),p["confirm-password"].addEventListener("blur",(function(){p.password.classList.contains("input-valid")&&""!==p.password.value&&p["confirm-password"].value===p.password.value?q(p["confirm-password"],w):S(p["confirm-password"],w),y()}));var Z=function(e){if(e.php_error){var t=document.querySelector(".".concat(e.field,"-wrapper-if-error"));return t.firstElementChild.classList.remove("hide"),t.querySelector(".".concat(e.field,"-error-text")).textContent=e.msg,1}return document.querySelector(".".concat(e.field,"-wrapper-if-ok")).firstElementChild.classList.remove("hide"),0},j=document.querySelectorAll("#register-form input"),$=document.querySelectorAll("#login-form input"),F=function(e){Array.from(e).forEach((function(e){e.setAttribute("readonly",!0)}))},N=function(e){Array.from(e).forEach((function(e){e.removeAttribute("readonly")}))},_=document.querySelector("#submit-feedback .error-icon-wrapper"),B=document.querySelector("#feedback-wrapper"),G=document.querySelector("#feedback-back-btn");_.addEventListener("click",(function(){B.classList.toggle("hidden-options")})),G.addEventListener("click",(function(){B.classList.toggle("hidden-options")}));var H=document.querySelector("#submit-feedback"),I=document.querySelector("#registration-confirmation");p.addEventListener("submit",(function(e){if(H.classList.contains("hide")?(H.classList.remove("hide"),H.lastElementChild.classList.remove("hide")):(H.firstElementChild.classList.add("hide"),H.lastElementChild.classList.remove("hide")),F(j),U(B),y()){var t=0;p["register-submit"].classList.contains("disabled")||p["register-submit"].classList.add("disabled"),fetch(p.action,{method:p.method,body:new FormData(p)}).then((function(e){if(!e.ok)throw new Error("Network problem.");return e.json()})).then((function(e){(t=function(e){var t=0;return Z(e.username)&&(t++,S(p.username,g),z.push(p.username.value)),Z(e.email)&&(t++,S(p.email,E),D.push(p.email.value)),Z(e.password)&&(t++,S(p.password,b)),Z(e.confirm_password)&&(t++,S(p["confirm-password"],w)),t+Z(e.db)}(e))?setTimeout((function(){H.lastElementChild.classList.add("hide"),H.firstElementChild.classList.remove("hide"),N(j)}),500):setTimeout((function(){N(j),H.classList.add("hide"),H.firstElementChild.classList.add("hide"),setTimeout((function(){I.querySelector("span").textContent=p.username.value,I.classList.remove("hidden-options"),x("#register-form input",p["register-submit"]),setTimeout((function(){u.classList.toggle("hidden-options"),m.classList.toggle("hidden-options"),k("register-tabindex"),setTimeout((function(){I.classList.add("hidden-options"),u.classList.toggle("hidden-options"),f.classList.toggle("hidden-options"),setTimeout((function(){C("login-tabindex"),J.email.focus()}),600)}),1500)}),1e3)}),500)}),1e3)})).catch((function(e){console.log(e),t&&setTimeout((function(){H.lastElementChild.classList.add("hide"),H.firstElementChild.classList.remove("hide"),N(j)}),500)}))}e.preventDefault()}));var J=document.querySelector("#login-form"),K=document.querySelector("#login-email-validation"),M=document.querySelector("#login-password-validation"),O=function(){""!==J.email.value&&L.test(J.email.value)&&""!==J.password.value?J["login-submit"].classList.remove("disabled"):J["login-submit"].classList.add("disabled")};J.email.addEventListener("keyup",(function(){O()})),J.email.addEventListener("blur",(function(){O()})),J.password.addEventListener("keyup",(function(){O()})),J.password.addEventListener("blur",(function(){O()}));var P=document.querySelector("#submit-login-feedback .error-icon-wrapper"),Q=document.querySelector("#login-feedback-wrapper"),R=document.querySelector("#login-feedback-back-btn");P.addEventListener("click",(function(){Q.classList.toggle("hidden-options")})),R.addEventListener("click",(function(){Q.classList.toggle("hidden-options")}));var U=function(e){Array.from(e.lastElementChild.children).forEach((function(e){e.firstElementChild.classList.contains("hide")||e.firstElementChild.classList.add("hide")}))},V=function(e){e.classList.contains("hide")||(e.firstElementChild.classList.contains("hide")||e.firstElementChild.classList.add("hide"),e.lastElementChild.classList.contains("hide")||e.lastElementChild.classList.add("hide"),e.classList.add("hide"))},W=document.querySelector("#submit-login-feedback"),X=document.querySelector("#login-confirmation");J.addEventListener("submit",(function(e){if(""!==J.email.value&&L.test(J.email.value)&&""!==J.password.value&&!J.email.hasAttribute("readonly")&&!J.password.hasAttribute("readonly")){W.classList.contains("hide")?(W.classList.remove("hide"),W.lastElementChild.classList.remove("hide")):(W.firstElementChild.classList.add("hide"),W.lastElementChild.classList.remove("hide")),F($),U(Q);var t=0;fetch(J.action,{method:J.method,body:new FormData(J)}).then((function(e){if(!e.ok)throw new Error("Network problem.");return e.json()})).then((function(e){(t=function(e){var t=0;return Z(e.email)?(t++,S(J.email,K),setTimeout((function(){T(J.email,K)}),2e3),t):(q(J.email,K),Z(e.password)?(t++,S(J.password,M),setTimeout((function(){T(J.password,M)}),2e3)):q(J.password,M),t+=Z(e.db))}(e))?setTimeout((function(){W.lastElementChild.classList.add("hide"),W.firstElementChild.classList.remove("hide"),N($)}),500):setTimeout((function(){N($),W.classList.add("hide"),W.firstElementChild.classList.add("hide"),setTimeout((function(){X.classList.remove("hidden-options"),x("#login-form input",J["login-submit"]),setTimeout((function(){u.classList.toggle("hidden-options"),f.classList.toggle("hidden-options"),k("login-tabindex"),setTimeout((function(){X.classList.add("hidden-options"),u.classList.toggle("hidden-options"),window.location="./welcome.php"}),500)}),1500)}),500)}),1e3)})).catch((function(e){console.log(e),t&&setTimeout((function(){W.lastElementChild.classList.add("hide"),W.firstElementChild.classList.remove("hide"),N()}),500)}))}e.preventDefault()}))})();