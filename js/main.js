import {createAdvertising} from './create-ads.js';
import {OFFER} from './data.js';
import {OFFER} from './popup.js';
import {OFFER} from './form.js';

const TOTAL_ADS = 10;
const ADSARRS = [];

for (let count = 0; count < TOTAL_ADS; count++) {
  ADSARRS[count] = createAdvertising(OFFER[count]);
}


