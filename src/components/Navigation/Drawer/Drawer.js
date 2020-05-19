import React from 'react'
import classes from './Drawer.css'
import Backdrop from "../../UI/Backdrop/Backdrop";

const link = [
    1, 2, 3
]

class Drawer extends React.Component{

    renderLinks() {
       return link.map((link, index) => {
           return(
               <li key={index}>
                   <a>link {link}</a>
               </li>
           )
       })
    }

    render() {
        const cls = [classes.Drawer]
        if(!this.props.isOpen){
           cls.push(classes.close)
        }
        return(
            <React.Fragment>
           <nav className={cls.join(' ')}>
               <ul>
                   {this.renderLinks()}
               </ul>

           </nav>
                {this.props.isOpen ?  <Backdrop onClick={this.props.onClose}/> : null}
            </React.Fragment>
        )
    }
}
export default Drawer