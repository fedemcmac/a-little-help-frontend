import React, { useState } from 'react'
import Header from './Header';

const JobForm = ({ submit }) => {

    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [category, setCategory] = useState('Other')
    const [description, setDescription] = useState('')

    return(
        <div>
            <Header title="Create new task"/>
            <form onSubmit={e => {
            e.preventDefault();
            submit({ title, summary, category, description })
            setTitle('')
            setSummary('')
            setCategory('Other')
            setDescription('')
        }}>
                <label>Title:</label>
                <input placeholder="Title" type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} /><br />
                <label>Summary:</label>
                <input placeholder="Summary" type="text" name="summary" value={summary} onChange={e => setSummary(e.target.value)} /><br />
                <label>Category:</label>
                <select placeholder="Email" type="email" name="category" value={category} onChange={e => setCategory(e.target.value)}>
                    <option value="Other">Other</option>
                    <option value="Remote">Remote</option>
                    <option value="Physically demanding">Physically demanding</option>
                    <option value="Other">Other</option>
                    <option value="Outdoor">Outdoor</option>
                    <option value="Indoor">Indoor</option>
                    <option value="Animals">Animals</option>
                    <option value="Elderly">Elderly</option>
                    <option value="Children">Children</option>
                </select><br />
                <label>Description:</label>
                <textarea name="description" value={description} onChange={e => setDescription(e.target.value)} /><br />
                <input type="submit" value="Create Job"/>
            </form>
        </div>
    )
}
export default JobForm