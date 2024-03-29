import React from 'react'

const NewsItems = (props)=> {
    let {title,description,imageUrl,newsUrl,author,date,source} = props;
    return (
        <div className="my-2">
        <div className="card">
        <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }}><span className="badge rounded-pill bg-danger"> {source} </span>
        </div>
        <img src={imageUrl?imageUrl:"https://cdn.cnn.com/cnnnext/dam/assets/211120220140-starbucks-employee-hepatitis-a-camden-county-super-tease.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
            {/* <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}> {source}</span> */}
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
    </div>
    )
}

export default NewsItems
