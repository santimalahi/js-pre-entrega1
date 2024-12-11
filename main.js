
const intereses3 = 1.0673
const intereses6 = 1.1227

let valorProducto = parseFloat(prompt("cuál es el precio del producto?"));


if(valorProducto > 0){


    let cantidadCuotas = parseInt(prompt("en cuántas cuotas vas a pagar?"));

    function InteresesTres(valorProducto){
        let resultado1 = valorProducto / 3;
        let resultado2 = resultado1 * intereses3;
        return resultado2;
        }


        
    
    function InteresesSeis(valorProducto){
        let resultado3 = valorProducto / 6;
        let resultado4 = resultado3 * intereses6;
        return resultado4
        }
            


        // 3 CUOTAS

    if(cantidadCuotas === 3){
        let cuotasConIntereses3 = InteresesTres(valorProducto)
        alert("Cada cuota te va a salir "+ cuotasConIntereses3.toFixed(2));

        let total = confirm("querés saber el total?");
        if(total == true){
            let seguro3 = confirm("seguro?");
            if(seguro3 == true){
                let valorConIntereses3 = cuotasConIntereses3 * 3
                alert("En total vas a pagar "+ valorConIntereses3.toFixed(2))
            }else{

            }
            
        }else{
            alert("no te preocupes, no vas a sufrir tanto como los que eligieron 6 cuotas")
        }
    }


        // 6 CUOTAS

    if(cantidadCuotas === 6){
        let cuotasConIntereses6 = InteresesSeis(valorProducto);
        alert("Cada cuota te va a salir "+ cuotasConIntereses6.toFixed(2));
        
        let total = confirm("querés saber el total?");
        if(total == true){
            let seguro6 = confirm("seguro?");
            if(seguro6 == true){
                let valorConIntereses6 = cuotasConIntereses6 * 6
                alert("En total vas a pagar "+ valorConIntereses6)
            }else{

            }
            
        }else{
            
        } 


        // NI 3 NI 6 CUOTAS
    }
    if(cantidadCuotas != 3 && cantidadCuotas != 6){
        alert("no sabemos tanto de matemáticas...")
    }


}







    
        
        
        





    

        




