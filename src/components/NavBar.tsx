import { Link } from "react-router-dom"
import { Red } from "./Red"
import { Orange } from "./Orange"
import { Yellow } from "./Yellow"
import { Green } from "./Green"
import { Blue } from "./Blue"
import { Purple } from "./Purple"
import './NavBar.css'

export function NavBar() {
    return(
        <div className='colors-div'>
            <Link to="/red"><Red/></Link>
            <Link to="/orange"><Orange/></Link>
            <Link to="/yellow"><Yellow/></Link>
            <Link to="/green"><Green/></Link>
            <Link to="/blue"><Blue/></Link>
            <Link to="/purple"><Purple/></Link>
        </div>
    )
}