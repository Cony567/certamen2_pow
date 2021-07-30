


document.querySelector("#registrar-btn").addEventListener("click", async()=>{
    let fecha = document.querySelector("#fecha-txt").value;
    let hora = document.querySelector("#hora-txt").value;
    let medidor = +document.querySelector("#medidor-select").value;
    let direccion = document.querySelector("#direccion-txt").value;
    let valor = +document.querySelector("#valor-txt").value;
    let tipo_medida = document.querySelector("#tipo-medida-select").value;

    let errores = [];
    if(hora === ""){
        errores.push("Debe ingresar una hora");
    }else{
        if (hora.length > 5 || hora.length < 5){
            errores.push("La hora no tiene el formato adecuado");
        }else{
            if(!(hora[2]==":")){
                errores.push("La hora no tiene el formato adecuado");
            }else{
                if(isNaN(hora[0]) || isNaN(hora[1]) || isNaN(hora[3]) || isNaN(hora[4])){
                    errores.push("La hora no puede no ser numerica");
                }
            }
        }


    }
    if (valor<=0 || valor>500){
        errores.push("El valor es incorrecto, está fuera de rango");
    }
    if(errores.length == 0){
        let lectura = {};
        lectura.fecha = fecha;
        lectura.hora = hora;
        lectura.medidor = medidor;
        lectura.direccion = direccion;
        lectura.valor = valor;
        lectura.tipo_medida = tipo_medida;

        
        let res = await crearLectura(lectura);

        Swal.fire("Lectura registrada", "Lectura registrada exitosamente","success");
    }else{
        Swal.fire({
            title: "Errores de validacion",
            icon: "warning",
            html:errores.join("<br />")
        });
    }

    
    
    
    
});