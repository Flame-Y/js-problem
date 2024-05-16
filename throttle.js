var throttle = function (fn, t) {
    let lastTime = 0;
    return function(...args) {
        const now = new Date();
        if (now - lastTime > t) {
            lastTime = now;
            fn(...args)
        }
    }
}

const log = throttle(console.log, 100);
log('Hello'); // Logged at t=100ms
log('Hello'); // cancelled
log('Hello'); // cancelled