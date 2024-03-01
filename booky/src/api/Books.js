const API_URL = "http://localhost:8000/books";

const HEADERS = {
  headers: {
    "Content-Type": "application/json",
  }
};

export const getBooks = async()=>{
  let response  = await fetch(API_URL, HEADERS);
  let data  = await response.json();
  return data["hydra:member"];
}

export const searchBookByTitle = async(title)=>{
  let response = await fetch(`${API_URL}?title=${title}`, HEADERS);
  let data  = await response.json();
  return data["hydra:member"];
}

export const getBookById = async(id)=>{
  let response = await fetch(`${API_URL}/${id}`, HEADERS);
  let data  = await response.json();
  return data;
}
