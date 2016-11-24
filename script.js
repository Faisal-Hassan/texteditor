// store text
document.getElementById('heading').innerHTML = localStorage['title'] || 'Header text...';
document.getElementById('content').innerHTML = localStorage['text'] || 'Whatever you write here is automatically saved every second...';

// set interval
  setInterval(function() {
    localStorage['title'] = document.getElementById('heading').innerHTML;
    localStorage['text'] = document.getElementById('content').innerHTML;
  }, 1000);
  
  // change title
    document.title = document.getElementById('heading').innerHTML


  
