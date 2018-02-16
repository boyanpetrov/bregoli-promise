# bregoli-promise

Handle async operations - Danielle Brigoli style

![](https://thumbs.gfycat.com/PerfumedFavoriteIlladopsis-size_restricted.gif)

```
const BregoliPromise = require('bregoli-promise');

const bregoli = new BregoliPromise();
bregoli.howBouDah((resolve, reject) => {
  console.log('howBouDah?');
}).cashMeOutside(err => {
  console.log(err);
});
```
