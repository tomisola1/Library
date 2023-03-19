import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  {
    getAllBooks {
      id
      name
      description
    }
  }
`;

export const ADD_BOOKS = gql`
  mutation createBook($input: BookInput!) {
    createBook(bookInput: $input) {
      id
      name
      description
    }
  }
`;

export const UPDATE_BOOKS = gql`
  mutation editBook($id: Int!, $input: UpdateBookInput!) {
    editBook(id: $id, input: $input) {
      id
      name
      description
    }
  }
`;

export const DELETE_BOOKS = gql`
  mutation deleteBook($id: Int!) {
    deleteBook(id: $id) {
      id
      name
      description
    }
  }
`;
