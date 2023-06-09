import NavBar from './NavBar';
import Note from './Note';
import './Home.css';
import axios from 'axios';

import React, { useState, useEffect } from 'react';

interface NoteData {
    title: string,
    description: string
}

function Home() {

    const [showModal, setShowModal] = useState<boolean>(false)
    const [notes, setNotes] = useState<NoteData[]>([])
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [isLogged, setIsLogged] = useState<any>(localStorage.getItem("isLogged"));

    function getALLNotes() {
        axios.get('http://localhost:4000/newnote').then(
            (response) => {
                setNotes(response.data.results)
            }
        )
    }

    // async function getALLNotes()  {
    //   const response = await axios.get('http://localhost:4000/newnote')

    // }

    useEffect(() => {
        getALLNotes()

    }, []);

    console.log(notes)

    const [show, setShow] = useState<boolean>(true)
    const closeModal = () => setShow(false);

    function saveNote() {
        axios.post('http://localhost:4000/newnotePost', {
            description: description, title: title
        })
            .then((response) => {
                setNotes(response.data.results)
            }
            )

        setShowModal(false)
    }

    function myalert() {
        alert("Discard")
    }
    return (
        <>
            <div className="App">
                <NavBar></NavBar>
                <div id="app">
                    {notes.map((item) => {
                        return (<Note title={item.title} description={item.description} />);
                    })
                    }

                    <button className="add-note" type="button" onClick={(e) => {
                        setShowModal(true);

                    }}>+</button>

                </div>


                {showModal ?
                    <div className="popup">
                        <div className="popup-content">
                            <div className="row navstyle">
                                <h2 style={{ color: "#031218", margin: "10px" }}>
                                    Create a new note
                                </h2>
                                {/* <AiFillCloseCircle style={{color: "#031218", margin: "10px"}} onClick={closeModal}/> */}
                            </div>
                            <div className="row">
                                <h4 style={{ color: "#031218", margin: "10px" }}>Title</h4>
                                <input className="string-input" style={{ margin: "10px" }} placeholder="Note title here" type="text" value={title} onChange={(e) => {
                                    setTitle(e.target.value)
                                }} />
                            </div>
                            <div className="row">
                                <h4 style={{ color: "#031218", margin: "10px" }}>Description</h4>
                                <textarea className="string-input" style={{ margin: "10px" }} placeholder="Note description here" value={description} onChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <div className="row" style={{ justifyContent: "end" }}>
                                <button style={{ padding: "5px 20px", margin: "0 5px", border: "none", borderRadius: "10px", color: "white", background: "#031218" }} onClick={myalert}>Discard</button>
                                <button style={{ padding: "5px 20px", margin: "0 5px", border: "none", borderRadius: "10px", color: "black", background: "#00f3ed" }} onClick={saveNote}>Save</button>
                            </div>
                        </div>
                    </div>
                    : null
                }

            </div>

        </>
    )
}

export default Home;


