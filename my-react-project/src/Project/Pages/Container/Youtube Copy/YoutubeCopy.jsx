import { Component, Fragment } from "react";
import ThumbYoutube from '../../Component/Thumbnail YouTube Copy/ThumbYoutube'

class YoutubeCopy extends Component {
    render(){
        return(
            <Fragment>            <h1>Props component</h1>
            <ThumbYoutube 
            time='13:30' 
            title='how-to-thumbnail #1' 
            desc='how to create thumbnail properly.'/>
            <ThumbYoutube 
            time='03:10' 
            title='how-to-thumbnail #2' 
            desc='how to create thumbnail properly.'/>
            <ThumbYoutube 
            time='10:40' 
            title='how-to-thumbnail #3' 
            desc='how to create thumbnail properly.'/>
            <ThumbYoutube />
            <hr/>
            </Fragment>

        )
    }
}

export default YoutubeCopy;