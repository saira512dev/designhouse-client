<template>
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
</template>

<script>
export default {
    data() {
        return {
            
        };
    },
    async asyncData({$axios, params, error, redirect}){
        try{
            const designs = await $axios.$get(`/designs/tag/${params.tag}`);
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