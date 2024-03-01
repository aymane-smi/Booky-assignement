import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../api/Books";

const BookDetails = ()=>{
    const {id} = useParams();
    const [book, setBook] = useState({});
    useEffect(()=>{
        async function init(){
            setBook(await getBookById(id));
        }
        init();
    },[]);
    return (<div className="w-screen p-4 flex justify-center items-center gap-[200px]">
        <img src="https://edit.org/img/blog/m68-book-cover-templates.webp" alt="book thumbnail" className="w-1/3 h-[500px]"/>
        <div className="shadow-lg flex flex-col justify-center items-start border-2 rounded-md p-4">
            <p className="flex justify-center items-center gap-3">
                <span className="font-bold text-[22px]">Book id:</span>
                <span className="text-[18px]">{book.id}</span>
            </p>
            <p className="flex justify-center items-center gap-3">
                <span className="font-bold text-[22px]">Book title:</span>
                <span className="text-[18px]">{book.title}</span>
            </p>
            <p className="flex justify-center items-center gap-3">
                <span className="font-bold text-[22px]">Book genre:</span>
                <span className="text-[18px]">{book.genre}</span>
            </p>
            <p className="flex justify-center items-center gap-3">
                <span className="font-bold text-[22px]">Book description:</span>
                <span className="text-[18px]">{book.description}</span>
            </p>
            <p className="flex justify-center items-center gap-3">
                <span className="font-bold text-[22px]">Book publication date:</span>
                <span className="text-[18px]">{book.publicationDate}</span>
            </p>
        </div>
    </div>)
}
export default BookDetails;
