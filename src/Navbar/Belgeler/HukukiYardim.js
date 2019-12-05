import React, { Component } from 'react'
import { Container, Row, Col} from 'reactstrap';


export default class HukukiYardim extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Col>
                     <Row>
                         <div>
                         <h1>Hukuki Yardım</h1>
                         <br></br>
                         <p>Gelir seviyesi düşük bireyler için Ontario eyaletinin hukuksal yardım imkanları bulunmaktadır.</p>
                         <h3>Nasıl başvuru yapabirilirim ?</h3>
                         <p> 416-979-1446 veya 1-800-668‑8258 numaraları ile Pazartesiden Cumaya, 08.00 - 17.00 saatleri 
                             arasında ücretsiz olarak arayabilirsiniz.
                              </p>
                              <p> Daha fazla bilgi için<a href="https://www.legalaid.on.ca/" target="_blank"> Legal Aid</a> </p> 

                          <h3>Hukuki Yardım çeşitlerinden bazıları</h3>   
                          <ul>
                              <li>Ceza hukuku sorunları</li>
                              <li>Aile içi şiddet</li>
                              <li>Aile yasal sorunları</li>
                              <li>Ruh sağlığı yasal konuları</li>
                              <li>Mülteci ve göçmenlik yasal konuları</li>
                              <li>Yasal klinikler</li>
                              
                        </ul> 
                              
                         </div>
                        </Row>
                    </Col>
                </Container>
            </div>
        )
    }
}
