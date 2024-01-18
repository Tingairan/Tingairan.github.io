var posts=["posts/6d102583.html","posts/b9ff91c0.html","posts/c60b832a.html","posts/3e128958.html","posts/e33e3b9c.html","posts/c035d2d5.html","posts/2b9348ac.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };