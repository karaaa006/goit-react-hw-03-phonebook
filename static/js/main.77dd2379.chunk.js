(this["webpackJsonpgoit-hw-create-react-app-template"]=this["webpackJsonpgoit-hw-create-react-app-template"]||[]).push([[0],{14:function(t,e,n){t.exports={Filter:"Filter_Filter__2PDlr"}},21:function(t,e,n){},22:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(11),r=n.n(s),o=(n(21),n(2)),i=n(3),l=n(5),u=n(4),b=(n(22),n(15)),d=n(9),h=n.n(d),m=n(12),j=n.n(m),f=n(13),p=n(7),O=n.n(p),x=n(0),_=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(f.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.onSubmit({name:a,number:c}),t.setState({name:"",number:""})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("form",{onSubmit:this.handleSubmit,className:O.a.form,children:[Object(x.jsxs)("label",{className:O.a.label,children:[Object(x.jsx)("p",{className:"labelText",children:"Name"}),Object(x.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(x.jsxs)("label",{className:O.a.label,children:[Object(x.jsx)("p",{className:"labelText",children:"Number"}),Object(x.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(x.jsx)("button",{type:"submit",className:O.a.btn,children:"Add contact"})]})}}]),n}(a.Component),C=n(6),v=n.n(C),g=n(16);function N(t){var e=t.contacts,n=t.handleDel;return Object(x.jsx)("div",{className:"contacts",children:Object(x.jsx)("ul",{className:v.a.contactList,children:e&&e.map((function(t){return Object(x.jsxs)("li",{className:v.a.contactItem,children:[Object(x.jsxs)("p",{className:v.a.contactText,children:[t.name,": ",t.number]}),Object(x.jsx)("button",{className:v.a.delBtn,"data-contact-id":t.id,onClick:n,children:Object(x.jsx)(g.a,{className:v.a.icon})})]},t.id)}))})})}var S=n(14),y=n.n(S);function k(t){var e=t.filter,n=t.onChange;return Object(x.jsxs)("label",{className:y.a.Filter,children:[Object(x.jsx)("p",{className:"labelText",children:"Find contacts by name"}),Object(x.jsx)("input",{type:"text",className:"search",value:e,onChange:n})]})}var F=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.handleSubmit=function(e){var n=e.name,a=e.number;t.isInclude(n)?alert("".concat(n," is already in contacts.")):t.setState((function(t){return{contacts:t.contacts.concat({id:j.a.generate(),name:n,number:a})}}))},t.contactFilter=function(e){t.setState({filter:e.target.value})},t.getFilteredContacts=function(){if(t.state.contacts)return t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}))},t.isInclude=function(e){if(t.state.contacts)return t.state.contacts.some((function(t){return t.name.toLowerCase()===e.toLowerCase()}))},t.deleteContact=function(e){var n=t.state.contacts.findIndex((function(t){return t.id===e.currentTarget.dataset.contactId}));t.setState((function(t){var e=Object(b.a)(t.contacts);return e.splice(n,1),{contacts:e}}))},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return Object(x.jsxs)("section",{className:h.a.phonebook,children:[Object(x.jsx)("h1",{children:"Phonebook"}),Object(x.jsxs)("div",{className:h.a.featuresWrap,children:[Object(x.jsxs)("div",{className:h.a.addContact,children:[Object(x.jsx)("h2",{children:"Add new contact"}),Object(x.jsx)(_,{onSubmit:this.handleSubmit})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Contacts"}),Object(x.jsx)(k,{filter:this.state.filter,onChange:this.contactFilter}),Object(x.jsx)(N,{contacts:this.getFilteredContacts(),handleDel:this.deleteContact})]})]})]})}}]),n}(a.Component),L=F,w=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(L,{})})}}]),n}(a.Component),A=w;r.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(A,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={contactList:"ContactList_contactList__3AzK5",contactItem:"ContactList_contactItem__1qQZo",contactText:"ContactList_contactText__3Ikkm",delBtn:"ContactList_delBtn__1el_U",icon:"ContactList_icon__2SQVh"}},7:function(t,e,n){t.exports={form:"ContactForm_form__2cO50",label:"ContactForm_label__2YexJ",btn:"ContactForm_btn__rVehh"}},9:function(t,e,n){t.exports={phonebook:"Phonebook_phonebook__2EZmM",featuresWrap:"Phonebook_featuresWrap__MtWhO",addContact:"Phonebook_addContact__2Gesi"}}},[[32,1,2]]]);
//# sourceMappingURL=main.77dd2379.chunk.js.map