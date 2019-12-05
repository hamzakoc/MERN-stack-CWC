import React, { Component } from 'react'
import { Container, Row, Col} from 'reactstrap';

export default class YiyecekBankalari extends Component {
    render() {
        return (
            <div>
            <Container>
            <Col>
             <Row>
                 <div>
                 <h1>Gıda ve Yiyecek Bankaları</h1>
                 <br></br>
                 <p>Gıda Bankaları, Kanada'nın her il ve bölgesindede, her ay 800.000'den fazla kişiye 
                      3.000'in üzerinde kuruluşla gıda ile ilgili benzersiz bir yardım ağı düzenlemektedir. 
                     Temel, güvenli ve kaliteli gıdalar paylaşıp, kendi kendine yeterliliği geliştirmeye yardımcı 
                     sosyal programlar sunuyor ve kimsenin  aç kalmayacağı bir Kanada yaratmaya yardımcı olacak politika 
                     değişikliklerini savunmaktadır.</p>
                     <p>Gıda Bankaları, il gıda bankası dernekleri, yerel gıda bankaları ve diğer yardım 
                         kuruluşları ile ortaklaşa çalışan ulusal bir gıda toplama ve dağıtım sistemi olan Ulusal 
                         Gıda Paylaşım Sistemini (NFSS) geliştirmişlerdir. Dağıtılan yiyecekler arasında makarna, 
                         çorba , taze ve dondurulmuş meyve ve sebzeler, süt ve yumurta ürünleri, kahvaltılık ürünler, 
                         meyve suyu ve diğer içecekler, kraker ve çerezler bulunmaktadır. NFSS ayrıca çocuk bezi, 
                         bulaşık sabunu ve banyo dokusu gibi gıda dışı maddeleri de dağıtmaktadır.</p>
                         <h3>Gıda bankası yardımından faydalanmak için</h3>
                         <p>Genel olarak, gıda bankasının hizmet verdiği alanda yaşamalı ve belirli uygunluk şartlarını 
                             yerine getirmelisiniz. Bazı gıda bankaları önceden randevu almanızı ister. Bu nedenle, gitmeden 
                             önce telefon etmeniz gerekebilir.</p>
                             <h3>Gıda bankası randevusu için yanınınızda bulundurmanız gerekenler</h3>
                         <ul>
                             <li>Evinizde yaşayan kişilerin bilgileri (varsa)</li>
                             <li>Adres bilgilerinizi (varsa)</li>
                             <li>Gelir ve gider bilgileriniz(varsa</li>
                         </ul>
                 </div>
                </Row>
            </Col>
        </Container>
            </div>
        )
    }
}
