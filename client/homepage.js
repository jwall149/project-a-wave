const MUSIC_CATEGORY = ['classical', 'guitar', 'jazz', 'piano', 'violin'];
const TRACKLISTS = {}

Template.homepage.rendered = () => {
  $('div.container').height($(document).outerHeight());
  if (!Session.get('current_category')) {
    $('.modal.cat-select').show();
  }
}

Template.homepage.events({
  'click .cat-select .btn.cat': (ev) => {
    const cat = $(ev.target).data('cat');
    Session.set('current_category', cat);
    $('.modal.cat-select').hide();    
  }
});

Template.homepage.helpers({
  categories() {
    return MUSIC_CATEGORY;
  }
})
