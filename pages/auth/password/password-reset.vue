<template>
   <section class="authentication">
        <div class="auth-body">
            <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
                Reset Password
            </h1>
            <form class="auth-form" @submit.prevent="submit">
                <alert-success :form="form">{{status}}
                    <p><nuxt-link to="/login">Go To Login</nuxt-link></p>
                </alert-success>
                <div class="form-group">
                    <input
                        type="text"
                        v-model.trim="form.email"
                        name="email"
                        readonly
                        class="form-control form-control-lg font-14 fw-300"
                        :class="{'is-invalid' : form.errors.has('email')}"
                        placeholder="Email"
                    />
                    <has-error :form="form" field="email"></has-error>
                </div>    
                 <div class="form-group">
                    <input
                        type="password"
                        v-model.trim="form.password"
                        name="password"
                        class="form-control form-control-lg font-14 fw-300"
                        :class="{'is-invalid' : form.errors.has('password')}"
                        placeholder="New password"
                    />
                    <has-error :form="form" field="password"></has-error>
                </div>  
                <div class="form-group">
                    <base-input
                    :form="form"
                    field="password_confirmation"
                    inputType="password"
                    v-model="form.password_confirmation" placeholder="Confirm new password"></base-input>
                </div>     
                <div class="text-right">
                    <base-button :loading ="form.busy">Reset password</base-button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    middleware:['guest'],
    data(){
        return {
            status: '',
            form: this.$vform({
                email: '',
                password: '',
                password_confirmation: '',
                token: ''
            })
        };
    },

    methods: {
        submit(){
           this.form.post('/password/reset')
           .then(res => {
               console.log(res.data.message);
               this.status = res.data.message;
               this.form.reset();
           }).catch(e => {
               console.log(e);
           })
        }
    },

    created(){
        this.form.email = this.$route.query.email
        this.form.token = this.$route.params.token
    }
};
</script>

<style>

</style>