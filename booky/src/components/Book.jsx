import { Link } from "react-router-dom";

const class1 = "scale-175";
const class2 = "scale-100";

export const Book = ({title, id})=>{
    return (
        <Link to={`/book/${id}`}>
            <div className="bg-white border rounded-md p-4 flex flex-col justify-center items-center w-fit hover:scale-[1.2] transition-transform">
                <img src="https://edit.org/img/blog/m68-book-cover-templates.webp" alt="book thumbnail" className="w-[150px] h-[200px]"/>
                <p data-cy="title">{title}</p>
            </div>
        </Link>
    )
}
