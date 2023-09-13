"use client"

import { Spinner } from "react-bootstrap"

const Loading = () => {
    return(
        <div className='centered-div text-center'>
            <div>
                <Spinner />
            </div>
        </div>
    )
}
export default Loading