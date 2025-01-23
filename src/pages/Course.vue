<template>
    <div>
        <h1>welcome Course page {{ id }}</h1>
        <ul>
            <li>{{ product.title }}</li>
            <li>{{ product.price }}</li>
            <li>{{ product.rate }}</li>
            <li>{{ product.hour }}</li>
        </ul>
    </div>
</template>

<script setup>
    import { ref,onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { useMystore } from '../store/mystore';
    const product = ref([])
    const store = useMystore()


    const route =useRoute();
    const fetchProduct = async () =>{
        const id = route.params.id;
        product.value = await store.fetchProductById(id)
    }
    onMounted(() => {
      fetchProduct();
    });
</script>
