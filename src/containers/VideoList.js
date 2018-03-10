import React, { Component } from 'react';
import { connect } from 'react-redux';

class VideoList extends Component {
    
    renderList() {
        return this.props.videos.map( (video) => {
            console.log(video)
            return(
                <div>
                    <li key={video.url} className="list-group-item"><iframe  src={video.url} ></iframe></li> 
                </div>
            );
        }) ;
    }

    render() {
        console.log('from book list', this.props.videos);
        return(
            <div>
                <p>Whats Up</p>
                <ul className="list-group col-sm-4">
                    {this.renderList()}
                </ul>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    // WHAT EVER IS RETURNED HERE WILL
    // SHOW UP AS PROPS IN VIDEO LIST
    return {
        videos: state.videos
    };
}

export default connect(mapStateToProps)(VideoList);
