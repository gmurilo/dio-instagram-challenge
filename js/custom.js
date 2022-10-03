$.fn.phoneCarousel = function(defaults) {
  let phoneDefaults = {
    files: ['8e9224a71939.png', '80b8aebdea57.png', 'cfd999368de3.png', 'fe2540684ab2.png'],
    pos: 0,
    interval: 5000,
    timer: null,
    els: this,
    fade: 300
  };
  console.log(typeof(defaults));
  if ( (typeof(defaults)).toString().toLowerCase() === 'object') {
    for( let _var in defaults ) {
      phoneDefaults[_var] = defaults[_var];
    }
  }
  let pd = phoneDefaults;
  let _fnc_ = function() {
    pd.els.each( function() {
      let that = this;
      $(that).fadeOut((pd.fade/2), function(){
        that.src = './img/'+ pd.files[pd.pos];
        that.onload = function() {
          $(that).fadeIn((pd.fade/2));
        }
      });
        
    });
    ++pd.pos;
    if ( pd.files.length < (pd.pos + 1) ) {
      pd.pos = 0;
    }
    
  };
  pd.timer = setInterval( _fnc_,  pd.interval);
};
$(document).ready(function() {
  $('.phone-dynamic > img').phoneCarousel({ fade: 500 });
});