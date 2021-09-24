import React, {useState, useEffect} from 'react';
import {getAllBooks, createBook, getOneBook} from './services/bookService';
import {Books} from './components/Books';
import {DisplayBoard} from './components/DisplayBoard';
import CreateBook from './components/CreateBook';
import {Header} from './components/Header';
import './App.css';

function App() {
    const [book, setBook] = useState({})
    const [books, setBooks] = useState([])
    const [numberOfBooks, setNumberOfBooks] = useState(0)


    const getId = books[1];

    const bookCreate = (e) => {

        createBook(book).then(response => {
            console.log(response);
            setNumberOfBooks(numberOfBooks + 1)
        });
        window.location.reload();
    }

    const fetchAllBooks = () => {
        getAllBooks().then(books => {
            console.log(books, getId)
            setBooks(books);
            setNumberOfBooks(books.length)
        });
    }

    const fetchOneBook = (e) => {
        getOneBook().then(books => {
          console.log(books, getId)
          setBooks(books);
          setNumberOfBooks(books.length)
      });
  }

    useEffect(() => {
        getAllBooks().then(books => {
            console.log(books)
            setBooks(books);
            setNumberOfBooks(books.length)
        });
    }, [])

    const onChangeForm = (e) => {
        if (e.target.name === 'title') {
            book.title = e.target.value;
        } else if (e.target.name === 'author') {
            book.author = e.target.value;
        } else if (e.target.name === 'description') {
            book.description = e.target.value;
        }
        setBook(book)
    }

    return (
        <div className="App">
            <div>
                <div className="library">
                    <div className="create">
                    <DisplayBoard numberOfBooks={numberOfBooks} getOneBook={fetchOneBook}></DisplayBoard>
                        <CreateBook book={book} onChangeForm={onChangeForm} createBook={bookCreate}></CreateBook>
                        <div>
                        <Books books={books}></Books>
                        </div>
                     </div>
                     
                </div>
            </div>
        </div>
    );
}

export default App;
