//Factory Function
// function criaCalculadora(){
//     return {
//         display:document.querySelector(".display"),

//         iniciar(){
//             this.clicaBotoes()
//         },
//         clicaBotoes(){
//             document.addEventListener("click",(event)=>{
//                 element=event.target
//                 if(element.classList.contains("btn-num")){
//                     this.mandaParaDisplay(element.innerText)
//                 }
//                 if(element.classList.contains("btn-clear")){
//                     this.limpaDisplay()
//                 }
//                 if(element.classList.contains("btn-del")){
//                     this.deleteDisplay()
//                 }
//                 if(element.classList.contains("btn-eq")){
//                    this.realizaConta()
//                 }
//             })
//         },
//         mandaParaDisplay(valor){
//             this.display.value+=valor
//         },
//         limpaDisplay(){
//             this.display.value=""
//         },
//         deleteDisplay(){
//             this.display.value=this.display.value.slice(0,-1)
//         },
//         realizaConta(){
//             let conta=this.display.value
//             try{
//                 conta=eval(conta)
//             }catch(error){
//                 window.alert("Verifique se os números digitados são validos!")
//                 return
//             }
//             if(!conta){
//                 window.alert("Verifique se os números digitados são validos!")
//                 return
//             }
//             this.display.value=conta
//         }

//     }
// }
// const calculadora=criaCalculadora()
// calculadora.iniciar()


//Constructor Function
function CriaCalculadora(){
    this.display=document.querySelector(".display")
    this.iniciar=()=>{
        this.cliqueBotoes()
    }
    this.cliqueBotoes=()=>{
        document.addEventListener("click",(event)=>{
            const element=event.target
            if(element.classList.contains("btn-num")){
                this.mandaParaODisplay(element.innerText)
            }
            if(element.classList.contains("btn-clear")){
                this.limpaDisplay()
            }
            if(element.classList.contains("btn-del")){
                this.deletaValorDisplay()
            }
            if(element.classList.contains("btn-eq")){
                this.calcular()
            }
            
        })
    }
    this.mandaParaODisplay=(valor)=>{
        this.display.value+=valor
    }
    this.limpaDisplay=()=>{
        this.display.value=""
    }
    this.deletaValorDisplay=()=>{
        this.display.value=this.display.value.slice(0,-1)
    }
    this.calcular=()=>{
        let resultado=this.display.value
        resultado=resultado.replace("x","*")
        let conta;
        try{
        conta=eval(resultado)
        }catch(error){
            window.alert("Digite um valor válido!")
            return
        }
        if(!conta){
            window.alert("Digite um valor válido!")
            return
        }
        this.display.value=conta
    }
}
const calculadora= new CriaCalculadora()
calculadora.iniciar()