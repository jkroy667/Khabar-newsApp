import React, {useEffect, useState} from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=> {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    // document.title = `${this.capitalizeFirstLetter(props.category)} - Khabar`


    const updateNews = async ()=>{
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(50);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews(); 
    }, [])

    const handlePreviousClick = async ()=>{
        setPage(page-1);
        updateNews();
    }

    const handleNextClick = async ()=>{
        setPage(page+1);
        updateNews();
    }

    const fetchMoreData = async () => {  
        setPage(page+1);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };

    return (
            <>
            <h1 className="text-center my-4" style={{fontSize: '3.5rem'}} >Khabar - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner/>}
            >
            <div className="container">
            <div className="row">
                {articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <NewsItems title={element.title!=null ? element.title:null} description={element.description!==null ? element.description:null} imageUrl={element.urlToImage}
                        newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div>
                })}
            </div>
            </div>
            </InfiniteScroll>
            {/* <---------------------   Prev Next Button -----------------------------> */}
            {/* <div className="container d-flex justify-content-between" style={{margin: '40px 0px'}}>
                <button disabled={page<=1} type="button" onClick={this.handlePreviousClick} className="btn btn-dark"> &larr; Previous</button>
                <button disabled={page+1 > Math.ceil(totalResults/props.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
            </div> */}
            {/* <---------------------   Prev Next Button -----------------------------> */}
        </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
