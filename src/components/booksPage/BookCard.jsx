import Link from "next/link";
import React from "react";

const BookCard = ({ book }) => {
  const { id, title, author, description } = book;

  return (
    <div className="card bg-base-100 card-md shadow-sm">
      <div className="card-body">
        <h2 className="card-title text-xl">{title}</h2>

        <span className="text-base">
          <em>{author}</em>
        </span>

        <p>{description}</p>

        <div className="justify-end card-actions">
          <Link href={`/books/${id}`} className="btn btn-primary">
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
