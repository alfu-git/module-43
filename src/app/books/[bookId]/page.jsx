import React from "react";

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/books");
  const books = await res.json();

  return books.slice(0, 3).map((book) => ({ bookId: book.id }));
};

const BookDetailsPage = async ({ params }) => {
  const { bookId } = await params;

  const res = await fetch(`http://localhost:5000/books/${bookId}`);
  const book = await res.json();

  const {
    title,
    author,
    price,
    category,
    rating,
    published_year,
    description,
  } = book;

  return (
    <section className="mt-10">
      <div>
        <div className="p-4 bg-[#212121] rounded-xl max-w-3xl mx-auto flex flex-col gap-y-3">
          <h4 className="text-xl font-bold">{title}</h4>

          <h5>
            <em>{author}</em>
          </h5>

          <span>Category: {category}</span>

          <div className="flex justify-between items-center">
            <span>Published: {published_year}</span>
            <span>Rating: {rating}</span>
          </div>

          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default BookDetailsPage;
