import React, {Component} from 'react';
import {Modal, Button, Tab, Row, Col, Nav,Accordion, Card, Form} from 'react-bootstrap';
import addQuestionModal from '../AddQuestionModal';
import AddQuestionModal from '../AddQuestionModal';

export default class EditCardModal extends Component {
   
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    
    

    this.state={
      editCardModalShow: false,
      addQuestion:this.props.addQuestion,
      companyName: this.props.card.companyName,
      jobTitle: this.props.card.jobTitle,
      salary: this.props.card.salary,
      jobPostURL: this.props.card.jobTitle,
      note: this.props.card.note,
      companyNote: this.props.card.companyNote,
      interviewQuestions: this.props.card.interviewQuestions,
      modalShow : false,
    }
  
  }

 

  onChangeHandler(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    const card = { cards :[{
      companyName: this.state.companyName,
      jobTitle: this.state.jobTitle,
      salary: this.state.salary,
      jobPostURL: this.state.jobPostURL,
      note: this.state.note,
      companyNote: this.state.companyNote
    }]}

    this.props.editCard(card);
    // axios.patch('http://localhost:5000/cards/add/5dc7786edce42e2fa6b761f3',card)
    // .then(res => console.log(res.data))
    // .catch(e => console.log(e));

  
    console.log('new card  added:')
    console.log(card);
    
  }

  
  
  render(){

    console.log('interviewQuestions',this.state.interviewQuestions)

    return (
         <Modal
           {...this.props}
           size="lg"
           aria-labelledby="contained-modal-title-vcenter"
           centered
         >
           <form onSubmit = {this.onSubmit}>
           <Modal.Header closeButton>
             <Modal.Title id="contained-modal-title-vcenter">
             {this.state.companyName}'s job application
             </Modal.Title>
           </Modal.Header>
           <Modal.Body>
        
             <Tab.Container id="left-tabs-example" defaultActiveKey="JobInfo">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                        <Nav.Link eventKey="JobInfo">Job Info</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="CompanyInfo">Company Info</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="Notes">Notes</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="InterviewPractice">Interview Practice</Nav.Link>
                        </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="JobInfo">
                        <div className="form-group row">
                          <div className ="col-10">
                            <input type="text" className="form-control" 
                              name="companyName" 
                              id="companyName" 
                              placeholder="Enter comapany's name" 
                              required
                              value = {this.state.companyName}
                              onChange = {this.onChangeHandler}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className ="col-10">
                            <input type="text" className="form-control"
                              name="jobTitle" 
                              id="jobTitle" 
                              placeholder="Enter Job Title" 
                              required
                              value = {this.state.jobTitle}
                              onChange = {this.onChangeHandler}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className ="col-10">
                            <input type="text" className="form-control" 
                              name="salary" 
                              id="salary" 
                              placeholder="Enter salary" 
                              value = {this.state.salary}
                              onChange = {this.onChangeHandler}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className ="col-10">
                            <input type="text" className="form-control" 
                              name="jobPostURL" 
                              id="jobPostURL" 
                              placeholder="Enter job post URL" 
                              value = {this.state.jobPostURL}
                              onChange = {this.onChangeHandler}
                            />
                          </div>
                        </div>
                        <div className='row'>
                          <p><a target ="blank" href={this.state.jobPostURL}>Accessing job post link</a></p>
                        </div>
                        <p>Notes</p>
                          <div className="form-group row"> 
                            <div className ="col-10">
                              <textarea rows="10" cols="80"  className="form-control" 
                                name="note" 
                                id="note" 
                                placeholder="Enter job annotation" 
                                value = {this.state.note}
                                onChange = {this.onChangeHandler}
                              />
                             </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="CompanyInfo">
                            <p>Insert {this.state.companyName}'s key info summary</p>
                            <div className="form-group row"> 
                              <div className ="col-10">
                                <textarea rows="10" cols="80"  className="form-control" 
                                  name="companyNote" 
                                  id="companyNote" 
                                  placeholder="Insert company's key info summary" 
                                  value = {this.state.companyNote}
                                  onChange = {this.onChangeHandler}
                                />
                              </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Notes">
                          <p>Notes</p>
                          <div className="form-group row"> 
                            <div className ="col-10">
                              <textarea rows="10" cols="80"  className="form-control" 
                                name="note" 
                                id="note" 
                                placeholder="Enter job annotation" 
                                value = {this.state.note}
                                onChange = {this.onChangeHandler}
                              />
                             </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="InterviewPractice">
                          <Button size="sm" block onClick={()=>{this.setState({modalShow: true}); console.log('AddQuestion button clicked', this.modalShow)}}> Add a question</Button>
                          <AddQuestionModal
                             show = {this.state.modalShow}
                             onHide= {()=>this.setState({modalShow:false})}
                             card = {this.props.data}
                             addQuestion={this.props.addQuestion}
                        />
                           <ul>
                           <>
                            {this.state.interviewQuestions.map((item, index)=>
                            
                              <Accordion  key={index}>
                              <Card>
                                <Accordion.Toggle as={Card.Header} eventKey={index}>
                                {item.question}
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={index}>
                                  <Card.Body>{item.answer}</Card.Body>
                                </Accordion.Collapse>
                              </Card>
                              
                            </Accordion>
                            
                            )}

                        </>
                           </ul>
                           
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
              
            
           </Modal.Body>
           <Modal.Footer>
             <Button type="submit" onClick={this.props.onHide}>Update job</Button>
           </Modal.Footer>
           </form>
         </Modal>
    );
  }
  
}