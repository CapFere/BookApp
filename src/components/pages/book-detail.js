import React,{Component} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import BookDetail from '../book-detail/book-detail';
import axios from 'axios';
import MyLoader from './loader';

class BookDetailPage extends Component{
    constructor(props){
        super(props);
        this.state={
            book:{},
            isLoading:true
        };
    }
    componentDidMount(){
        axios.get('https://www.googleapis.com/books/v1/volumes/'+this.props.bookID)
        .then(response=>{
            this.setState({
                book:response.data,
                isLoading:false
            });
        })
    }
    render(){
        return(
            <div>
                <Header/>
                {this.state.isLoading?
                    <MyLoader/>
                    :
                    <BookDetail book={this.state.book}/>
                }
                
                <Footer/>
            </div>  
        );
    }
}
export default BookDetailPage;
