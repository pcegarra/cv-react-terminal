import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'


export default class WorkItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
          <div className="workitem">
            <h3> <a target="_blank" href={this.props.link}>{this.props.title}</a></h3>
            <p className="meta">{this.props.excerpt}</p>
            <p><a target="_blank" href={this.props.link}><img src={this.props.imageUrl} id="workitemimg"></img></a></p>
            <p>{this.props.description}</p>
            <ul>
            {
              this.props.tags.map(function(tag,index){
                  return(
                    <li key={index}>{tag}</li>
                  );
              })
            }
            </ul>
            <p>---------------------</p>
          </div>
    )
  }
}
