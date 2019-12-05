import React, { Component } from 'react'
import { Container, Row, Col, ButtonToolbar, Button} from 'reactstrap';

export default class Katkida extends Component {
    render() {
        return (
            
                <Container>
                    <Col>
                     <Row>
                         <div>
                         <h1>Katkıda Bulunun !</h1>
                         <br></br>   
                        <p><strong>Erzak Yardımı Yapın</strong></p>
                        <p>İhtiyaç Sahibi Ailelere Erzak Yardımı Yapın.... </p><br></br>

                        <p><strong>Ramazan Kolisi Yardımı Yapın</strong></p>
                        <p>Ramazanda sizin desteklerinizle ihtiyaç sahibi ailelere koli dağıtımı yapıyoruz... </p><br></br>


                        <p><strong>Sağlık Yardımı Yapın</strong></p>
                        <p>Hasta çocuklara sağlıklarını geri verin ve destek olun </p><br></br>


                        <p><strong>Eğitim Yardımı Yapın</strong></p>
                        <p>Çocukların eğitimleri ülkemizin geleceği için önemlidir. Sizde çocukların eğitim ihtiyaçlarına katkıda bulunun </p><br></br><br></br>

                         <div>
                             <p>Aşağıdaki linki kullanarak bağışta bulunabilirsiniz</p>
                                  <ButtonToolbar>
                                    <a href="https://www.paypal.me/nlrfCanadaWelcomeCen?locale.x=en_US"
                                    target="_blank"><Button variant="primary" size="lg" active>
                                        Bağış Yapın
                                    </Button></a>
                                    </ButtonToolbar>
                            </div>
                         </div>
                         </Row>
                    </Col>
                </Container>
               
           
        )
    }
}
