# bregoli-promise

Handle async operations - Danielle Brigoli style

![](https://thumbs.gfycat.com/PerfumedFavoriteIlladopsis-size_restricted.gif)

For context:
[Original Video](https://www.youtube.com/watch?v=R8l2Ga3_wvU)



```js
const BregoliPromise = require('bregoli-promise');

const bregoli = new BregoliPromise();
bregoli.howBouDah((resolve, reject) => {
  console.log('howBouDah?');
}).cashMeOutside(err => {
  console.log(err);
});
```
