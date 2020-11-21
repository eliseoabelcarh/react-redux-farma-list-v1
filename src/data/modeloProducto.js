import products from './products'

const crearModeloProducto = (objeto) => {

    if (!objeto.concent) {
        console.log('falta campo concent')
        return
    }
    if (!objeto.fecVctoRegSanitario) {
        console.log('falta campo concent')
        return
    }
    if (!objeto.fracciones) {
        console.log('falta campo concent')
        return
    }

    if (!objeto.nomFormFarm) {
        console.log('falta campo concent')
        return
    }
    if (!objeto.nomFormFarmSimplif) {
        console.log('falta campo concent')
        return
    }
    if (!objeto.nomProd) {
        console.log('falta campo concent')
        return
    }
    if (!objeto.nomTitular) {
        console.log('falta campo concent')
        return
    }
    if (!objeto.numRegSan) {
        console.log('falta campo concent')
        return
    }
    if (!objeto.presentac) {
        console.log('falta campo concent')
        return
    }
    if (!objeto.situacion) {
        console.log('falta campo concent')
        return
    }
    const product = {}
    const lastId = calcularId()
    product.Cod_Prod = lastId
    product.Nom_Prod = objeto.concent
    product.Concent = objeto.concent
    product.Nom_Form_Farm = objeto.concent
    product.Nom_Form_Farm_Simplif = objeto.concent
    product.Presentac = objeto.concent
    product.Fracciones = objeto.concent
    product.Fec_Vcto_Reg_Sanitario = objeto.concent
    product.Num_RegSan = objeto.concent
    product.Nom_Titular = objeto.concent
    product.Situacion = objeto.concent
    return product


}



export default crearModeloProducto


function calcularId() {
    return products.length + Math.floor(Math.random() * (100 - 1)) + 1
}