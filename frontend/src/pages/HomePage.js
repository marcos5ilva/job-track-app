import React from 'react'
import {Row, Col, Image} from 'react-bootstrap'

const HomePage = ()=>(
    <React.Fragment>
         <h1>Your job search in control</h1>
         
         <Row > 
             <Col lg={12} xs={12}>
                <Image src="/img/jobnoteLogo.png" fluid responsive className ="imgLogo"/>   
            </Col> 
         </Row>
    </React.Fragment>
   
)

export default HomePage;

