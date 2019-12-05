import React, { Component } from 'react'
import { Container, Row, Col} from 'reactstrap';

export default class EvInterneti extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Col>
                     <Row>
                         <div>
                         <h1>Toronto'da Mevcut İnternet Seçenekleri </h1>
                         Toronto'da, ISS'ler birkaç modda hızlı internet sunar
                             <ul>
                                <li> Dijital Abone Hattı (DSL) - DSL, telefon hatlarını kullanır ve geleneksel çevirmeli 
                              bağlantılara göre nispeten daha hızlıdır.</li>
                              <li>Kablo İnternet - Kablo İnternet, DSL ile karşılaştırıldığında daha hızlı internet 
                              hızı sunar. Bunu diğer bağlantılardan ayıran şey, internet hızının bir mahalledeki 
                              bağlantıların geri kalanıyla paylaşılmasıdır.</li>
                              <li>Uydu İnternet - Bu tür bir bağlantı, alıcı uydularının yardımı ile çalışır. 
                                  Uzak yerlerde daha etkilidir. Ancak, asıl olumsuz yanı oldukça pahalı ve daha az hızlı olmasıdır.</li>
                              <li>Fiber Optik - Fiber Optik internet, optik ağ üzerinden çalışır. Şu anda, evler, işletmeler ve 
                                  kurumlar için en hızlı bağlantı türlerinden biridir.</li>
                              </ul>
                         
                        
                          <h3>Doğru İnternet Servis Sağlayıcısını Seçme</h3>   
                          Genel olarak, beklentileriniz sizin için doğru olan bağlantı türünü, veri miktarını ve hızı belirleyecektir.
                          <ul>
                          <li>Router ve Modem Kiralama veya Satın Alma </li> 
                          <li>Hız </li> 
                          <li>İhtiyaçlarınız Hakkında Açık Olun </li> 
                          <li>Katma Değerli Hizmetler </li>
                          </ul>  
                          gibi faktörler karar vermede yardımcı olabilir
                          <br></br><br></br>

                           <p><a href="https://www.findinternet.ca/en/toronto-ontario" target="_blank">Buradan </a>detaylı internet tarifelerine ulaşabilirsiniz</p>
                         </div>
                         
                     

                           

                        </Row>
                    </Col>
                </Container>
                 </div>
        )
    }
}
