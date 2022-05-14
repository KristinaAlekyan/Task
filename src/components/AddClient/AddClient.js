import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./addClient.css";

class AddClient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clntFname: "",
            clntLname: "",
            clntDomicl: "",
            clntNation: "",
            clntBirthday: "",
            clntEmails:
                        {
                            emailPerson: "",
                            emailPersonSecond:"",
                            emailWork:"",
                            emailWorkSecond:""
                        },
            clntPhones:"" 
        };
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state)
    }

    onFirstNameChange = clntFname => {
        this.setState({clntFname: clntFname});
    }
    onLastNameChange = clntLname => {
        this.setState({clntLname: clntLname});
    }
    onDomiclChange = clntDomicl => {
        this.setState({clntDomicl: clntDomicl});
    }
    onNationChange = clntNation => {
        this.setState({clntNation: clntNation});
    }
    onBirthdayChange = clntBirthday => {
        this.setState({clntBirthday: clntBirthday});
    }

    onEmailsChange = (email) => {
        //const select = document.getElementById('emailSelect');

        this.setState({
            clntEmails:{
                emailPerson : email
            }
        });
    }
    onPhoneChange = clntPhones => {
        this.setState({clntPhones: clntPhones});
    }

    render() {
        return (
                <div className="addClient"> 
                    <Form >
                    <Form.Group size="lg" controlId="clntFname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={this.state.clntFname}
                            onChange={(e) => this.onFirstNameChange(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="clntLname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={this.state.clntLname}
                            onChange={(e) => this.onLastNameChange(e.target.value)}
                        />
                    </Form.Group>            
                    <Form.Group size="lg" controlId="clntBirthday">
                        <Form.Label>Birthday date</Form.Label>
                        <Form.Control
                            autoFocus
                            type="date"
                            value={this.state.clntBirthday}
                            onChange={(e) => this.onBirthdayChange(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="domicledCountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={this.state.clntDomicl}
                            onChange={(e) => this.onDomiclChange(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="clntNation">
                        <Form.Label>Nationality </Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={this.state.clntNation}
                            onChange={(e) => this.onNationChange(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group size="lg" controlId="clntEmails">                
                        <Form.Label>Email</Form.Label>
                            <select id = "emailSelect">
                            <option value="Primary">Primary</option>
                                <option value="Secondary">Secondary</option>
                                <option value="Corporate">Corporate</option>
                            </select>
                            <button>+</button>
                            <button>-</button>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={this.state.clntEmails.emailPerson}
                            onChange={(e) => this.onEmailsChange(e.target.value)}
                        />
                        
                    </Form.Group>
                    <Form.Group size="lg" controlId="clntPhones">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={this.state.clntPhones}
                            onChange={(e) => this.onPhoneChange(e.target.value)}
                        />
                    </Form.Group>

                    <Button onClick = {this.handleSubmit}  size="lg" type="submit" >
                    Add
                    </Button>
                </Form>
                </div>
        );
    }
}
export default AddClient