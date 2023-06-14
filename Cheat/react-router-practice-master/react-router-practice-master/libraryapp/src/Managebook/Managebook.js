import React from 'react'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'
export default function Managebook() {
    let { id } = useParams();
    const [books, setBooks] = React.useState([]);
    React.useEffect(() => {
        fetch('http://localhost:30001/books', {
        }).then(res => res.json())
            .then(data => setBooks(data));
    }, [])

    return (
        <div className="container">
            <div className="row">
                {
                    books.map(item => <div key={item.id} className="col-md-3 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">{item.title}</h4>
                                <h6 className="card-title">{item.author}</h6>
                                <Link to={`/manage-books/${item.id}`} className="btn btn-primary stretched-link">Manage</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
