import React from "react"
import { useGlobalState } from "../../core/state";
const View = () =>{

    const state = useGlobalState();

    return(

        <h3>
            {
                JSON.stringify(state.products)
            }
        </h3>

    )

}

export {
    View
}