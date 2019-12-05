import React, { Component } from 'react'

import { Container, Row, Col} from 'reactstrap';

export default class Sigortalar extends Component {
    render() {
        return (
            <div>
                   <Container>
                    <Col>
                     <Row>
                        <div>
                         <h1>Araba Sigortası ve Fiyatlar</h1>
                         <p>Araba Sigortası yeni gelenler için en masraflı kalemlerden birisidir. 
                             Yüzlerce sigorta firması arasından hangisinin size ve bütçenize uygun 
                             olduğunu bulmak oldukça zor işlerden birisidir. Ödemeler genelde aylık taksitler halinde yapılır. 
                             Sigorta fiyatları her yeni yılda bir önceki yılki kaza, ceza puanı ve trafik cezası 
                             gibi koşullara bakarak artır veya azalır.  </p> 

                             <h3>Araba sigortası rakamlarınızı düşürebilecek öneriler</h3>
                            <ul>
                                <li>G ehliyeti size sigortanızda G2’ye oranla yaklaşık %30 bir indirim sağlayacaktır.</li>
                                <li> Sürücü kurslarına katılıp sürücü sertifikası aldığınızda bu sertifika Service Ontario’da 
                                    kayıt altında tutulur ve bu kayıt araç aldığınızda  ile %20 den %30 lara varan indirimler sağlayabilir.</li>
                                <li>Pahalı olmayan ve düşük model araçlar almak ödeyecek sigorta rakamını etkiler.</li>
                                <li>Aracın gece kapalı ve kameralı sistemi bulunan bir otoparkta bırakılıyor olması fiyatı düşüren etkenlerdendir</li>
                                <li>Günlük ve yıllık yapacağınız kilometre fiyatları etkilemekte</li>
                                <li>Oturduğunuz semtteki suç oranıda sigortayı etkileyen başka bir faktördür</li>


                            </ul>
                           
                            </div>

                     </Row>
                    </Col>
                </Container>
                 </div>
        )
    }
}
