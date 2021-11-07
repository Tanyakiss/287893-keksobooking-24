import {debounce} from './utils/debounce.js';
import './popup.js';
import './form.js';
import {SIMILAR_ADS_COUNT} from './data.js';
import {createMarker} from './map-render.js';
import './modal.js';
import {setUserFormSubmit, sendUserForm} from './form.js';
import {getData} from './server.js';
import {showLoadFailMessage} from './modal.js';

const RERENDER_DELAY = 500;

getData(
  getDataUrl,
  (data) => {
    renderSimilarList(data);
    setFilterFormChange(debounce(
      () => renderSimilarList(data),
      RERENDER_DELAY,
    ));
  },
  showLoadFailMessage);

setUserFormSubmit(sendUserForm);
