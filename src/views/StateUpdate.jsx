import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

const StateUpdate = () => {

    const [information, setInformation] = useState("")
    const [unmounted, setUnmounted] = useState(true)
    
        useEffect(() => {  
            setUnmounted(false) 
            getData()
            return () => {
            setUnmounted(true)
            }
        }, [])
    
        const getData = async () => {
            const {data} = await axios.get('/test.json')
            console.log(data);
            setInformation(data)
        }

          const handleTitleChange = (id, e) => {
            setInformation(data => {
                data.experience[id].title = e.target.value;
                return {...data}
            })
        }
        const handleResponsibilityChange = (id, id2, e) => {
            setInformation(data => {
                data.experience[id].responsibilities[id2] = e.target.value;
                return {...data}
            })
        }

    return (
        <div>
            <nav>
                <Link className="full-margins" to="/">Home</Link>
            </nav>
            <div>
                <div>
                    <h2>Your Task1 here is to use the "Object.map" function to display all values for jobs and all values of responsibilities.</h2>
                    <h2>Task2 is to use the given Text-area to update the state of the values using the onChange() function. The functions are provided for your convenicence.</h2>
                    {information.experience && 
                        <div>
                            <div>
                                <h3>Title</h3>
                                <div>{information.experience[0].title}</div>
                                <textarea 
                                name="job-title" 
                                cols="30" 
                                rows="1" 
                                value={information.experience[0].title} 
                                onChange={(e) => {}}
                                ></textarea>
                            </div>
                            <div>
                                <h3>Responsibilities:</h3>
                                <div>
                                    <div>{information.experience[0].responsibilities[0]}</div>
                                    <textarea 
                                        name="job-title" cols="50" 
                                        rows="1"
                                        value={information.experience[0].responsibilities[0]} 
                                        onChange={(e) => {}}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default StateUpdate