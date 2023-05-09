import React, { useState } from 'react'
import './todo.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import moment from 'moment/moment';

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const dispatch = useDispatch();
    const list = useSelector((state) => { return state.todoReducers.list })
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(addTodo(inputData));
        setInputData('');
    }
    const handleDelete = (e, id) => {
        e.preventDefault();
        dispatch(deleteTodo(id));
    }
    const handleClear = (e) => {
        e.preventDefault();
        dispatch(removeTodo());
    }
    return (
        <>

            <section className="vh-100 ">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card customBg" id="list1" style={{ borderRadius: '.75rem', backgroundColor: '#eff1f2' }} >
                                <div className="card-body py-4 px-4 px-md-5">

                                    <p className="h1 text-center mt-3 mb-4 pb-3 ">
                                        <i className="fas fa-check-square me-1"></i>
                                        <u>My Todo-s</u>
                                    </p>

                                    <div className="pb-2">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-flex flex-row align-items-center">
                                                    <input type="text" className="form-control form-control-lg" id="addItem"
                                                        placeholder="Add new..." value={inputData} onChange={(event) => { setInputData(event.target.value) }} />

                                                    <div>
                                                        <button type="button" className="btn btn-primary" onClick={handleClick}>Add</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="my-4" />

                                    {
                                        list.map((elem) => {
                                            const addedDate = moment(elem.date).format('D MMM YYYY HH:mm:ss');
                                            return (
                                                <ul className="list-group list-group-horizontal rounded-0 eachItem" key={elem.id}>


                                                    <li
                                                        className="list-group-item  py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                                                        <i className="fa-solid fa-check mx-2"></i>
                                                        {/* <i className="fa-regular fa-circle-dot mx-2"></i> */}
                                                        <p className="lead fw-normal mb-0">{elem.data}</p>
                                                        <div className="text-end text-muted mx-3">
                                                            <a href="#!" className="text-muted" data-mdb-toggle="tooltip" title="Created date">
                                                                <p className="small mb-0"><i className="fas fa-info-circle me-2"></i>{addedDate}</p>
                                                            </a>
                                                        </div>
                                                    </li>

                                                    <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                                                        <div className="d-flex flex-row justify-content-end mb-1">
                                                            {/* <a href="#!" className="text-info" data-mdb-toggle="tooltip" title="Edit todo"><i
                                                                className="fas fa-pencil-alt me-3"></i></a> */}
                                                            <a href="#!" className="text-danger" data-mdb-toggle="tooltip" title="Delete todo" onClick={(e) => { handleDelete(e, elem.id) }}><i
                                                                className="fas fa-trash-alt"></i></a>
                                                        </div>

                                                    </li>
                                                </ul>
                                            )
                                        })
                                    }

                                    {(list.length > 0) ? <button className="btn btn-danger my-3" onClick={handleClear}>Clear All</button> : ''}


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Todo
