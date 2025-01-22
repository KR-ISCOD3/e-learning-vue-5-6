import axios from "axios";
import { defineStore } from "pinia";
import { ref,onMounted } from "vue";

export const useMystore = defineStore('mystore',()=>{
    const items = ref([]);
    const loading = ref(false);
    const error = ref(null);
  
    const fetchData = async () => {
        loading.value = true;
        error.value = null;
    
        try {
          const response = await axios.get('https://e-learning-json-data.onrender.com/course'); 
          items.value = response.data; 
          console.log(items.value);
        } catch (err) {
          error.value = err.message;
        } finally {
          loading.value = false;
        }
      };

      onMounted(()=>{
        fetchData();
      })

      return{
        items,
        loading,
        error,
      }

})