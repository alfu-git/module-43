import React from "react";

const BookCard = ({ book }) => {
  const { title, author, description } = book;

  return (
    <div className="card bg-base-100 card-md shadow-sm">
      <div className="card-body">
        <h2 className="card-title text-xl">{title}</h2>

        <span className="text-base">
          <em>{author}</em>
        </span>

        <p>{description}</p>
      </div>
    </div>
  );
};

export default BookCard;
