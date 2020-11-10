<template>
  <section class="authentication">
        <div class="auth-body">
            <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
                Reset Password
            </h1>
            <form class="auth-form" @submit.prevent="submit">
                <alert-success :form="form">{{status}}</alert-success>
                <div class="form-group">
                    <base-input
                    :form="form"
                    field="email"
                    v-model="form.email" placeholder="email"></base-input>
                </div>     
                <div class="text-right">
                    <base-button :loading ="form.busy">send reset link</base-button>
                </div>
                <p class="font-14 fw-400 text-center mt-4">
                    <nuxt-link :to="{name: 'login'}" class="color-blue" > Back to login</nuxt-link>
                </p>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            status:'',
            form: this.$vform({
                email:'' 
            })
        }
    },

    methods:{
        submit(){
           this.form.post('/password/email')
           .then(res => {
               console.log(res.data.message);
               this.status = res.data.message;
               this.form.reset();
           }).catch(e => {
               console.log(e);
           })
        }
    }    
};
</script>

<style>

</style>