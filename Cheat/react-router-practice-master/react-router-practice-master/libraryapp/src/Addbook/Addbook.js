import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
export default function Addbook() {
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDesp] = useState('');
    const [published, setPublish] = useState('');
    const [langauge, setLanguage] = useState('');
    useEffect(() => {
        axios.get('http://localhost:30001/books')
            .then((res) => {
                setBooks(res);
            });
    }, [])

    const AddBook = () => {
        axios.post('http://localhost:30001/books', { title, author, description, published, langauge })
            .then((res) => {
                setBooks([...books, res]);
            });
        alert("Book Added Successfully!!")
    }
    return (

        <div className="container mt-5" style={{ color: "red" }}>
            <h2>Enter Some details to add book: </h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="mt-2">
                        <input type="text" onChange={(e) => setTitle(e.target.value)} className="form-control form-control-sm" placeholder="Enter the title" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="mt-2">
                        <input type="text" onChange={(e) => setAuthor(e.target.value)} className="form-control form-control-sm" placeholder="Enter the Author" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="mt-2">
                        <input type="text" onChange={(e) => setDesp(e.target.value)} className="form-control form-control-sm" placeholder="Enter Description" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="mt-2">
                        <input type="text" onChange={(e) => setPublish(e.target.value)} className="form-control form-control-sm" placeholder="Enter publish date" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="mt-2">
                        <input type="text" onChange={(e) => setLanguage(e.target.value)} className="form-control form-control-sm" placeholder="Enter Book Langauge" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 text-center">
                    <div className="mt-2">
                        <Link to="/home"><button className="btn btn-success" onClick={AddBook}>Submit</button></Link>

                    </div>
                </div>
            </div>
        </div>

    )

}

