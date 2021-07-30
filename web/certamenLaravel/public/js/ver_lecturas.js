
const crearTabla =(lecturas)=>{
    let tbody = document.querySelector("#tbody-lecturas");
    tbody.innerHTML = "";
    for(let i = 0; i<lecturas.length; i++){
        let tr = document.createElement("tr");

        let td_fecha= document.createElement("td");
        td_fecha.innerText = lecturas[i].fecha;
        let td_hora = document.createElement("td");
        td_hora.innerText = lecturas[i].hora;
        let td_medidor = document.createElement("td");
        td_medidor.innerText = lecturas[i].medidor;
        let td_valor = document.createElement("td");
        
        let icon = document.createElement("i");
        if (lecturas[i].tipo_medida == "KiloWatts"){
            td_valor.innerText=lecturas[i].valor +"kW";
        }else{
            if(lecturas[i].tipo_medida == "Watts"){
            td_valor.innerText = lecturas[i].valor +"W";
            }else{
                if(lecturas[i].tipo_medida == "Temperatura"){
                    td_valor.innerText = lecturas[i].valor +"C";
                }
            }
        }
        if(lecturas[i].valor > 60 && lecturas[i].tipo_medida == "Temperatura"){
            icon.classList.add("fas","fa-fire","text-danger", "fa-2x");
        }
        
        td_valor.appendChild(icon);

        
        let td_accion = document.createElement("td");
        let botonE = document.createElement("button");
        botonE.innerText = "Descartar Lectura";
        botonE.classList.add("btn","btn-danger");
        botonE.idLect = lecturas[i].id;
        botonE.addEventListener("click",inicioElim);
        td_accion.appendChild(botonE);

        tr.appendChild(td_fecha);
        tr.appendChild(td_hora);
        tr.appendChild(td_medidor);
        tr.appendChild(td_valor);
        tr.appendChild(td_accion);

        tbody.appendChild(tr);
    }
};

const inicioElim = async function() {
    let id = this.idLect;
    let resp = await Swal.fire({title:"¿Estas seguro de eliminar?", text:"Esta operacion es irreversible", icon:"error", showCancelButton:true})
    if(resp.isConfirmed){
        Swal.fire("¿Desea Eliminar esta lectura?");
        if (await eliminarLectura(id)){
            let lecturas = await getLecturas();
            crearTabla(lecturas);
            Swal.fire("Lectura Eliminada","Lectura eliminada exitodamente", "info");
        }else{
            Swal.fire("UPS!, Error", "No se pudo atender la solicitud", "error");
        }
    }else{
        Swal.fire("Cancelado","Cancelacion de petición", "info")
    }


};


document.querySelector("#filtro-select").addEventListener("change",async()=>{
    let filtro = document.querySelector("#filtro-select").value;
    let lecturas = await getLecturasFilt(filtro);
    crearTabla(lecturas);
});


document.addEventListener("DOMContentLoaded",async()=>{
    //await crearTabla();
    let lecturas = await getLecturas();
    crearTabla(lecturas);
});