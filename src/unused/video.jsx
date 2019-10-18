import React from 'react';
import { Link } from 'react-router-dom';

class VideoCard extends React.Component {
    constructor(props) {
        super(props);
        this.toggleHover = this.toggleHover.bind(this);
        this.state = {
          isHovering: true,
        };
      }
    playVideo = () => {
        // You can use the play method as normal on your video ref
             if ( this.refs.vidRef.ended) this.refs.vidRef.play();
            else this.refs.vidRef.pause();
      };

    toggleHover = () => {   
        this.setState({
            isHovering: !this.state.isHovering,
          });
    }
    render() {
    return ( <>
        <div className="w3-container w3-light-gray" style={{padding:0,fontSize: '1.2em'}}>
        <div className="w3-margin-top w3-margin-left">
            <Link to="/dashboard"><i className="material-icons">arrow_back</i></Link>
        </div>
        <div className="w3-container w3-center" style={{
                  paddingLeft: '1em', paddingRight: '1em', margin:'0  1em 1em 1em'
                }}>
          <div className="w3-cell">
            <img src="https://www.w3schools.com/w3css/img_avatar3.png" alt="Avatar" className="w3-circle" style={{ width: '60px' }} />
          </div>
          <div className=" w3-container w3-cell ">
            <p className="" style={{margin:'0.8em 1em 1em 1em'}}>
                <b>Harikrishna's Creativity</b>
            </p>
          </div>
        </div>
        </div>
        {/* <div className="w3-panel w3-display-container" onMouseLeave={this.toggleHover}> */}
        {/* {this.state.isHovering && <i style={{fontSize:'24px'}} onClick={this.playVideo} className=" w3-display-middle fa fa-play"></i>} */}
            {/* <video
              width="100%"
              //ref="vidRef"
              src="https://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
              type="video/mp4"
              poster="//s3-us-west-2.amazonaws.com/s.cdpn.io/3174/poster.png"
            >
            </video> */}
          {/* </div> */}
          <video controls disablePictureInPicture  controlsList="nodownload" ref="vidRef" width="100%" src="https://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4" ></video>
          {/* <button className="w3-display-end" onClick={this.playVideo}>play/pause</button>
          <i style={{fontSize:'24px'}} onClick={this.playVideo} className="fa fa-play"></i> */}
            {/* </div> */}

         </>);
}
}
 
export default VideoCard;