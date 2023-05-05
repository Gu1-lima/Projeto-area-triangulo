let app = ()=>{
    let form =document.querySelector(".form");
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        let newData = getValues(); 
        console.log(newData)
        if (newData.Altura == "" || newData.Base == ""){
            window.alert("Preencha todos os dados")
            window.alert("SEU ANIMAL!")
        }else{
           if (isNaN(newData) || ""){
            window.alert("Apenas NÚMEROS!")
           }else{ 
            calc(newData);
        }
        }
    }) 
    let getValues = () =>{
        let A = document.querySelector("#Altura");
        let B = document.querySelector("#Base");
        let valores = {
            Altura: A.value,
            Base: B.value
        }
        return valores;
    };
    let calc = (value)=>{
        let resut_calc = (parseInt(value.Altura)) *(parseInt(value.Base))/2;
        mostrar_result(resut_calc)
    }
    let mostrar_result = (value)=>{
        let most = document.querySelector("#Resutado");
        most.innerHTML = `${value}`
    }
}
app()