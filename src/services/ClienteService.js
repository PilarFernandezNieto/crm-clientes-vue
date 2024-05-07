import api from "../lib/axios"

export default {
    obtenerClientes(){
        return api.get('/clientes')
    },
    nuevoCliente(data){
        return api.post('/clientes', data)
    },
    obtenerCliente(id){
        return api.get('/clientes/'+id)
    },
    actualizarCliente(id, data){
    // PATCH - Reemplaza los campos que se envían
    // PUT - Reemplaza todo el objeto
        return api.patch('/clientes/'+id, data)
    },
    cambiarEstado(id, data){
        console.log(data);
          return api.patch("/clientes/" + id, data);
    },
    eliminarCliente(id){
        return api.delete("/clientes/" + id);
    }
}