const loader = document.querySelector('.lds-ring');
const loaderDivChildren = document.querySelectorAll('.lds-ring div');

export function startLoading() {
  loader.classList.add('active');
  [...loaderDivChildren].forEach(child => child.classList.add('active'));
}

export function stopLoading() {
  loader.classList.remove('active');
  [...loaderDivChildren].forEach(child => child.classList.remove('active'));
}