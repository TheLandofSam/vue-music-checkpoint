<template>
  <div class="mytunes">
    <div class="row">
      <div class="col-xs-12">
        <h1 class="patrick">My Meeewsik<img  class="img" src="http://www.free-icons-download.net/images/halloween-scary-black-cat-icon-72554.png"></h1>
           <div class="well" v-for="song in songs">
            <h2 class="patrick">{{song.artistName}}</h2>
            <img :src="song.artworkUrl60" class="img-thumbnail">
            <h3 class="patrick">{{song.collectionName}}</h3> 
            <h3 class="patrick">{{song.trackCensoredName}}</h3>
            </h4><audio controls><source :src="song.previewUrl" type="audio/mpeg"></audio>
            <button class="w3-button w3-small w3-circle w3-black" @click="removeTrack(song)">-</button>
            <br></br>
            <button class="patrick bigButton w3-btn w3-round-xlarge w3-black" @click="promoteTrack(song)">Move it up!</button><button class="patrick w3-btn w3-round-xlarge w3-black" @click="demoteTrack(song)">Drop it down...</button>
        </div>
      </div>
    
    </div>

  </div>
</template>


<script>
import mytunes from '../services/mytunes-service'

export default {
  name: 'mytunes',
  data(){
    return {
      songs: mytunes.getTracks()
    }
  },
  computed:{},
  methods:{
    removeTrack(song){
     mytunes.removeTrack(song)
     },
    promoteTrack(song) {
     mytunes.promoteTrack(song)
    },
    demoteTrack(song) { 
     mytunes.demoteTrack(song)
  }
  }
}
</script>


<style scoped>
h1 {
  text-align: center;
  min-height: 90px;
}
.img{
  max-height: 60px;
  max-weight: auto;
}
.bigButton{
   margin-left: 80px;
}
.well {
  background: #d2dae0;
  
}


</style>