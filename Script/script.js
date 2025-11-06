const library = {};

    function Book(title, author, isRead =false) {
        this.title = title;
        this.author = author;
        this.isRead = isRead;
    }

    function addbook() {
        const title = prompt("Enter book title:");
        const author = prompt("Enter book author:");
        const isReadInput = prompt("Have you read this book? (yes/no):");

        const isRead = isReadInput.toLowerCase() === 'yes';

        const newBook = new book(title, author, isRead);
        library.push(newBook);
        alert(`${title}" by ${author} added to your library.`);
    }

    function listBooks() {
        if (library.length === 0) {
            alert("Your library is empty.");
            return;
        }

    console.log("Books in your Library:");
        library.forEach((book, index) => {
            console.log(
                `${index + 1}. "${book.title}" by ${book.author} - ${book.isRead ? "Read" : "Not Read"}`
            );
        });

        alert("Books have been listen in the console!");
    }
    function markAsRead(title) {
        const book = library.find(b => b.title.toLowerCase() === title.toLowerCase());
        if (book) {
            book.isRead = true;
            alert(`${book.title}" marked as read.`);
        } else {
            alert("Book not found");
        }
    }
