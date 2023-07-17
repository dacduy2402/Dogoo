import { useState } from "react";
import { useEffect } from "react";
import bookApi from "../api/bookApi";
import { useParams } from "react-router";

const BookDetail = (props) => {
    const {id} = useParams();

    console.log('hello');

    let [bookDetail, setBookDetail] = useState([])

    useEffect(() => {
        const fetchBookDetail = async () => {
            try {
                const response = await bookApi.getId(id);
                setBookDetail(response);
                console.log(response);
            } catch (error) {
                console.log('Failed to fetch book: ', error);
            }
        }
        fetchBookDetail();
        
    }, []);
    return (
        <div className="bookDetail">
            <div className="bookDetail-image">
                <img src={bookDetail.image} />
            </div>
            <div className="bookDetail-footer">
                <div className="book-name">
                    <h2>{bookDetail.name}</h2>
                </div>
                <div className="bookDetail-author">
                    <h3>{bookDetail.author} || "Anonymous"</h3>
                </div>
            </div>
        </div>
    )

}
export default BookDetail;