import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import '../update/Update.css'

const Update = () => {

  const {id} = useParams();

  const [values, setValues] = useState({
    id: id,
    title: '',
    isbn: '',
    cover: '',
    author: '',
    published: '',
    pages: ''
  })

  useEffect(() => {
    axios.get(`http://localhost:3000/data/${id}`)
      .then(res => {
        setValues({ ...values, title: res.data.title, isbn: res.data.isbn, cover: res.data.cover, author: res.data.author, published: res.data.published, pages: res.data.pages })
      })
      .catch(err => console.log(err))
  }, [])

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.patch(`http://localhost:3000/data/${id}`, values)
      .then(res => {
        navigate('/')
      })
      .catch(err => console.log(err))

  }
  return (
    <div className='update'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label><br />
        <input type="text" name="title" id="title" placeholder='Product name' required value={values.title} onChange={e => setValues({ ...values, title: e.target.value })} />
        <br /><br />
        <label htmlFor="cover">Cover</label><br />
        <input type="username" name="cover" id="cover" placeholder='http://url.uz' required value={values.cover} onChange={e => setValues({...values, cover: e.target.value})}/>
        <br /><br />
        <label htmlFor="pages">Pages</label><br />
        <input type="number" name="pages" id="pages" placeholder='101' required value={values.pages} onChange={e => setValues({...values, pages: e.target.value})}/>
        <br /><br />
        <label htmlFor="published">Published</label><br />
        <input type="number" name="published" id="published" placeholder='2024' required value={values.published} onChange={e => setValues({...values, published: e.target.value})} />
        <br /><br />
        <label htmlFor="isbn">Isbn</label><br />
        <input type="number" name="isbn" id="isbn" placeholder='998912210623' required value={values.isbn} onChange={e => setValues({...values, isbn: e.target.value})}/>
        <br /><br />
        <label htmlFor="author">Author</label><br />
        <input type="text" name="author" id="author" placeholder='Steve Jobs' required value={values.author} onChange={e => setValues({...values, author: e.target.value})}/>
        <br /><br />
        <button type='submit' className='login__box-btn'>Submit</button>
      </form>
    </div>
  )
}

export default Update