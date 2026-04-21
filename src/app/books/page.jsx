import BookCard from "@/components/booksPage/BookCard";
import React from "react";

const BooksPage = async () => {
  const res = await fetch("http://localhost:5000/books", { cache: "no-store" });
  const books = await res.json();

  return (
    <section className="my-10">
      <div>
        <h2 className="mb-7 text-4xl font-medium text-center">All Books</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksPage;
