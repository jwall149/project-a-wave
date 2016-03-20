const MUSIC_CATEGORY = ['classical', 'guitar', 'violin'];
const TRACKLISTS = {
  classical: ['ballade_no_4_op_52_chopin.mp3', 'demicheli_geminiani.mp3', 'fiati_di_parma_thuille.mp3', 'mazeppa_finale_liszt.mp3', 'piano_concerto_no_10_mozart.mp3'],
  guitar: ['Aubade-CinziaMilani-3728298_hq.mp3', 'GymnopedieNo1-VariousArtists-Album_q53g.mp3', 'KoyunbabaSuiteOp.19I.Moderato-CinziaMilani-3728292_hq.mp3', 'PreludioPerCinziaMilani-CinziaMilani-3728291_hq.mp3', 'RomanzaSenzaParole-CinziaMilani-3728304_hq.mp3'],
  violin: ['valse_triste_franz_von_vecsey.mp3', 'violin_partita_no_1_part_1_allemanda_bach.mp3', 'violin_partita_no_1_part_2_double_bach.mp3', 'violin_partita_no_1_part_3_corrente_bach.mp3', 'violin_sonata_jan_brandts_buys.mp3']
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
