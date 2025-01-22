<template>
  <div class="container-fluid p-0">
    <!-- hero -->
    <div class="w-100">
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner font-body position-relative">
          <div
            class="carousel-item active bg-black"
            data-bs-interval="10000"
            style="height: 80vh"
          >
            <div
              class="position-absolute z-3 col-9 col-md-7 col-lg-5"
              style="top: 30%; left: 13%"
            >
              <p class="fw-bold text-darkblue-300 mb-0">
                WELCOME TO ETEC CODER
              </p>
              <h1
                class="text-light fw-bold"
                style="font-size: clamp(25px, 5vw, 50px) !important"
              >
                Interactive Learning Experience
              </h1>
              <p class="fw-medium text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                eligendi similique autem.consectetur adipisicing elit
              </p>
              <div>
                <button
                  class="btn border text-light rounded-0 bg-hover px-3 px-lg-5 py-3 me-3 fw-bold"
                >
                  Read More
                </button>
                <button
                  class="btn rounded-0 btn-light px-3 px-lg-5 py-3 fw-bold"
                >
                  Join Now
                </button>
              </div>
            </div>
            <img
              src="https://www.opindia.com/wp-content/uploads/2023/05/Assam-HBS-school-2023-05-20-19-06-29.jpg"
              class="d-block w-100 h-100 object-fit-cover"
              style="filter: brightness(50%)"
            />
          </div>
          <div
            class="carousel-item bg-danger"
            data-bs-interval="2000"
            style="height: 80vh"
          >
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item bg-success" style="height: 80vh">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <!-- service -->
    <div class="container my-3 font-body">
      <h1 class="text-center mt-5 fw-bold text-darkblue-800">
        Invest in your professional goals with Secret Coder
      </h1>
      <p class="text-center">
        Get unlimited access to over 90% of courses, Projects, Specializations,
        and Professional Certificates on Coursera, taught by top instructors.
      </p>
      <div class="row m-0 mt-4 py-5">
        <div class="col-12 col-md-6 col-lg-3 px-3 my-2" v-for="(e,i) in arr" :key="i">
          <div class="w-100 text-center py-4 px-3 shadow scale transition ">
            <img :src="hatIcon" alt="" width="80" />
            <p>
              <span class="fw-bold">{{ e.title }}</span> <br>
              {{ e.des }}
            </p>
          </div>
        </div>
        
      </div>
    </div>


    <!--  -->
    <div class="container">
      <div class="row m-0">
        <div class="col-lg-6">
          <div class="w-100">     
              <img class="w-100" src="https://n-o-v-a.com/wp-content/uploads/2019/05/bigstock-fast-print-12463523-1024x683.jpg" alt="">
          </div>
        </div>
        <div class="col-lg-6 font-body">
            <div class="w-100">
              <div class="d-flex">
                <p class="col-2 fs-5 fw-bold ">About Us</p>
                <div class="w-100  ">
                  <div class=" bg-darkblue-700 my-2" style="height: 1px; width: 4%;"></div>
                  <div class=" bg-darkblue-700" style="height: 2px; width: 12%;"></div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import hatIcon from '../assets/icon/hat.png';
 import { useMystore } from '../store/mystore';

  const arr = ref([
    {
      image:hatIcon,
      title:'Learn anything',
      des:'Explore any interest or trending topic, take prerequisites, and advance your skills'
    },
    {
      image:hatIcon,
      title:'Learn anything',
      des:'Explore any interest or trending topic, take prerequisites, and advance your skills'
    },
    {
      image:hatIcon,
      title:'Learn anything',
      des:'Explore any interest or trending topic, take prerequisites, and advance your skills'
    },
    {
      image:hatIcon,
      title:'Learn anything',
      des:'Explore any interest or trending topic, take prerequisites, and advance your skills'
    }
  ]);


  const myStore = useMystore();

  const {items,loading,error} = myStore;
  console.log(items);
  

</script>

<style lang="scss" scoped></style>
