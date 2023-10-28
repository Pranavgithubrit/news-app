import React,{Component} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
export class News extends Component{
    static defaultProps={
        country:'in',
        pageSize:5,
        category:'general',
    }
    static propTypes={
        country:PropTypes.string,
        pageSize: PropTypes.number,
        category:PropTypes.string
    }
//     articles=[
//         {
// "source":{"id":	null, "name":	"iMore"},	

// author:	"james.bentley@futurenet.com (James Bentley)",
// title:	"iMore’s ultimate back to school guide",
// description: "If you're looking to back to school with Apple, here's everything you should know.",
// url: "https://www.imore.com/apple/imores-ultimate-back-to-school-guide",
// urlToImage: "https://cdn.mos.cms.futurecdn.net/EwNZBn59Z7ai77zHKYbSsc-1200-80.jpg",
// publishedAt:"2023-08-17T15:45:03Z",
// content:	"Going back to school can be an intimidating prospect for students around the world. If you want to go back to school with Apple products, you want to make sure you know what you’re in for.\r\nFrom the … [+7659 chars]"
//         },
//         {
//             source:	{"id":"engadget","name":"Engadget"},

// author:	"Kris Holt",
// title:"Acura's ZDX EV has an estimated 325 miles of range and starts at around $60,000",
// description:"Honda\r\n is looking to make waves in the electric vehicle market. The first model in the automaker's major 2024 push into the space is the Acura ZDX. It expects to obtain an EPA range rating of 325 miles on a single charge for the base A-Spec single-motor conf…",
// url:"https://www.engadget.com/acuras-zdx-ev-has-an-estimated-325-miles-of-range-and-starts-at-around-60000-160023372.html",
// urlToImage:"https://s.yimg.com/uu/api/res/1.2/N5ELBmNPPZaC.MrYarB8Kw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-08/2d3ab840-3d13-11ee-bcef-dab10f0e1c37.cf.jpg",
// publishedAt:"2023-08-17T16:00:23Z",
// content:"Honda\r\n is looking to make waves in the electric vehicle market. The first model in the automaker's major 2024 push into the space is the Acura ZDX. It expects to obtain an EPA range rating of 325 mi… [+2335 chars]"

//         },
//     {
//         source:{"id":null,"name":"MacRumors"},

// author:	"Juli Clover",
// title:"Apple Highlights Apple Card Customer Satisfaction Ranking",
// description:'Apple Card is the "Best Co-Branded Credit Card for Customer Satisfaction with No Annual Fee" in the J.D. Power 2023 U.S. Credit Card Satisfaction Study, Apple announced today. This is the third year in a row that Apple and Goldman Sachs have taken the number …',
// url:"https://www.macrumors.com/2023/08/17/apple-card-customer-satisfaction-ranking/",
// urlToImage:"https://images.macrumors.com/t/m0k-ugYMy_RfVa-NGIhZfMWSUEk=/1600x/article-new/2023/06/Apple-Card-Balance.jpeg",
// publishedAt:"2023-08-17T20:17:09Z",
// content:'Apple Card is the "Best Co-Branded Credit Card for Customer Satisfaction with No Annual Fee" in the J.D. Power 2023 U.S. Credit Card Satisfaction Study, Apple announced today. This is the third year … [+1380 chars]'
//         },
//         {
//             source:{id:null,name:"9to5Mac"},

// author:"Ben Lovejoy",
// title:"X roundup: Trump disclosures serve as warning; ads next to alt-right posts; scientists leave",
// description:"The name of the social network may have changed, but the, uh, entertainment continues in the latest X roundup. This includes the full extent of the Trump disclosures serving as a warning about the perils of unencrypted messaging services … \n\n\n\n more…",
// url:"https://9to5mac.com/2023/08/17/x-roundup/",
// urlToImage:"https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/08/X-roundup.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
// publishedAt:"2023-08-17T12:38:13Z",
// content:"The name of the social network may have changed, but the, uh, entertainment continues in the latest X roundup. This includes the full extent of the Trump disclosures serving as a warning about the pe… [+3565 chars]"

//         }
// ]
    constructor()
    {
        super();
        this.state={
            articles: [],
            loading:false,
            page:1,
            
        }
    }
    handleNextClick=async()=>
{
    if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))
    {
      
    }
    else{
        let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=82147be946b147c5916518015090e692&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        {this.setState({loading:true})}
        let data=await fetch(url);
        let parsedData= await data.json()
        
this.setState({
    page:this.state.page+1,
    articles:parsedData.articles,
    loading:false
})
    }
}
handlePrevClick=async()=>
{
    console.log("Previous")
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=82147be946b147c5916518015090e692&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    {this.setState({loading:true})}    
    let data=await fetch(url);
        let parsedData= await data.json()
        
this.setState({
    page:this.state.page-1,
    articles:parsedData.articles,
    loading:false
})

}

    async componentDidMount()
    {
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=82147be946b147c5916518015090e692&page=1&pageSize=${this.props.pageSize}`;
        let data=await fetch(url);
        let parsedData= await data.json()
        console.log(parsedData)
        this.setState({
            articles:parsedData.articles,
            totalResults:parsedData.totalResults
        })
    }
    render()
    {
        return(
            <div className="container my-4 text-center"style={{margin:'40px 0px'}}>
                <h2>Top Headlines</h2>
                {this.state.loading&&<Spinner/>}
            <div>
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0,37):" "} description={element.description?element.description.slice(0,82):" "} author={element.author} date={element.publishedAt}imageUrl={element.urlToImage} newsUrl={element.url} className="card-img-top" alt="..."/>
                    </div>
                })}
                    
                
                </div>
                <div className="container d-flex justify-content-between">
                 <button className="btn btn-dark mx-3 my-3" disabled={this.state.page<=1} onClick={this.handlePrevClick}>&larr; Previous</button>
                 <button className="btn btn-dark mx-3 my-3" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
            </div>
        )
    }
}
export default News