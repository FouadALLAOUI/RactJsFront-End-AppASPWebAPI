import React, {Component} from "react";
import { variables } from "./Variables";

export class Home extends Component {

    constructor(props){
        super(props);
        this.state={
            contacts : []
        }
    }

    refreshList(){
        fetch(variables.API_URL+"Contacts")
        .then(response=>response.json())
        .then(data=>{
            this.setState({contacts:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }
    



       

    render(){
        const { contacts } = this.state;
        console.log(contacts)
        return(
            
            <div>
            <h3>This is the Home Page to List All Contacts</h3>
            <div>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>FullName</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map(contact => (
                    <tr key={contact.id}>
                      <td>{contact.id}</td>
                      <td>{contact.fullName}</td>
                      <td>{contact.email}</td>
                      <td>{contact.phone}</td>
                      <td>{contact.address}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>


        );
    }
}