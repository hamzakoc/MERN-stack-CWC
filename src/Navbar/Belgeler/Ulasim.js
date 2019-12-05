import React, { Component } from 'react'
import { Container, Row, Col} from 'reactstrap';

export default class Ulasim extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Col>
                     <Row>
                         <div>
                         <h1>Toronto'da Ulaşım</h1>
                          <p>Büyük şehirde her yere yürüyerek ulaşmanız mümkün değildir fakat ulaşım ağı
                            oldukça gelişmiş olduğundan metro, otobüs , tramway gibi tüm toplu taşıma
                            alteratifleri ile taksi ve araba kiralama gibi seçenekleri de şehir içi ulaşımda
                            kullanabilirsiniz.<br></br><br></br>
                            Turistik bir şehri olduğundan günlük, haftalık, aylık biletler mevcuttur. Tüm
                            toplu taşıma için kullanabileceğiniz tek yön bilet ücreti 3.25 Kanada doları civarındadır.
                            Limitsiz günlük bilet satın alarak ulaşımda kolaylık  sağlayabilirsiniz.
                          </p>
                         
                        <p> Toronto metro haritası için<a href="http://www.ttc.ca/PDF/Maps/Subway_Map.pdf" target="_blank"> tıklayınız</a> </p> 
                        <p> Toronto otobüs rotaları için<a href="http://www.ttc.ca/Routes/Buses.jsp" target="_blank"> tıklayınız</a> </p> 
                        <p> Toronto tramvay rotoları için<a href="http://www.ttc.ca/Routes/Streetcars.jsp" target="_blank"> tıklayınız</a> </p> 
                        <br></br><br></br>
                          <h3>Havalimanından Şehir Merkezine Ulaşım</h3>   
                          <p>
                          Büyük bir şehir olan Toronto’da üç havalimanı bulunmakta fakat bunlardan
                            Pearson Uluslararası Havalimanı uluslararası olarak yoğun olanıdır. 
                            Toronto Pearson Uluslararası Havalimanı şehir merkezine yaklaşık 30 km mesafede ve
                            otobüs, havaalanı servisi ve taksi ile merkeze ulaşmak mümkündür. Airport Shuttle 
                            servisleri, halk otobüsleriyele buraya ulaşabilirsiniz.
                            havaalanında bulunan durak noktalarından hareketle merkeze ulaşabilirsiniz.
                            Ayrıca en ideal seçenek olarak taksiler ile de ulaşım sağlayabilirsiniz
                                                        
                        </p> 
                              
                         </div>
                        </Row>
                    </Col>
                </Container>
                </div>
        )
    }
}
