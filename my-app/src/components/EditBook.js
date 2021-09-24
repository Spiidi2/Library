import React from 'react'
import '../App.css'

const EditBook = ({onChangeForm, editBook}) => {

    return (
        <div>
            <div>
                <div>
                    <h2>Create Book</h2>
                    <form>
                        <div>
                            <div>
                                <label>Title</label>
                                <input
                                    type="text"
                                    onChange={(e) => onChangeForm(e)}
                                    className="form-control"
                                    name="title"
                                    id="title"
                                    placeholder="Title"/>
                            </div>
                            <div>
                                <label>Author</label>
                                <input
                                    type="text"
                                    onChange={(e) => onChangeForm(e)}
                                    className="form-control"
                                    name="author"
                                    id="author"
                                    placeholder="Author"/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>Description</label>
                                <input
                                    type="text"
                                    onChange={(e) => onChangeForm(e)}
                                    className="form-control"
                                    name="description"
                                    id="description"
                                    placeholder="Description"/>
                            </div>
                        </div>
                        <button type="button" onClick= {(e) => editBook()} className="btn btn-danger">Edit</button>
                        {/* <button type="button" onClick= {(e) => editBook()} className="btn btn-danger">Edit</button> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditBook