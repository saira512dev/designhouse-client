<template>
  <div class="wrapper">
            <!-- Start Hero -->
            <section class="hero text-center bg-light shadow-sm text-blue">
                <div class="container">
                    <h1 class="font-28 fw-600 text-uppercase">
                        What are you working on?
                    </h1>
                    <p class="font-16 fw-400">
                        DesignHouse is where designers get inspired.
                    </p>
                    
                    <nuxt-link :to="{ name: 'register'}" class="mt-4 btn btn-danger font-16 fw-400" >Sign Up For Free</nuxt-link>
                </div>
            </section>
            <!-- End Hero -->

            <!-- Section Cards -->
            <section class="cards-block">
        <div class="container">
            <div class="row">
                <base-design v-for="design in designs"
                    :key="design.id"
                    :design="design">
                </base-design>
            </div>
        </div>
    </section>
            <!-- End Cards -->
        </div>
</template>

<script>
export default {
    data() {
        return {
            
        };
    },
    async asyncData({$axios, error, redirect}){
        try{
            const designs = await $axios.$get(`/mostLikedDesigns`);
            //console.log(designs.data);

            return { designs: designs.data};
        } catch (err) {
            if(err.response.status === 404){
                error({statusCode: 404, message: "Designs not found"});
            } else if(err.response.status === 401){
                redirect('/login');
            } else {
                error({statusCode: 500, message: "Internal server error"});
            }
        }
    },
}
</script>

<style>

</style>
