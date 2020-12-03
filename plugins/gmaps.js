import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps-withscopedautocomp';

Vue.use(VueGoogleMaps, {
    load: {
        key:'AIzaSyBnq-ETftPzFJ7ksQjvUZy7sLZiAeJVHko',
        libraries: 'places'
    }
})