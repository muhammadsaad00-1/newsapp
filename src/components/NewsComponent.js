//   import React, { Component } from 'react'
//   import NewsItem from './NewsItem'
//   import Spinner from './Logo'
//   import PropTypes from 'prop-types'
//   import InfiniteScroll from "react-infinite-scroll-component";

//   export class NewsComponent extends Component {

// static defaultProps ={
//   country: 'in',
//   pageSize:8,category:'general'
// }
// static propTypes={
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category:PropTypes.string
// }
// Cap=(string)=>{
//   return string.charAt(0).toUpperCase() +string.slice(1);
// }
//       constructor(props){
//           super(props);
//           console.log("This is something")
//           this.state={
//               // articles: this.articles,
//               // loading: false
//               articles: [],
//               loading:false,
//               page: 1,
//               totalResults:0
//           }
//           document.title= `${this.Cap(this.props.category)} - LocalNews`
//       }
//       async updateF(){
//         this.props.setProgress(10);
//         let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9263a145ac9e41eeb08f01c392c17a85&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//         this.setState( {loading: true} )
//         let data= await fetch(url);
//         this.props.setProgress(30);
//         let parsedData= await data.json();
//         this.props.setProgress(70);
//         console.log(parsedData)
//         this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults,loading:false})
//         this.props.setProgress(100);
//       }
//       async componentDidMount(){
//         // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9263a145ac9e41eeb08f01c392c17a85&page=1&pageSize=${this.props.pageSize}`;
//         // this.setState( {loading: true} )
//         // let data= await fetch(url);
//         // let parsedData= await data.json()
//         // console.log(parsedData)
//         // this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults,loading:false})
//         this.updateF();
//       }
//       handlePreviousClick=async ()=>{
//         // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9263a145ac9e41eeb08f01c392c17a85&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
//         // this.setState( {loading: true} )
//         // let data= await fetch(url);
//         // let parsedData= await data.json()
        
//         // this.setState({articles: parsedData.articles,page:this.state.page-1,loading:false})
//          this.setState({page:this.state.page-1},this.updateF)
       
//       }
//       handleNextClick=async ()=>{
       
       
//         // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9263a145ac9e41eeb08f01c392c17a85&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
//         // this.setState( {loading: true} )
//         // let data= await fetch(url);
//         // let parsedData= await data.json()
        
//         // this.setState({articles: parsedData.articles,page:this.state.page+1,loading:false})
//         this.setState({ page: this.state.page + 1 },this.updateF)
        
      
//     }
//     fetchMoreData = async() => {
//       this.setState({ page: this.state.page + 1 },async()=>{
//       const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9263a145ac9e41eeb08f01c392c17a85&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      
//         let data= await fetch(url);
//         let parsedData= await data.json()
//         console.log(parsedData)
//         this.setState({articles: this.state.articles.concat(parsedData.articles),totalResults: parsedData.totalResults})
//       })
//     };
//     render() {
//       return (
//         <>
//           <h2 className='text-center' style={{margin: "35px 0px"}}>LocalNews - Top {this.Cap(this.props.category)} HeadLines</h2>
//           {this.state.loading&&<Spinner/>}
//           <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={<Spinner/>}
//         >
//           <div className="container">
//           <div className="row">
//           {!this.state.loading && this.state.articles.map((e,index)=>{
//           return <div className="col-md-4" key={index}>
//             <NewsItem title={e.title?e.title.slice(0,40):""} description={e.description?e.description.slice(0.80):""} url={e.urlToImage?e.urlToImage:"https://i.ytimg.com/vi/K4YHvq0nFuM/maxresdefault.jpg"} author={e.author} publishedAt={e.publishedAt} newsUrl={e.url} source={e.source.name}/>
           
//             </div>
            
//           })}
          
//   </div>
//   </div>
//   </InfiniteScroll>
//   {/* <div className="container d-flex justify-content-between">
//   <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button> 
//   <button disabled={this.state.page + 1>=Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
//             </div> */}
//         </>
//       )
//     }
//   }

// export default NewsComponent
import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Logo';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class NewsComponent extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  Cap = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.Cap(this.props.category)} - LocalNews`;
  }

  async updateF() {
   
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
   
    let data = await fetch(url);
   
    let parsedData = await data.json();
    
    this.setState({
      articles: parsedData.articles || [],
      totalResults: parsedData.totalResults || 0,
      loading: false,
    });
    
  }

  async componentDidMount() {
    this.updateF();
  }

  handlePreviousClick = async () => {
    this.setState({ page: this.state.page - 1 }, this.updateF);
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 }, this.updateF);
  };

  fetchMoreData = async () => {
    
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({ page: this.state.page + 1 });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: this.state.articles.concat(parsedData.articles || []),
        totalResults: parsedData.totalResults || 0,
      });
    
  };

  render() {
    return (
      <>
        <h2 className='text-center' style={{ margin: '35px 0px',marginTop:'90px' }}>
          LocalNews - Top {this.Cap(this.props.category)} Headlines
        </h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className='container'>
            <div className='row'>
              {this.state.articles.map((e, index) => {
                return (
                  <div className='col-md-4' key={index}>
                    <NewsItem
                      title={e.title ? e.title.slice(0, 40) : ''}
                      description={e.description ? e.description.slice(0, 80) : ''}
                      url={e.urlToImage ? e.urlToImage : 'https://i.ytimg.com/vi/K4YHvq0nFuM/maxresdefault.jpg'}
                      author={e.author}
                      publishedAt={e.publishedAt}
                      newsUrl={e.url}
                      source={e.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default NewsComponent;
