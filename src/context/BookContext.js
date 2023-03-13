import { createContext, useState } from "react";

const BookContext = createContext();
export const BookProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);

  return (
    <BookContext.Provider
      value={{
        isLoading,
        books,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
