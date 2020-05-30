// Help
function log(message) {
  console.log('> ' + message)
}

// App
const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

// Add events for each card
cards.forEach(card => {
  card.addEventListener('dragstart', dragstart)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragend)
})

function dragstart() {
  // log('CARD: Start dragging')
  dropzones.forEach(dropzone => dropzone.classList.add('highlight'))

  // this = card
  this.classList.add('is-dragging')
}

function drag() {
  // log('CARD: Is dragging')
}

function dragend() {
  // log('CARD: Stop dragging')
  dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))

  // this = card
  this.classList.remove('is-dragging')

}

// Place where I will drop the cards
dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragenter', dragenter)
  dropzone.addEventListener('dragover', dragover)
  dropzone.addEventListener('dragleave', dragleave)
  dropzone.addEventListener('drop', drop)
})

function dragenter() {
  // log('DROPZONE: Enter in zone')
}

function dragover() {
  // log('DROPZONE: Over')
  // this = dropzone
  this.classList.add('over')

  // Get dragging card
  const cardBeingDragged = document.querySelector('.is-dragging')

  // Drop in dropzone
  this.appendChild(cardBeingDragged)
}

function dragleave() {
  // log('DROPZONE: Leave')
  // this = dropzone

  this.classList.remove('over')
}

function drop() {
  // log('DROPZONE: dropped')

  // To avoid possible bug
  this.classList.remove('over')
}
