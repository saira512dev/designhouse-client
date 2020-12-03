<template>
  <div class="setting-block">
    <div class="setting-title font-16 fw-500">Designs</div>

    <div class="setting-body white-bg-color">
        <table class="table table-striped">
            <thead>
                <tr>
                    <td></td>
                    <td>Title</td>
                    <td>status</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody v-if="designs.data">
                <tr v-for="design in designs.data" :key="design.id">
                    <td>
                        <div v-if="design.images">
                            <img :src="design.images.thumbnail" width="80"/>
                        </div>
                    </td>
                    <td>{{ design.title}}</td>
                    <td>{{ design.is_live ? 'Published' : 'Draft' }}</td>
                    <td>
                        <nuxt-link 
                        :to="{ name: 'designs.edit', params: { id: design.id } }">
                            Edit
                        </nuxt-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
export default {
    middleware:['auth'],
    data(){
        return {
            designs: []
        }
    },

    methods:{
        async fetchUserDesigns() {
            const { data } = await this.$axios.get(`/users/${this.$auth.user.id}/designs`);
            this.designs = data;
            console.log(this.designs.data);
        },
    },

    created() {
            this.fetchUserDesigns();
    }
};
</script>

<style>

</style>