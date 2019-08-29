import React, { useState } from 'react'

const JobForm = ({ submit }) => {

    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')

    return(
        <div>
            <form onSubmit={e => {
            e.preventDefault();
            submit({ title, summary, category, description })
            setTitle('')
            setSummary('')
            setCategory('')
            setDescription('')
        }}>
                <label>Title:</label>
                <input placeholder="Title" type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
                <label>Summary:</label>
                <input placeholder="Summary" type="text" name="summary" value={summary} onChange={e => setSummary(e.target.value)} />
                <label>Category:</label>
                <select placeholder="Email" type="email" name="category" value={category} onChange={e => setCategory(e.target.value)}>
                    <option>ciao</option>
                </select>
                <label>Description:</label>
                <textarea placeholder="Password" name="description" value={description} onChange={e => setDescription(e.target.value)} />
                <input type="submit" value="Create Job"/>
            </form>
        </div>
    )
}
export default JobForm