<script setup>
import {onMounted, reactive} from 'vue'
import { FormKit } from '@formkit/vue';
import { useRouter, useRoute } from 'vue-router'
import ClienteService from '../services/ClienteService';
import RouterLink from '../components/UI/RouterLink.vue';
import Heading from '../components/UI/Heading.vue';

const router = useRouter()
const route = useRoute()

const {id} = route.params;

const formData = reactive({})

defineProps({
    titulo: {
        type: String
    }
})


onMounted(() => {
    ClienteService.obtenerCliente(id)
        .then(({data}) => {
            Object.assign(formData, data)
  
        })
        .catch(error => console.log(error))
})

const handleSubmit = (data) => {
   ClienteService.actualizarCliente(id, data)
    .then(() => router.push({name: 'inicio'}))
    .catch((error) => console.log(error))

}

</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="inicio">Volver</RouterLink>
        </div>
        <Heading>{{ titulo }}</Heading>
        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py-20 px-6">
                <FormKit type="form" submit-label="Guardar Cambios" @submit="handleSubmit"
                    incomplete-message="No se pudo enviar. Revisa todos los campos" :value="formData">

                    <FormKit type="text" label="Nombre" name="nombre" placeholder="Nombre del cliente"
                        validation="required"
                        :validation-messages="{ required: 'El nombre del cliente es obligatorio' }"
                        v-model="formData.nombre" />

                    <FormKit type="text" label="Apellido" name="apellido" placeholder="Apellido del cliente"
                        validation="required"
                        :validation-messages="{ required: 'El apellido del cliente es obligatorio' }"
                        v-model="formData.apellido" />

                    <FormKit type="text" label="Email" name="email" placeholder="Email del cliente"
                        validation="required|email" v-model="formData.email"
                        :validation-messages="{ required: 'El email del cliente es obligatorio', email: 'Proporciona un email válido' }" />

                    <FormKit type="text" label="Teléfono" name="telefono" placeholder="Teléfono: XXX-XXX-XXXX"
                        validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/" v-model="formData.telefono"
                        :validation-messages="{ matches: 'El formato no es válido' }" />

                    <FormKit type="text" label="Empresa" name="empresa" placeholder="Empresa del cliente"
                        v-model="formData.empresa" />

                    <FormKit type="text" label="Puesto" name="puesto" placeholder="Puesto del cliente"
                        v-model="formData.puesto" />



                </FormKit>
            </div>

        </div>

    </div>
</template>

<style>
.formkit-wrapper {
    max-width: 100%;
}
</style>
