import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import axios from 'axios';
export default function Bookdetails() {
    let { id } = useParams();
    const [books, setBooks] = React.useState([]);
    React.useEffect(() => {
        fetch(`http://localhost:30001/books/${id}`, {
        }).then(res => res.json())
            .then(data => setBooks(data));
    }, [])


    const deleteBook = () => {

        // Issue DELETE request
        axios.delete(`http://localhost:30001/books/${id}`)
            .then(() => {

                // Issue GET request after item deleted to get updated list
                // that excludes user of id
                return axios.get(`http://localhost:30001/books`)

            })
            .then(res => {

                // Update users in state as per-usual
                const books = res;
                this.setState({ books });

            })
        alert("Book Deleted Succcessfully!!!")
    }


    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <h2><u>Book Name: </u>&nbsp; &nbsp;{books.title}</h2>
                    <h4><u>Author Name: </u>&nbsp; &nbsp;{books.author}</h4>
                    <p><u>Book Description: </u>&nbsp; &nbsp; {books.description}</p>
                    <p><u>Book Published: </u>&nbsp; &nbsp;{books.published}</p>
                    <p><u>Langauge: </u>&nbsp; &nbsp;{books.langauge}</p>
                    <Link to="/manage-books"><button type="button" className="btn btn-primary" onClick={deleteBook}>Delete Book</button></Link>

                </div>
            </div>
        </div>
    )
}