// Event listener for the form submission
const noteForm = document.getElementById('note-form');
noteForm.addEventListener('submit', e => {
  e.preventDefault(); // Prevents the default form submission behavior
  addNewNote(); // Calls the function to add a new note
});

// Function to add a new note
function addNewNote() {
  const emptyNote = document.querySelector("#empty-note");
  if (emptyNote) {
    emptyNote.parentElement.removeChild(emptyNote);
  }

  // Create HTML elements for the new note
  const note = document.createElement('div');
  note.classList.add('note');

  const noteHeader = document.createElement('div');
  noteHeader.classList.add('note-header');

  const noteTitle = document.createElement('p');
  noteTitle.classList.add('note-title');
  noteTitle.textContent = new Date().toLocaleString();
  noteHeader.appendChild(noteTitle);

  const noteDeleteButton = document.createElement('p');
  noteDeleteButton.classList.add('note-delete-button');
  noteDeleteButton.textContent = 'X';
  noteDeleteButton.addEventListener('click', e => {
    note.parentElement.removeChild(note);
  });
  noteHeader.appendChild(noteDeleteButton);

  note.appendChild(noteHeader);

  const noteText = document.createElement('pre');
  noteText.classList.add('note-text');
  const noteTextArea = document.querySelector('#note-textarea');
  noteText.textContent = noteTextArea.value;
  note.appendChild(noteText);

  // Append the new note to the notes list
  document.querySelector('#notes-list').appendChild(note);

  noteTextArea.value = ''; // Clear the textarea
  noteTextArea.focus(); // Focus back on the textarea for user convenience
}

// Event listener to display word count as the user types
document.getElementById('note-textarea').addEventListener('input', function () {
  var wordCount = this.value.match(/\b\w+\b/g);
  wordCount = wordCount ? wordCount.length : 0;
  document.getElementById('word-count').innerText = 'Word count: ' + wordCount;
});

// Event listener for the clear button
document.getElementById('clear-button').addEventListener('click', function () {
  const noteTextArea = document.querySelector('#note-textarea');
  noteTextArea.value = ''; // Clear the textarea
  document.getElementById('word-count').innerText = 'Word count: 0'; // Reset word count
});
