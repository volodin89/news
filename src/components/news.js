import React, {Component} from "react";

export default class News extends Component{
    constructor(props){
        super(props);

        this.state={
            article: []
        }
        console.log('news1', this.state);
        
    }

    render(){
        console.log('news2', this.state);    
        return(
            <div>
                
            </div>
        )
    }

}