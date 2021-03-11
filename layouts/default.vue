<template>
  <div>
    <SiteHeader></SiteHeader>
    <SiteNavigation></SiteNavigation>
    <div class="wrapper">
      <Nuxt />
    </div>
    <SiteFooter></SiteFooter>
  </div>
</template>

<script>
import SiteNavigation from './partials/navigation'
import SiteFooter from './partials/footer'
import SiteHeader from './partials/header'

export default{
  components :{
    SiteNavigation,
    SiteFooter,
    SiteHeader
  }
}
</script>