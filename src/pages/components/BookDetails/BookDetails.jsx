import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Loading from '../Loader/Loader';
import coverImage from '../../../imgs/download.jpeg'
import './BookDetails.css'
import {FaArrowLeft} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const URL = " https://openlibrary.org/works/";

const BookDetails = () => {
    const {id} = useParams()
    const [Loading, setLoading] = useState(true)
    const [book, setBook] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        async function getBookDetails(){
            setLoading(true);
            try{
                const response = await fetch(`${URL}${id}.json`);
                const data = await response.json();

                if (data){
                    const {description, title, covers, subject_places, subject_times, subjects} = data;
                    const newBook = {
                        description: description ? description.value : "No description found",
                        title: title,
                        cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImage,
                        subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
                        subject_times: subject_times ? subject_times.join(", ") : "No subject times found",
                        subjects: subjects ? subjects.join(", ") : "No subjects found",
                    }
                    setBook(newBook)
                } else{
                    setBook(null)
                }
                setLoading(false)
            } catch(err){
                console.log(err);
                setLoading(false);
            }
        }
        getBookDetails()
    }, [id])
    // console.log(book)

    return ( 
        <section className="book-details">
            <div className="container">
                <button type="button" className="flex flex-c back-btn " onClick={() => navigate('/book')}>
                    <FaArrowLeft size={22} />
                    <span className="fs-18 w-6">Go back</span>
                </button>
            </div>

            <div className="book-details-content grid">
                <div className="book-details-img">
                    <img src={book?.cover_img} alt="cover img" />
                </div>
                <div className="book-details-info">
                    <div className="book-details-item title">
                        <span className="fw-6 fs-24">{book?.title}</span>
                    </div>
                    <div className="book-details-item description">
                        <span>{book?.description}</span>
                    </div>
                    <div className="book-details-item">
                        <span className="fw-6">Subject Places: </span>
                        <span className="text-italic">{book?.subject_places}</span>
                    </div>
                    <div className="book-details-item">
                        <span className="fw-6">Subject Times: </span>
                        <span className="text-italic">{book?.subject_times}</span>
                    </div>
                    <div className="book-details-item">
                        <span className="fw-6">Subjects: </span>
                        <span>{book?.subjects}</span>
                    </div>
                </div>
            </div>
            
        </section>
     );
}
 
export default BookDetails;