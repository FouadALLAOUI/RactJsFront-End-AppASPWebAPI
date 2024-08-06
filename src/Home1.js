import React, {Component} from "react";
import { variables } from "./Variables";

export class Home1 extends Component {

    constructor(props){
        super(props);
        this.state={
            message : []
        }
    }

    refreshList(){
        fetch("http://localhost:9000/")
        .then(response=>response.json())
        .then(data=>{
            this.setState({message:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }
    



       

    render(){
        const { message } = this.state;
        console.log(message)
        return(            
          <div>
            
            <h3>This is the Home1 Page that is linked with NodeJs Server</h3>

          </div>


        );
    }
}