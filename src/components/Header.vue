<template>
    <nav class="container-fluid p-0 navbar shadow">
        <div class="container py-2">
            <a href="" class="fs-2 text-dark text-decoration-none fw-bold">LOGO</a>
            <button class="d-lg-none d-block btn border-0 shadow-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="d-none d-lg-block">
                <ul class="nav align-items-center">
                    <li class="px-3">
                        <RouterLink to="/" class="text-dark text-decoration-none">HOME</RouterLink>
                    </li>
                    <li class="px-3">
                        <a href="" class="text-dark text-decoration-none">ABOUT</a>
                    </li>
                    <li class="px-3">
                        <RouterLink to="/course" class="text-dark text-decoration-none">COURSES</RouterLink>
                    </li>
                    <li class="px-3">
                        <a href="" class="text-dark text-decoration-none">CONTACT</a>
                    </li>
                    
                    <li v-if="isLoggin">
                        <a href="" class="text-dark text-decoration-none">
                            <div style="height: 40px;width: 40px;" class="bg-danger rounded-circle overflow-hidden">
                                <img src="" alt="" class="w-100 h-100 object-fit-cover">
                            </div>
                       </a>
                    </li>
                    <li v-else class="px-3">
                       <button class="btn bg-darkblue-800 text-light rounded-0 border">Register</button>
                       <button class="btn rounded-0 border">Login</button>        
                    </li>
                </ul>
            </div>
        </div>
    </nav>


    <div class="offcanvas offcanvas-end" data-bs-scroll="true" id="offcanvasMenu">
        <div class="offcanvas-header border-bottom">
            <h5 class="offcanvas-title" >LOGO</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="list-unstyled align-items-center">
                    <li class=" py-2 border-bottom pb-3">
                        <a href="" class="text-dark text-decoration-none">HOME</a>
                    </li>
                    <li class=" py-2 border-bottom pb-3">
                        <a href="" class="text-dark text-decoration-none">ABOUT</a>
                    </li>
                    <li class=" py-2 border-bottom pb-3">
                        <a href="" class="text-dark text-decoration-none">COURSES</a>
                    </li>
                    <li class=" py-2 border-bottom pb-3">
                        <a href="" class="text-dark text-decoration-none">CONTACT</a>
                    </li>
                    
                    <li v-if="isLoggin">
                        <a href="" class="text-dark text-decoration-none">
                            <div style="height: 40px;width: 40px;" class="bg-danger rounded-circle overflow-hidden">
                                <img src="" alt="" class="w-100 h-100 object-fit-cover">
                            </div>
                       </a>
                    </li>
                    <li v-else class="py-3">
                       <button class="btn bg-darkblue-800 text-light rounded-0 border">Register</button>
                       <button class="btn rounded-0 border">Login</button>        
                    </li>
                </ul>
        </div>
    </div>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
    import { ref } from 'vue';

    const isLoggin = ref(false);
</script>
