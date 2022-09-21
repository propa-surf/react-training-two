import React, {useState, useEffect} from 'react'
import Profile from './Profile'
import Form from './Form'
import axios from 'axios'

function Webpage() {

            const [title, setTitle] = useState('Quotes')
            const [quote_one, setQuoteOne] = useState('')
            const [quote_two, setQuoteTwo] = useState('')
            const [image_one, setImageOne] = useState('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')
            const [image_two, setImageTwo] = useState('https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')


    useEffect(()=>{
    //     fetch('https://quote-garden.herokuapp.com/api/v3/quotes')
    //     .then(res => res.json())
    //     .then(data=>{
    //         setQuoteOne(data.data[0].quoteText)
    //         setQuoteTwo(data.data[2].quoteText)
    //         })
    //     .catch(err=>console.log(err))

    axios.get('https://quote-garden.herokuapp.com/api/v3/quotes')
    .then(data=>{
        setQuoteOne(data.data.data[0].quoteText)
        setQuoteTwo(data.data.data[2].quoteText)
    })
    .catch(err=>console.log(err))
    })

    const changeMainTitle=()=>{
        setTitle('Another Quote')
    }


        return (
        <div className='webpage-container'>
            <h1>{title}</h1>
            <div className='box-container'>
                <Profile myquote={quote_one} myimage={image_one} title={title} changeMainTitle={changeMainTitle}/>
                <Profile myquote={quote_two} myimage={image_two} title={title} changeMainTitle={changeMainTitle}/>
                <Form/>
            </div>
        </div>
    )
}

export default Webpage