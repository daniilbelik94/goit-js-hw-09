import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a=document.querySelector(".feedback-form");a.addEventListener("input",r);a.addEventListener("submit",m);let o={email:"",message:""};function n(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(localStorage.getItem("feedback-form-state")!=null){o=e;for(const t in e)e.hasOwnProperty(t)&&(a.elements[t].value=e[t])}}n();function r(e){const t=e.target.name,l=e.target.value;o[t]=l,localStorage.setItem("feedback-form-state",JSON.stringify(o))}function m(e){e.preventDefault(),a.elements.email.value.trim()!==""&&a.elements.message.value.trim()!==""?(console.log(o),localStorage.removeItem("feedback-form-state"),e.target.reset()):alert("Fill please all fields")}
//# sourceMappingURL=2-form.js.map
