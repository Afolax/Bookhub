import React from "react";
import { Link } from "react-router-dom";
import './BookLists.css';

const Book = (book) => {
    return ( 
        <div className="book-item flex flex-column flex-sb">
            <div className="book-item-img">
                <img src={book.cover_img} alt="cover" />
            </div>
            <div className="book-item-info text-center">
                <Link to={`/book${book.id}`} {...Book.book}>
                    <div className="book-item-info-item title fw-7 fs-18">
                        <span className="text-capitalize fw-7">Title: </span>
                        <span>{book.title}</span>
                    </div>
                </Link>
            </div>

            <div className="book-item-info text-center">
                <Link to={`/book${book.id}`} {...Book.book}>
                    <div className="book-item-info-item author fs-15">
                        <span className="text-capitalize fw-7">Author: </span>
                        <span>{book.author.join(", ")}</span>
                    </div>
                </Link>
            </div>

            <div className="book-item-info text-center">
                <Link to={`/book${book.id}`} {...Book.book}>
                    <div className="book-item-info-item author fs-15">
                        <span className="text-capitalize fw-7">Ratings: </span>
                        <span>{book.ratings}</span>
                    </div>
                </Link>
            </div>

            <div className="book-item-info text-center">
                <Link to={`/book${book.id}`} {...Book.book}>
                    <div className="book-item-info-item publish-year fs-15">
                        <span className="text-capitalize fw-7">First Publish Year: </span>
                        <span>{book.first_publish_year}</span>
                    </div>
                </Link>
            </div>
        </div>
     );
}
 
export default Book;
