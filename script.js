const gridContainer = document.querySelector('.grid-container');
const activityList = document.querySelector('.activity-list');
const trashCan = document.querySelector('#trash-can');

gridContainer.addEventListener('dragover', (e) => {
  e.preventDefault();
});

gridContainer.addEventListener('drop', (e) => {
  e.preventDefault();
  const block = e.dataTransfer.getData('text');
  const grid = e.target.closest('.grid');
  grid.appendChild(document.getElementById(block));
});

activityList.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text', e.target.id);
});

trashCan.addEventListener('dragover', (e) => {
  e.preventDefault();
});

trashCan.addEventListener('drop', (e) => {
  e.preventDefault();
  const block = e.dataTransfer.getData('text');
  document.getElementById(block).remove();
});
