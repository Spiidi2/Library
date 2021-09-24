import React from 'react'
import '../App.css'

export const DisplayBoard = ({numberOfBooks, getAllBooks}) => {

    return (
        <div className="display">
            <h4>Books Created</h4>
            <div>
                {numberOfBooks}
            </div>
        </div>
    )
}