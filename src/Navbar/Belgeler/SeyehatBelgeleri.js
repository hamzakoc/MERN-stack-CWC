import React, { Component } from 'react'

import { Container, Row, Col} from 'reactstrap';

export default class SeyehatBelgeleri extends Component {
    render() {
        return (
            <div>
                   <Container>
                    <Col>
                     <Row>
                        <div>
                         <h1>Seyehat Belgesi (Travel Document)</h1>
                         <p>Seyehat Belgesi, Kanada'da sınırları içerisinde olupda mahkeme sürecini tamamlamış koruma altındaki kişilere
                             seyehat hakkı tanıyan pasaporta benzer kimlik belgesidir </p> 

                             <h3>Başvuru aşamaları</h3>
                            <ul>
                                <li>Başvuru <a href="https://www.canada.ca/content/dam/ircc/migration/ircc/english/passport/forms/pdf/pptc190.pdf" target="_blank">formunu </a> doldurun</li>
                                <li> Gerekli tüm belgeleri toplayın ve fotoğraf çektirin
                                    <ul><li>Yasal statünüzü gösterir belge</li>
                                        <li>Kimliğinizi destekleyen bir belge.</li>
                                        <li>İki adet vesikalık fotoğraf.Detaylar için <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/photos.html" target="_blank"> tıklayınız</a></li>
                                        <li>Kanada vatandaşlığına başvurduysanız, reddetme mektubunun bir kopyası (varsa).</li>
                                        <li>Son beş yıl içerisinde size verilen geçerli bir seyahat belgesi (varsa).</li>
                                    </ul>
                                    
                                </li>
                                
                                <li>Kefil ve iki referans bulun</li>
                                <li>Başvuru ücretini ödeyin</li>
                                
                            </ul>
                            Detaylı bilgi için <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/travel-documents-non-canadians/apply.html" target="_blank"> tıklayınız</a>
                            </div>

                     </Row>
                    </Col>
                </Container>
                 </div>
        )
    }
}
