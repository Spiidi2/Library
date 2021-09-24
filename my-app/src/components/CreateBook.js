import React from 'react'
import '../App.css'

const CreateBook = ({onChangeForm, createBook}) => {

    
    return (
    <div>
                    <h2>Create Book</h2>
                    <form className= 'form-display'>
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
                                    className="form-control-d"
                                    name="description"
                                    id="description"
                                    placeholder="Description"/>
                            </div>
                        </div>
                        <button type="button" onClick= {(e) => createBook()} className="btn btn-danger">Create</button>
                    </form>
    </div>

    )
}

export default CreateBook