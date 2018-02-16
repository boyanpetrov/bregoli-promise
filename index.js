var BregoliPromise = function BregoliPromise() {
    var self = BregoliPromise.convert(Promise.resolve());
    return self;
};
BregoliPromise.convert = function convert(promise, props) {
    promise.__proto__ = BregoliPromise.prototype;
    return props ? Object.assign(promise, props) : promise;
};

BregoliPromise.prototype = Object.create(Promise.prototype);
BregoliPromise.prototype.constructor = BregoliPromise;
BregoliPromise.prototype.howBouDah = function howBouThat(resolve, reject) {
    var returnVal = Promise.prototype.then.call(this, resolve, reject);
    return BregoliPromise.convert(returnVal);
};

BregoliPromise.prototype.cashMeOutside = function cashMeOutside(err) {
  var returnVal = Promise.prototype.catch.call(this, err);
  return BregoliPromise.convert(returnVal);
}

module.exports = BregoliPromise;

