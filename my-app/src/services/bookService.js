export async function getAllBooks() {

    try {
        const response = await fetch('/api/allbooks');
        return await response.json();
    } catch (error) {
        return [];
    }

}

export async function getOneBook() {

    try {
        const response = await fetch('/api/book/:id');
        return await response.json();
    } catch (error) {
        return [];
    }

}

export async function createBook(book) {
    const response = await fetch(`/api/addbook`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    })

    return await response.json();
}

export async function editBook(book) {
    const response = await fetch(`/api/editbook`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book, book.id)
    })

    return await response.json();
}
