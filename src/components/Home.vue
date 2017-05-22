<template>
 <div class="container-fluid">
  <div class="home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <div class="row">
      <itunes class="itunes col-xs-8"></itunes>
      <mytunes class="my-tunes col-xs-4"></mytunes>
    </div>
  </div>
 </div>
</template>

<script>
import mytunes from './mytunes'
import itunes from './itunes'
export default {
  name: 'home',
  data () {
    return {
      
    }
  },
  components: {
    mytunes,
    itunes
  }
}
</script>


<style>
/**
* YOU SHOULD PROBABLY MAKE THIS LOOK BETTER :)
* BOOTSTRAP IS FOR THE WEAK FLEXBOX IS KING
* -- McCall
**/
.itunes{
 
  background: #809e9a;
}

.my-tunes{
 
  background: #6b83aa;
  
}

</style>
