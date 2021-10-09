import {getRandomInt, getRandomArbitrary} from './util.js';
import {offer, LOCATION} from './data.js';
import {createAdvertising} from './create-ads.js';

const TOTAL_ADS = 10;
const ADSARRS = [];

for (let count = 0; count < TOTAL_ADS; count++) {
  ADSARRS[count] = createAdvertising(count);
}


