let myPromise = new Promise (function(myResolve, myReject) {
// "Producing Code" (May take some time)
    myResolve();
    myReject();
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
    function(value) { /*code if successful */},
    function(error) { /*code if successful */},
)