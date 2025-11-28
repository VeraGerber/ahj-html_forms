const button = document.querySelector('.btn');

const popover = document.createElement('div');
popover.className = 'popover';
popover.innerHTML = `<div class="title-popover">Popover title</div>  
    <div class="content-popover">And here's some amazing content. It's very engaging. Right? </div>`;

button.offsetParent.appendChild(popover);
popover.style.bottom = `${button.offsetTop + button.offsetHeight}px`;
popover.style.left = `${button.offsetLeft - 8}px`;
popover.style.display = 'none';

button.addEventListener('click', () => {
  if (popover.style.display === 'none') {
  // if (popover.className === 'popover hidden') {
    popover.style.display = 'block';
    popover.classList.remove('hidden');
    popover.classList.add('active');
  } else {
    popover.style.display = 'none';
    popover.classList.remove('active');
    popover.classList.add('hidden');
  }
});