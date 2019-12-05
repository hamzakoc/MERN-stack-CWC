import React, { Component } from 'react'

import FormPage from './../../FormPage'
import { Container, Row, Col} from 'reactstrap';

export default class BizeUlasin extends Component {
    render() {
        return (
            <div>
               <Container>
                    <Col>
                     <Row>
                         
                         <h1>Bize Ulaşın</h1>
                         <br></br>
                         <p>Bizlere ileteceğiniz talep, şikayet, öneri ve istekleriniz için yardımcı olmaya hazırız.
                         Aşağıdaki formu doldurarak sorularınızı bize iletebilirsiniz. En kısa sürede size yanıt verilecektir.</p>
                    
                        </Row>
                    </Col>
                </Container>

                <FormPage/>
                    
            </div>
        )
    }
}
