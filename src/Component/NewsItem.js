import React, {Component} from 'react'
export class NewsItem extends Component{
   
    render()
    {
        let {title,description, imageUrl,newsUrl,author,date}=this.props
        return(
            <div className="card">
            <img src={imageUrl}/>
  <div className="card-body  mx-4">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p class="card-text"><small class="text-body-secondary">By {author} on {date}</small></p>
    <a ref="norefferror"href={newsUrl} target="_blank"className="btn btn-primary btn btn-sm btn-dark">Read More</a>
  </div>
</div>
        )
    }
}
export default NewsItem