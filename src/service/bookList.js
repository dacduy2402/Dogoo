import { useState } from "react";
import { useEffect } from "react";
import bookApi from "../api/bookApi";
import BookItem from "./bookItem";
import BookDetail from "./bookDetail";
import { useNavigate } from "react-router";

function BookList() {
    const navigate = useNavigate();
    let [bookList, setBookList] = useState([])

    useEffect(() => {
        const fetchBookList = async () => {
            try {
                const response = await bookApi.getAll();
                setBookList(response)
            } catch (error) {
                console.log('Failed to fetch book list: ', error);
            }
        }

        fetchBookList();
    }, []);

    const [selectedBookId, setSelectedBookId] = useState(null);
    const showBookDetail = (id) => {
        navigate(`html/${id}`);
        setSelectedBookId(id);
    };

    return (
        <div className="bookList">
            {bookList.map((item, index) => {
                // console.log(item);
                return (
                    <BookItem
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        category={item.category}
                        author={item.author}
                        showBookDetail={showBookDetail}
                    >
                    </BookItem>
                    // <BookItem item={item} />
                )
            })}
            {selectedBookId && (
                <BookDetail bookId={selectedBookId} />
            )}
        </div>
    )
}
export default BookList;