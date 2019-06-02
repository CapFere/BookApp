import React,{Component} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import BookSection from '../book-section/book-section';
import axios from 'axios';
import MyLoader from './loader';
class BookSectionPage extends Component{
    constructor(props){
        super(props);
        this.state={
            books:[],
            isLoading:true,
            error:false,
            apiKey:'&key=AIzaSyBXi7_S9aeCMk-IoIHQPuZDeVdL-_XrNyw'
        };
    }
    componentDidMount(){
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+this.props.catagoryName+this.state.apiKey)
        .then(response=>{
            this.setState({
                books:response.data.items,
                isLoading:false
            });
        })
    }
    componentDidUpdate(prevProps){
        if(prevProps.catagoryName!==this.props.catagoryName){
            this.setState({
                isLoading:true
            });
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+this.props.catagoryName+this.state.apiKey)
            .then(response=>{
                this.setState({
                    books:response.data.items,
                    isLoading:false
            });
        })
        }
    }
    render(){
        return(
            <div>
                <Header/>
                {this.state.isLoading?
                   <div className="container">
                       <MyLoader/>
                   </div>
                    :
                    <BookSection title={this.props.catagoryName} book={this.state.books}/>
                }
                <Footer/>
            </div>  
        );
    }
}
BookSectionPage.defaultProps={
    catagoryName:'HTML'
}
export default BookSectionPage;
