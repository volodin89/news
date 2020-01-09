import React, {Component} from "react";

export default class Search extends Component{

    render(){
        return(
            <div>
                <form onClick={this.props.gettingNews}>
                    <input type="text"/>
                    <button>Найти</button>
                </form>
            </div>
        )
    }

}