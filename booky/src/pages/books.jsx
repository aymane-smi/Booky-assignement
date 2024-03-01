import { Input } from "@chakra-ui/react";
import { Book } from "../components/Book";
import { getBooks, searchBookByTitle } from "../api/Books";
import { useEffect, useState } from "react";

const Books = ()=>{
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        async function init(){
            let result = await getBooks();
            setBooks(result);
        }
        init();
    },[]);
    const handleChange = async(e)=>{
        console.log(e);
        if(e.target.value === "")
            setBooks(await getBooks());
        else
            setBooks(await searchBookByTitle(e.target.value));
    }
    return (
        <div className="p-4 flex flex-col justify-center items-center flex-wrap gap-5">
            <div className="flex w-fit justify-center items-center gap-5">
                <span className="font-bold text-[22px]">filter:</span>
                <Input onChange={handleChange} width="400px"/>
            </div>
            <div className="flex justify-center items-center flex-wrap gap-10">
                {books && books.map((book)=><Book title={book.title} id={book.id} key={book.id}/>)}
            </div>
        </div>
    )
}
export default Books;
