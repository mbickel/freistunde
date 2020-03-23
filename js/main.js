document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.collapsible');
  let instances = M.Collapsible.init(elems);
});


function shareOnFacebook(){
  FB.ui({
    method: 'share',
    href: 'https://grossepause.com',
    hashtag: ['#großepause'],
  }, function(response){});
}