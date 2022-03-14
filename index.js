document.addEventListener('keydown', e => {
  if (e.code === 'ArrowRight') {
    document.getElementsByClassName('shadow-wrap')[0].classList.remove('d-none');
    document.getElementsByClassName('pure-wrap')[0].classList.add('d-none');
  } else if (e.code === 'ArrowLeft') {
    document.getElementsByClassName('pure-wrap')[0].classList.remove('d-none');
    document.getElementsByClassName('shadow-wrap')[0].classList.add('d-none');
  }
});
