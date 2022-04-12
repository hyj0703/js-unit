// function showAndHide(div:HTMLElement,attr:'display',value:'block'|'none')
// function showAndHide(div:HTMLElement,attr:'opacity',value:number)
// function showAndHide(div:any,attr:any,value:any){}
// const div = document.getElementById('div')
// if(div){
//   showAndHide(div,'display','block')
//   showAndHide(div,'display','none')
//   showAndHide(div,'opacity',1)
//   // showAndHide(div,'opacity','block')
// }
interface obj {
  [key:string]:string|number
}
function css(div:HTMLElement,attr:obj)
function css(div:HTMLElement,attr:string,value:string|number)
function css(div:any,attr:any,value?:any){}
const div = document.getElementById('div')
if(div){
  css(div,'width','10px')
  css(div,{'width':'10px'})
  // css(div,"width")
}
