const API_URL = "http://localhost:8080/books";

const HEADERS = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const getBooks = async()=>{
  return fetch(API_URL, HEADERS);
}

export const searchBookByTitle = async()=>{
  return fetch(`${API_URL}/`)
}
