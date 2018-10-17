window.addEventListener('load', function() {
  navigator.serviceWorker.register('/sw.js').then(function(reg) {
    console.log('service work has registered');
  });
});
