import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
        <nav>
            <ul className="unordered-line flex-row justify-row-center full-margins">
                <li>
                    <Link className="horizontal-margins" to="/state-update">State Update</Link>
                </li>
                {/* <li className="horizontal-margins">
                    <Link to="/state-update">State Update</Link>
                </li>
                <li className="horizontal-margins">
                    <Link to="/state-update">State Update</Link>
                </li> */}
            </ul>
        </nav>
        <div>
            <h3>Coding Test</h3>
            <p>Please show your work on what you did and how you arrived at your results.</p>
        </div>
    </div>
  )
}

export default Home