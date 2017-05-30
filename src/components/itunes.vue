<template>
  <div class="itunes">
    <h1 class="patrick">Meeewsik <img  class="img" src="http://www.free-icons-download.net/images/halloween-scary-black-cat-icon-72554.png"></h1>
    <form class="form-inline" @submit.prevent="getMusicByArtist">
      <!--DO NOT MODIFY THE ID OR ONCLICK ATTRIBUTES IN THIS FORM-->
      <div class="form-group patrick space">
        
        <input type="text" class="form-control space" v-model="artist" placeholder="Artist Name"/>
        <button type="submit" class="btn btn-primary space" id="get-music-button">Get Music</button>
      </div>
    </form>
    <div class="row">
      <div class="col-sm-6" v-for="song in songs">
        <div class="well">
          <div class="media">
            <h2 class="patrick">{{song.artistName}}</h2>
            <img :src="song.artworkUrl60" class="img-thumbnail">
            <h3 class="patrick">{{song.collectionName}}</h3> 
            <h3 class="patrick">{{song.trackCensoredName}}</h3>
            <h4 class="patrick">${{song.trackPrice}}</h4><audio controls><source :src="song.previewUrl" type="audio/mpeg"></audio><button class="w3-button w3-small w3-circle w3-black" @click="addTunes(song)">+</button> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import iservice from "../services/itunes-service"
import myservice from "../services/mytunes-service"

export default {
  name: 'itunes',
  data(){
    return {
    songs: [],
    artist: '',
   }
    
  },
  computed:{},
  methods:{
    getMusicByArtist(){
     iservice.getMusicByArtist(this.artist).then(res=>{
      let resObj = JSON.parse(res)
      this.songs = resObj.results
      })
    },
    addTunes(song){
      myservice.addTrack(song)
    }
  },
  components:{}
}
</script>


<style scoped>
.img{
  max-height: 60px;
  max-weight: auto;
}

.well {
  background: #d2dae0;
  
}

.space {
  padding-left: 20px;
}

h1 {
  text-align: center;
  min-height: 56px;
}

.w3-button{
  margin-left: 22px;
}

</style>