<template>
    <div class="row m-0 my-5">
        <div class="col-12 col-md-4 col-lg-3 my-2 px-3" v-for="(e,i) in items" :key="i">
            <div class="card">
                <div style="height: 200px;" class="w-100 bg-body position-relative overflow-hidden">
                    <img src="" alt="" class="w-100 h-100 object-fit-cover">
                    <div class="px-3 bg-darkblue-700 text-light position-absolute top-0 mt-3 ms-3 rounded-2 font-body">
                        <p class="m-0">Free</p>
                    </div>
                </div>
                <div class="card-body font-body"> 
                    <h5 class="text-1line fw-bold">{{ e.title }}</h5>
                    <div class="d-flex justify-content-between">
                        <p class="m-0 fw-medium text-secondary">{{ e.rate }}</p>
                        <p class="m-0 fw-medium text-secondary">{{e.level}}</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="m-0 fw-medium text-secondary">{{e.hour}} hrs</p>
                        <div class="d-flex align-items-center">
                            <p class="m-0 fw-bold">${{e.price}}</p>
                            <button class="btn text-darkblue-500 pe-0 border-0 fw-bold" @click="gotoDetail(e.id)">Enroll Now ></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { useRouter } from 'vue-router';
import { useMystore } from '../store/mystore';

 const myStore = useMystore();
 const {items} = myStore;
 const router = useRouter()

 const gotoDetail = (id) => {
    router.push(`/course/${id}`);
 }

</script>
