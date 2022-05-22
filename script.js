window.addEventListener("load",function(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let text_resultado = this.document.getElementById("text_resultado")
    let km_recorridos = this.document.getElementById("km_recorridos")
    let consumo_medio = this.document.getElementById("consumo_medio")
    let precio_gas = this.document.getElementById("precio_gas")
    let ocupantes = this.document.getElementById("ocupantes")
    let button_calcula = this.document.getElementById("button_calcula")
    let button_share = this.document.getElementById("button_share")
    if (queryString !== null) {
        const km_recorridos = urlParams.get('k')
        document.querySelector("#km_recorridos").value = km_recorridos
        const consumo_medio = urlParams.get('c')
        document.querySelector("#consumo_medio").value = consumo_medio
        const precio_gas = urlParams.get('p')
        document.querySelector("#precio_gas").value = precio_gas
        const ocupantes = urlParams.get('o')
        document.querySelector("#ocupantes").value = ocupantes
        text_resultado.innerHTML = round((((( parseFloat(km_recorridos) / 100 ) * parseFloat(consumo_medio)) * parseFloat(precio_gas)) / parseFloat(ocupantes)))   
    }
    function round(num) {
        var m = Number((Math.abs(num) * 100).toPrecision(15));
        return Math.round(m) / 100 * Math.sign(num);
    }
    button_calcula.addEventListener("click", function(){
        text_resultado.innerHTML = round((((( parseFloat(km_recorridos.value) / 100 ) * parseFloat(consumo_medio.value)) * parseFloat(precio_gas.value)) / parseFloat(ocupantes.value)))
    })
    button_share.addEventListener("click", share)
    function share(){
        navigator.clipboard.writeText(window.location.origin + window.location.pathname + "?k=" + km_recorridos.value + "&c=" + consumo_medio.value + "&p=" + precio_gas.value + "&o=" + ocupantes.value )
        alert("Enlace copiado al portapapeles :) ")
        /* TODO: Emergente en la misma página, el alert es muy feo :( */
    }
})
