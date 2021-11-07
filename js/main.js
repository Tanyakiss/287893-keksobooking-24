import {debounce} from './utils/debounce.js';
import {setFilterFormChange, renderSimilarList} from './filter.js';
import {getData, getDataUrl} from './server.js';
import {setUserFormSubmit, sendUserForm} from './form.js';
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
