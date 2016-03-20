const MUSIC_CATEGORY = ['classical', 'guitar', 'jazz', 'piano', 'violin'];
const TRACKLISTS = {
  classical: ['ballade_no_4_op_52_chopin.mp3', 'demicheli_geminiani.mp3', 'fiati_di_parma_thuille.mp3', 'mazeppa_finale_liszt.mp3', 'piano_concerto_no_10_mozart.mp3'],
  guitar: [],
  jazz: [],
  piano: [],
  violin: []
}

let currentTrackList = [];
let currentTrack = null;
let audioPlayer;

Template.homepage.rendered = () => {
  $('div.container').height($(document).outerHeight());
  if (!Session.get('current_category')) {
    $('.modal.cat-select').show();
  }
  audioPlayer = document.createElement('audio');
  audioPlayer.onended = () => {
    currentTrack = currentTrackList.shift();
    if (currentTrack) {
      audioPlayer.setAttribute('src', `assets/${Session.get('current_category')}/${currentTrack}`);
      audioPlayer.play();
    }
  }
}

Template.homepage.events({
  'click .title': () => {
    $('.modal.cat-select').show();   
  },
  'click .cat-select .btn.cat': (ev) => {
    const cat = $(ev.target).data('cat');
    Session.set('current_category', cat);
    currentTrackList = _.shuffle(TRACKLISTS[cat]);
    currentTrack = currentTrackList.shift();
    $('.modal.cat-select').hide();
  },
  'click .buttons .btn.btn-play': () => {
    if (!audioPlayer.played.length) {
      if (!currentTrack) {
        currentTrackList = _.shuffle(Session.get('current_category'));
        currentTrack = currentTrackList.shift();
      }
      audioPlayer.setAttribute('src', `assets/${Session.get('current_category')}/${currentTrack}`);
      audioPlayer.play();
    } else {
      audioPlayer.paused ? audioPlayer.play() : null;
    }
  },
  'click .buttons .btn.btn-pause': () => {
    audioPlayer.paused ? audioPlayer.play() : audioPlayer.pause();
  },
  'click .buttons .btn.btn-skip': () => {
    currentTrack = currentTrackList.shift();
    if (currentTrack) {
      audioPlayer.setAttribute('src', `assets/${Session.get('current_category')}/${currentTrack}`);
      audioPlayer.play();
    }
  }
});

Template.homepage.helpers({
  categories() {
    return MUSIC_CATEGORY;
  }
})
