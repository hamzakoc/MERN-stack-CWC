import React, { Component } from 'react'
import { Container, Row, Col} from 'reactstrap';

export default class KiralamaAlimSatim extends Component {
    render() {
        return (
            <div>
                   <Container>
                    <Col>
                     <Row>
                        <div>
                         <h1>Ev Kiralama veya Satın Alma</h1>
                         <p>Ev kiralayan veya satın alan kişiler emlak danışmanına komisyon 
                             ödemezler bu komisyon ev sahibi/satıcı tarafından ödenir.Kiralanan ve 
                             satılan, konut ve iş yerleri veritabanlarına listelenmektedir.
                             Bu nedenle her emlak danışmanının ayrı tüm kiralık ve satılık ulaşabilmektedir.
                             Kiralama ve satın alma işlemleri emlakçıları, alıcı ve satıcıyı, ev sahibi ve kiracıların 
                             haklarını kanunlar çerçevesinde koruyan bir alım satım sözleşmesi ile yürütülür.</p>
                          <h4>Daire veya ev kiralarken</h4>   
                            <ul>
                                <li>Kredi geçmişini gösteren Kredi Raporu</li>
                                <li> İş yerinden temin edilen ve gelirini gösteren iş mektubu,</li>
                                <li>Kişisel ve profesyonel referanslar</li>

                            </ul>
                            <p>gibi  belgeler ev sahipleri tarfından istenebilir</p>

                            <h1>Araç Kiralama veya Satın Alma</h1>
                            <p>1-Nakit :  Nakit olarak ödemelerde daha uygun şartlarda araçlar bulunabilir.<br></br>
                                2-Banka Kredisi : Bir çok kişi araba için banka kredisi çekerek bir kısmını yada tamamını ödeyerek satın alıyor.
                                 Aylık taksitler ile geri ödeme şartları bulunmaktadır.<br></br>
                                3-Bayi Araç Kredisi : Araç satan bayiler veya galeriler çözüm ortakları üzerinden kredi imkanı sunabilmektedir<br></br>
                                4-Kiralama : Kiralama yöntemi ile araç satın alabilirsiniz. Bu kira süresi genelde 4 yıldır. Aracın servis 
                                bakımlarını ve giderlerini siz ödersiniz. Kiralama süresi dolduğunda aracı geriye iade edilir yada belli bir 
                                ücret karşılığı arabayı satın alabilirsiniz.</p>
                            </div>

                     </Row>
                    </Col>
                </Container>
                 </div>
        )
    }
}
