import React from "react";
import { useState } from "react";


const BookItem = (props) => {   
    return (
        <div className="bookItem">
            <div className="book-image">
                <img src={props.image}/>
            </div>
            <div className="book-footer">
                <div className="book-name">
                    <h2>{props.name}</h2>
                </div>
                <div className="book-author">
                    <h3>{props.author} || "Anonymous"</h3>
                </div>
                <button onClick={() => props.showBookDetail(props.id)}>DETAIL</button>
            </div>
        </div>
    )
    
}
export default BookItem;