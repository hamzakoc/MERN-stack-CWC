import React, { Component } from 'react'
import { Container, Row, Col} from 'reactstrap';
import FormPage from './../../FormPage'

export default class Yardim extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Col>
                     <Row>
                         
                         <h1>Yardıma İhtiyacınız mı var ?</h1>
                         <br></br>
                         <p>Kanada'ya alışmak zaman alabilir. Çözmeniz gereken birçok probleminiz olacak. Biz
                             Kanada Karşılama Merkezi olarak karşılaştığınız sorunları çözmek için elimizden geldiğince 
                    yardımcı olacağız.Size yardımcı olabilmemiz için aşağıdaki formu doldurunuz.</p>
                    
                        </Row>
                    </Col>
                    </Container>
                    <br></br><br></br><br></br>
                    <FormPage/>

                
            </div>
        )
    }
}
