const adForm = document.querySelector('.ad-form');
const adFormFields = Array.from(adForm.querySelectorAll('fieldset'));
const filterForm = document.querySelector('.map__filters');
const adAddress = adForm.querySelector('#address');

const filterFormFields = Array.from(filterForm.children);
const useActivePageState = () => {
  adForm.classList.remove('ad-form--disabled');
  filterForm.classList.remove('map__filters--disabled');
  adFormFields.forEach((item) => {
    item.disabled = false;
  });
  filterFormFields.forEach((item) => {
    item.disabled = false;
  });
};
export {useActivePageState, adAddress};
