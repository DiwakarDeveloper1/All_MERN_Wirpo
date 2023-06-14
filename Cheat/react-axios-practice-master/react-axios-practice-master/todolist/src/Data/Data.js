import React from "react";
import axios from "axios";
import "./Data.css";
export default function Data() {
    const [posts, setPosts] = React.useState([]);
    const [list, setList] = React.useState([]);
    React.useEffect(() => {
        const getpost = async () => {
            const { data: res } = await axios.get("http://localhost:3001/lists");
            setPosts(res);
        };
        getpost();
    }, []);

    const Addlist = () => {
        axios.post("http://localhost:3001/lists", { list }).then((res) => {
            setPosts((prev) => [...prev, res.data]);
        });
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3001/lists/${id}`);
        setPosts(posts.filter((p) => p.id !== id));
    };
    return (
        <div className='container'>
            <div className='row itm'>
                <div className='col-md-5'>
                    <div className='bg-dark text-light text-center py-3'>
                        <h2>Todo List App</h2>
                    </div>
                    <div className='row itm'>
                        <div className='col-md-5 new'>
                            <div className='input-group mb-3'>
                                <input
                                    type='text'
                                    className='form-control'
                                    onChange={(e) => setList(e.target.value)}
                                    placeholder='Enter Item'
                                />
                                <button onClick={Addlist} className='btn btn-outline-secondary'>
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                    <ul className='list-group'>
                        {posts.map((item) => (
                            <li key={item.id} className='list-group-item'>
                                {item.list}
                                <i className='fa-solid fa-trash-can float-end icon' onClick={() => handleDelete(item.id)}></i>
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}
