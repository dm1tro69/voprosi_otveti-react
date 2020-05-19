import React from "react";
import './AnswerItem.css'

const AnswerItem = (props) => {
    return(
          <li className={'AnswerItem'}>
              {props.answers}

          </li>
    )
}
export default AnswerItem