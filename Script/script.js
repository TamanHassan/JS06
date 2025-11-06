const library = [];

    function Book(title, author, isRead =false) {
        this.title = title;
        this.author = author;
        this.isRead = isRead;
    }

    function addBook() {
        const title = prompt("Enter book title:");
        const author = prompt("Enter book author:");
        const isReadInput = prompt("Have you read this book? (yes/no):");

        const isRead = isReadInput.toLowerCase() === 'yes';

        const newBook = new Book(title, author, isRead);
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
    function markAsRead(titletoMark) {
        const book = library.find(b => b.title.toLowerCase() === title.toLowerCase());
        if (book) {
            book.isRead = true;
            alert(`${book.title}" marked as read.`);
        } else {
            alert("Book not found");
        }
    }

    let running = true;

    while (running)  {
        const choice = prompt(`

        Book Tracker
        1. Add Book
        2. List Books 
        3. Mark Book as Read 
        4. Exit

        Enter your choice:`);
        switch (choice) {
            case '1':
                addBook();
                break;
            case '2':
                listBooks();
                break;
            case '3':
                const titleToMark = prompt("Enter the title of the book to mark as read:");
                markAsRead(title);
                break;
            case '4':
                running = false;
                alert("Goodbye!");
                break;
            default:
                alert("Invalid choice,");
        }
    }
            
