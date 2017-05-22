import Vue from 'vue'

let myTunes = {
  songs:[]
  
}

// THESE ARE SIMPLE HELPER FUNCTIONS TO KEEP YOUR MYTUNES IN LOCAL STORAGE
// WE WILL EVENTUALLY BE REPLACING THESE GUYS BUT NOT TODAY :)
// NOTICE HOWEVER THAT THESE FUNCTIONS ARE NOT GOING TO BE EXPORTED BECAUSE 
// THE COMPONENT SHOULD NEVER BE RESPONSIBLE FOR ACTUALLY CALLING saveMytunes
// PERHAPS YOU SHOULD HAVE THE LIST SAVED WHENEVER IT MUTATES ***CHANGES***
function saveMytunes() {
  localStorage.setItem('myTunes', JSON.stringify(myTunes))
}

function loadMytunes() {
  myTunes = JSON.parse(localStorage.getItem('myTunes')) || {songs: []}
}

loadMytunes()

export default {
  getTracks() {
    return myTunes.songs.sort(function(a, b){
      return blur.votes - a.votes
    })
   },
  addTrack(track) {
    song.votes = 0
    myTunes.songs.push(track)
    myTunes.sort(function(a,b){
      return b.votes - a.votes
    })
    // OCCASIONALLY YOU WILL RUN INTO ISSUES WHERE VUE WILL BE
    // UNAWARE THAT A CHANGE HAS OCCURED TO YOUR DATA
    // TO ELIMINATE THIS PROBLEM YOU CAN USE 
    Vue.set(myTunes, track.id, track)
    saveMytunes()
    // YOU CAN READ MORE ABOUT VUE.SET HERE
    // https://vuejs.org/v2/api/#Vue-set
   },
  removeTrack(track) {
    let index = myTunes.songs.indexOf(track)
      myTunes.songs.splice(index, 1)
      saveMytunes()
    // how do yo look through and array and find a particular item of the array, use the index of that array to remove it, then call save my tunes
   },
  promoteTrack(track) { 
    let index = myTunes.songs.indexOf(track)
    myTunes[index].votes-= 1
    saveMytunes()
  
  },
  demoteTrack(track) { 
    let index = myTunes.songs.indexOf(track)
    myTunes[index].votes += 1
    saveMytunes()
  }
}

//---> promote/demote not working. Promote keeps giving error "cannot read property 'votes' of undefined" need to fix this...maybe this is all wrong? Is there another way? So fuking lost...



//var vote = 0 //on button increment this element
//myTunes.songs.indexOf(song) == vote
//saveMytunes()
//set value to something then sort on it.