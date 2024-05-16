var debounce = function (fn, t) {
    let timeId = null;
    return function (...args) {
        if (timeId) clearTimeout(timeId)
        timeId = setTimeout(() => fn(...args), t);
    }
};

const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms