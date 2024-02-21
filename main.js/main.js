(()=>{"use strict";function t(t,e){let i;return(...s)=>{i&&clearTimeout(i),i=setTimeout((()=>{t(...s),i=null}),e)}}class e{constructor(t,e,i){this.numeros=document.querySelectorAll(t),this.observaClasse=i,this.observaTarget=document.querySelector(e),this.handleMutation=this.handleMutation.bind(this)}static incrementarNumero(t){const e=+t.innerText;let i=0;const s=Math.floor(e/100),n=setInterval((()=>{i+=s,t.innerText=i,i>e&&(t.innerText=e,clearInterval(n))}),25*Math.random())}animaisNumero(){this.numeros.forEach((t=>{this.constructor.incrementarNumero(t)}))}handleMutation(t){t[0].target.classList.contains(this.observaClasse)&&(this.observa.disconnect(),this.animaisNumero())}addMutationObserve(){this.observa=new MutationObserver(this.handleMutation),this.observa.observe(this.observaTarget,{attributes:!0})}init(){return this.numeros&&this.observaTarget&&this.addMutationObserve(),this}}class i{constructor(t,e){this.slide=document.querySelector(t),this.wrapper=document.querySelector(e),this.changeEvent=new Event("changeEvent"),this.dist={finalPosition:0,startX:0,movement:0},this.activeClass="active"}updatePosition(t){return this.dist.movement=1.5*(this.dist.startX-t),this.dist.finalPosition-this.dist.movement}transition(t){this.slide.style.transition=t?"transform 0.3s":""}moveSlide(t){this.dist.movePosition=t,this.slide.style.transform=`translate3d(${t}px, 0, 0)`}onStart(t){let e;"mousedown"===t.type?(t.preventDefault(),this.dist.startX=t.clientX,e="mousemove"):(this.dist.startX=t.changedTouches[0].clientX,e="touchmove"),this.wrapper.addEventListener(e,this.onMove),this.transition(!1)}onMove(t){const e="mousemove"===t.type?t.clientX:t.changedTouches[0].clientX,i=this.updatePosition(e);this.moveSlide(i)}addSlideEvent(){this.wrapper.addEventListener("mousedown",this.onStart),this.wrapper.addEventListener("touchstart",this.onStart),this.wrapper.addEventListener("mouseup",this.onEnd),this.wrapper.addEventListener("touchend",this.onEnd)}onEnd(t){const e="mouseup"===t.type?"mousemove":"touchmove";this.wrapper.removeEventListener(e,this.onMove),this.dist.finalPosition=this.dist.movePosition,this.transition(!0),this.changeSlideOnEnd()}changeSlideOnEnd(){this.dist.movement>120&&void 0!==this.index.next?this.activeNextSlide():this.dist.movement<-120&&void 0!==this.index.prev?this.activePrevSlide():this.changeSlide(this.index.active)}slidePosition(t){const e=(this.wrapper.offsetWidth-t.offsetWidth)/2;return-(t.offsetLeft-e)}slidesConfig(){this.slideArray=[...this.slide.children].map((t=>({position:this.slidePosition(t),element:t})))}slidesIndexNav(t){const e=this.slideArray.length-1;this.index={prev:t?t-1:void 0,active:t,next:t===e?void 0:t+1}}changeActiveClass(){this.slideArray.forEach((t=>{t.element.classList.remove(this.activeClass)})),this.slideArray[this.index.active].element.classList.add(this.activeClass)}changeSlide(t){const e=this.slideArray[t];this.moveSlide(this.slideArray[t].position),this.slidesIndexNav(t),this.dist.finalPosition=e.position,this.changeActiveClass(),this.wrapper.dispatchEvent(this.changeEvent)}activePrevSlide(){void 0!==this.index.prev&&this.changeSlide(this.index.prev)}activeNextSlide(){void 0!==this.index.next&&this.changeSlide(this.index.next)}onRezise(){setTimeout((()=>{this.slidesConfig(),this.changeSlide(this.index.active)}),1e3)}addReziseEvent(){window.addEventListener("resize",this.onRezise)}bindEvent(){this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this),this.updatePosition=this.updatePosition.bind(this),this.onRezise=t(this.onRezise.bind(this),200),this.activeNextSlide=this.activeNextSlide.bind(this),this.activePrevSlide=this.activePrevSlide.bind(this)}init(){return this.transition(!0),this.bindEvent(),this.addSlideEvent(),this.slidesConfig(),this.slidePosition(this.slide),this.onRezise(),this.changeSlide(0),this}}const s=new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollSuave=this.scrollSuave.bind(this)}scrollSuave(t){t.preventDefault();const e=t.currentTarget.getAttribute("href"),i=document.querySelector(e).offsetTop;window.scrollTo({...this.options,top:i})}addLinkEvent(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scrollSuave)}))}init(){return this.linksInternos.length&&this.addLinkEvent(),this}}('[data-menu="suave"] a[href^="#"]'),n=new class{constructor(t){this.accordinList=document.querySelectorAll(t),this.activeClass="ativo"}togleAccordion(t){t.nextElementSibling.classList.toggle(this.activeClass),t.classList.toggle(this.activeClass)}addAccordionEvent(){this.accordinList.forEach((t=>{t.addEventListener("click",(()=>{this.togleAccordion(t)}))}))}init(){return this.accordinList.length&&(this.addAccordionEvent(),this.togleAccordion(this.accordinList[0])),this}}(" [data-anime='acction'] dt"),o=new class{constructor(t,e){this.tabContent=document.querySelectorAll(t),this.tabAnimais=document.querySelectorAll(e),this.activeClass="ativo"}activeTab(t){this.tabContent.forEach((t=>{t.classList.remove(this.activeClass)}));const e=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,e)}addTabNavEvent(){this.tabAnimais.forEach(((t,e)=>{t.addEventListener("click",(()=>{this.activeTab(e)}))}))}init(){return this.tabAnimais.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}("[data-tab='content'] section","[data-tab='menu'] li"),a=new class{constructor(t,e,i){this.abrir=document.querySelector(t),this.fechar=document.querySelector(e),this.containerModal=document.querySelector(i),this.eventToggoleModal=this.eventToggoleModal.bind(this),this.containerModalClose=this.containerModalClose.bind(this)}abrirModal(){this.containerModal.classList.toggle("ativo")}eventToggoleModal(t){t.preventDefault(),this.abrirModal()}fecharModal(){this.containerModal.classList.remove("ativo")}containerModalClose(t){t.target===this.containerModal&&this.fecharModal(t)}addModalEvent(){this.fechar.addEventListener("click",this.eventToggoleModal),this.abrir.addEventListener("click",this.eventToggoleModal),this.containerModal.addEventListener("click",this.containerModalClose)}init(){return this.fechar&&this.abrir&&this.containerModal&&this.addModalEvent(),this}}("[data-modal='abrir']","[data-modal='fechar']","[data-modal='container']"),r=new class{constructor(t){this.tooltip=document.querySelectorAll(t),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}criarTooltipBox(t){const e=document.createElement("div"),i=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=i,document.body.appendChild(e),this.tooltipBox=e}onMouseMove(t){this.tooltipBox.style.top=`${t.pageY+20}px`,t.pageX+240>window.innerWidth?this.tooltipBox.style.left=t.pageX-240+"px":this.tooltipBox.style.left=`${t.pageX+20}px`}onMouseOver(t){this.criarTooltipBox(t.currentTarget),t.currentTarget.addEventListener("mouseleave",this.onMouseLeave),t.currentTarget.addEventListener("mousemove",this.onMouseMove)}onMouseLeave(t){this.tooltipBox.remove(),t.currentTarget.removeEventListener("mouseleave",this.onMouseLeave),t.currentTarget.removeEventListener("mousemove",this.onMouseMove)}addTooltipsEvent(){this.tooltip.forEach((t=>{t.addEventListener("mouseover",this.onMouseOver)}))}init(){return this.tooltip.length&&this.addTooltipsEvent(),this}}("[data-tooltip]"),h=new e("[data-numero]",".numero","active"),c=new class{constructor(e){this.sections=document.querySelectorAll(e),this.metadeTela=.6*window.innerHeight,this.checkDistance=t(this.checkDistance.bind(this),50)}getDistance(){this.distance=[...this.sections].map((t=>({element:t,offset:t.offsetTop-Math.floor(this.metadeTela)})))}checkDistance(){this.distance.forEach((t=>{window.pageYOffset>t.offset?t.element.classList.add("ativo"):t.element.classList.contains("ativo")&&t.element.classList.remove("ativo")}))}init(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}stop(){window.removeEventListener("scroll",this.checkDistance)}}('[data-anime="scroll"]'),d=new class{constructor(t,e){this.dropdownMenus=document.querySelectorAll(t),this.events=void 0===e?["touchstart","click"]:e,this.activeClass="active",this.activeDropdownMenu=this.activeDropdownMenu.bind(this)}activeDropdownMenu(t){t.preventDefault();const e=t.currentTarget;e.classList.add(this.activeClass),function(t,e,i){const s=document.documentElement,n="data-outside";function o(a){t.contains(a.target)||(e.forEach((t=>{s.removeEventListener(t,o)})),t.removeAttribute(n,""),i())}t.hasAttribute(n)||(e.forEach((t=>{s.addEventListener(t,o)})),t.setAttribute(n,""))}(e,this.events,(()=>{e.classList.remove(this.activeClass)}))}addDropdownMenusEvent(){this.dropdownMenus.forEach((t=>{this.events.forEach((e=>{t.addEventListener(e,this.activeDropdownMenu)}))}))}init(){return this.dropdownMenus.length&&this.addDropdownMenusEvent(),this}}("[data-dropdown]");new class{constructor(t,e,i){this.menuMobile=document.querySelector(t),this.listaMenu=document.querySelector(e),this.activeClass="active",this.events=void 0===i?["touchstart","click"]:i,this.openMenu=this.openMenu.bind(this)}openMenu(t){t.preventDefault(),this.listaMenu.classList.toggle(this.activeClass),this.menuMobile.classList.toggle(this.activeClass),function(t,e,i){const s=document.documentElement,n="data-outside";function o(a){t.contains(a.target)||(e.forEach((t=>{s.removeEventListener(t,o)})),t.removeAttribute(n,""),i())}t.hasAttribute(n)||(e.forEach((t=>{s.addEventListener(t,o)})),t.setAttribute(n,""))}(this.menuMobile,this.events,(()=>{this.menuMobile.classList.remove(this.activeClass),this.listaMenu.classList.remove(this.activeClass)}))}addMenuMobileEvent(){this.events.forEach((t=>this.menuMobile.addEventListener(t,this.openMenu)))}init(){return this.menuMobile&&this.listaMenu&&this.addMenuMobileEvent(),this}}('[data-menu="button"]','[data-menu="lista"]').init(),new class{constructor(t,e){this.funcionamento=document.querySelector(t),this.activeCLass=e}dadosFuncinamento(){this.semana=this.funcionamento.dataset.semana.split(",").map(Number),this.horario=this.funcionamento.dataset.horario.split(",").map(Number)}dadosAgora(){this.dataAgora=new Date,this.dataSemana=this.dataAgora.getDay(),this.dataHorario=this.dataAgora.getUTCHours()-3}estaAbreto(){return this.semanaAberta=-1!==this.semana.indexOf(this.dataSemana),this.horarioAberto=this.dataHorario>=this.horario[0]&&this.dataHorario<this.horario[1],this.semanaAberta&&this.horarioAberto}ativaAberto(){this.estaAbreto()&&this.funcionamento.classList.add(this.activeCLass)}init(){return this.funcionamento&&(this.dadosAgora(),this.dadosFuncinamento(),this.ativaAberto()),this}}("[data-semana]","open").init(),d.init(),c.init(),h.init(),r.init(),a.init(),r.init(),o.init(),s.init(),n.init(),function(t,i){const s=document.querySelector(".numero-grid");!async function(){try{const t=await fetch("../../animais.json");(await t.json()).forEach((t=>{(function(t){const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3 class="texto">${t.especie}</h3><span class="numero-detalhe" data-numero>${t.total}</span>`,e}(t);s.appendChild(e)})(t),(new e).init()}))}catch{console.log(Error("Algum coisa deu errado!"))}}()}(),fetch("https://blockchain.info/ticker").then((t=>t.json().then((t=>{document.querySelector(".btc-preco").innerText=(100/t.BRL.sell).toFixed(4)})))).catch((()=>{console.log(Error("Algum de errado"))}));const l=new class extends i{addArrow(t,e){this.prevElement=document.querySelector(t),this.nextElement=document.querySelector(e),this.addArrowEvent()}constructor(t,e){super(t,e),this.bindControlEvent()}addArrowEvent(){this.prevElement.addEventListener("click",this.activePrevSlide),this.nextElement.addEventListener("click",this.activeNextSlide)}createControl(){const t=document.createElement("ul");return t.dataset.control="slide",this.slideArray.forEach(((e,i)=>{t.innerHTML+=`<li><a href="#slide"${i+1}>${i+1}</a></li>`})),this.wrapper.appendChild(t),t}eventControl(t,e){t.addEventListener("click",(t=>{t.preventDefault(),this.changeSlide(e)})),this.wrapper.addEventListener("changeEvent",this.activaControlItem)}addControl(t){this.control=document.querySelector(t)||this.createControl(),this.controlArray=[...this.control.children],this.controlArray.forEach(this.eventControl),this.activaControlItem()}activaControlItem(){this.controlArray.forEach((t=>t.classList.remove(this.activeClass))),this.controlArray[this.index.active].classList.add(this.activeClass)}bindControlEvent(){this.eventControl=this.eventControl.bind(this),this.activaControlItem=this.activaControlItem.bind(this)}}(".slide",".wrapper");l.init(),l.changeSlide(0),l.activePrevSlide(),l.addControl(".custom-controls")})();