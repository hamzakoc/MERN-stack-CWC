import React, { Component } from 'react'
import { Container, Row, Col, ButtonToolbar, Button} from 'reactstrap';

export default class Gonullu extends Component {
    render() {
        return (
            
                <Container>
                    <Col>
                     <Row>
                         <div>
                         <h1>Gönüllü Olun !</h1>
                         <br></br>
                         <p>Gönüllü olmak ile sadece zamanınızı ve 
                        becerilerinizi vermekle kalmayacaksınız; karşılığında çok daha fazlasını geri 
                        kazanacaksınız.</p>

                            <p>
                        <p><strong>Kazanağınız faydalardan bazıları</strong></p>
                        <ul>
                            <li>Toplulugunuza değer katın,</li>
                            <li>Bir ekibin parçası olarak değerli deneyim kazanın</li>
                            <li>İlgi alanlarınızı paylaşan insanlarla tanışın</li>
                            <li>Liderlik becerilerinizi geliştirin</li>
                            <li>Bilgi ve yaşam becerilerinizi topluluğun üyeleriyle paylaşın</li>
                         </ul>
                         </p><br></br><br></br>
                         <div>
                             <p>Aşağıdaki formu doldurarak gönüllü olabilirsiniz</p>
                                  <ButtonToolbar>
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfSFAL-7I-SxJM9XWtIOn4MTDO68x8kQ5Z-DbnelJKVJQuQQQ/viewform"
                                    target="_blank"><Button variant="primary" size="lg" active>
                                        Gönüllü Formu
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
