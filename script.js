function Book (title,author, nop, ronr){
  this.title = title;
  this.author = author;
  this.nop = nop;
  this.ronr = ronr;
}

let myLibrary = []

function addBookToLibrary() {
  const bookname = document.getElementById('name').value;
  const bookAuthor = document.getElementById('Author').value;
  const numberOfPages = document.getElementById('nop').value;
  const readOrNot = document.getElementById('ronr').checked;
  const book = new Book(bookname,bookAuthor,numberOfPages,readOrNot);
  myLibrary.push(book);
  window.localStorage.setItem('booksArray', JSON.stringify(myLibrary));
  console.log(myLibrary);
}

function displayBooks(){
  myLibrary = JSON.parse(window.localStorage.getItem('booksArray'));
  const booksTable = document.getElementById("table");
  booksTable.innerHTML += "<tr>";
  myLibrary.forEach(element => {
    booksTable.innerHTML += "<td>"+element.title+"</td>"+"<td>"+element.author+"</td>"+ "<td>"+element.nop+"</td>"+"<td><button type=\"button\"  class=\"readStatus\">Read</button></td>"+"<td><button type=\"button\"  class=\"delete\" id=\""+myLibrary.indexOf(element)+"\">Delete</button></td>";
  });
  booksTable.innerHTML += "</tr>";
}

document.getElementById('myForm').addEventListener("submit",addBookToLibrary)
displayBooks();

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

const removeBtn = document.querySelectorAll('.delete');

removeBtn.forEach((item) => item.addEventListener('click', () => {
  const removeId = parseInt(item.id, 10);
  myLibrary = JSON.parse(localStorage.getItem('booksArray'));
  myLibrary = myLibrary.filter((item, index) => index !== removeId);
  localStorage.setItem('booksArray', JSON.stringify(myLibrary));
  window.location.reload();
}));

const readBook = document.querySelectorAll('.readStatus');

readBook.forEach((item) => item.addEventListener('click', () => {
  const editId = parseInt(myLibrary.indexOf(item), 10);
  console.log(item);
  myLibrary = JSON.parse(localStorage.getItem('booksArray'));
  myLibrary = myLibrary.filter((item, index) => index !== editId);
  localStorage.setItem('booksArray', JSON.stringify(myLibrary));
  // window.location.reload();
}));
