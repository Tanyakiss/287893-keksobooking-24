import './popup.js';
import './form.js';
import {SIMILAR_ADS_COUNT} from './data.js';
import {createMarker} from './map-render.js';
import './modal.js';
import {setUserFormSubmit, sendUserForm} from './form.js';
import {getData} from './server.js';
import {showLoadFailMessage} from './modal.js';

getData('https://23.javascript.pages.academy/keksobooking/data', (data) => data.slice(0, SIMILAR_ADS_COUNT).forEach((item) => {createMarker(item.author.avatar, item.offer, item.location);}), showLoadFailMessage);

setUserFormSubmit(sendUserForm);
