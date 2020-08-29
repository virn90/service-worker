function getCurrentYear(){var e=new Date;return e.getFullYear()}el=document.getElementById(&quot;current-year&quot;),el.innerHTML=getCurrentYear();
$(document).ready(function(){ $(&quot;a&quot;).on(&#39;click&#39;, function(event) {
    if (this.hash !== &quot;&quot;) {
      event.preventDefault();
      var hash = this.hash;
      $(&#39;html, body&#39;).animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});
