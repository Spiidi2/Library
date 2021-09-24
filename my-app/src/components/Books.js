import React from 'react'
import '../App.css'

export const Books = ({books}) => {

    const handleClick = bookId => {
        const requestOptions = {
            method: 'DELETE'
        };
        fetch("/api/delete/" + bookId, requestOptions).then((response) => {
            return response.json();
        }).then((response) => {
            return response.json()
        });
        window.alert('Book deleted');
        window
            .location
            .reload();
    }

    const BookRow = (book, index) => {

        return (
            <tr className = 'library'>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.description}</td>
                <button
                    onClick={() => {
                    handleClick(book.id)
                }}
                    className='delete-btn'>Delete</button>
            </tr>
        )
    }

    const bookTable = books?.map((book, index) => BookRow(book, index))

    return (
        <div className="library">
            <h2>Books</h2>
            <table className = 'grid'>
               
                    <tr >
                        <td className = 'library-h'>Title</td>
                        <td className = 'library-h'>Author</td>
                        <td className = 'library-h'>Description</td>
                    </tr>
               
                <tbody className = 'grid'>
                    {bookTable}
                </tbody>
            </table>
        </div>
    )
}