import React, { Component } from 'react'
import { Container, Col} from 'reactstrap';
export default class Kurslar extends Component {
    render() {
        return (
            <div>
            
            <br></br><br></br>
                <Container>
                      <Col>
                      <h2>DİL KURSU</h2>
                      <p>Toronto’da sarı kağıdı aldıktan sonra devlet tarafından ücretsiz sağlanan İngilizce kursları vardır. 
                          Bu kurslar şu şekilde sıralandıralabilir;</p>
                          <ol>
                              <li>“Community Center”larda Verilen İngilizce Kursları: Hearing/mahkemeyi geçene kadar 
                                  “community center”larda bu kurs imkanından yararlanılabilmektedir.</li>
                                <li>“Welcome Centerlar”da Verilen İngilizce Kursları: Mahkemeden sonra  
                                    “community center”a ilave olarak “welcome center” larda “link” adı verilen 
                                    İngilizce kurslarından da yararlanılabilir. “Link” kurslarında öğretmen tarafından 
                                    ciddi takip yapılmaktadır. Örneğin 5 gün üst üste devamsızlık durumunda öğrenci kaydı 
                                    otomatik olarak silinmektedir.</li>
                                <li>Kiliseler Tarafından Verilen İngilizce Kursları:</li>
                                <li>Büyük Kütüphanelerde “Conversation Club” altında Verilen İngilizce Konuşma/Pratik Kursları: 
                                    Örneğin Richmand Hill Library’de bu tip konuşma kursları yapılmaktadır.</li>
                          </ol>
                          <h5>Bu kurslara kayıt olmak için</h5>
                          <ol>
                                <li>Sarı kağıt alındıktan sonra “İngilizce seviye tespit sınavı” yapılan merkezlerden randevu alınır.</li>
                                <li>Bu merkezde speaking(konuşma), listening (dinleme), reading (okuma) ve writing (yazma) başlıkları 
                                    altında İngilizce seviyeniz tespit edilir. Bu sınavda sadece writing ve reading 
                                    bölümleri test şeklinde yapılmakta; speaking ve listening seviyesi ise yetkili ile 
                                    karşılıklı konuşularak belirlenmektedir. Şu anda yoğunluktan dolayı bazı sınav merkezleri 
                                    3-4 hafta sonrasına randevu vermektedirler. 
                                    Randevu almadan da sınav merkezlerine gidilip, gelmeyen kişilerin yerine sınava girebilirler.</li>
                                <li>Sınav sonucu hemen belli olmaktadır.</li>
                                <li>Bu seviye tespit belgesi ile yukarıda belirtilen kurs merkezlerine kayıt yaptırılır. 
                                    Yoğunluktan dolayı kayıt almama gibi durumlar söz konusu olabilir, ancak ısrarlı bir şekilde kurs 
                                    merkezlerine müracaat yapılmalı ve takip edilmelidir. Gelemeyen bir kursiyer olabilmekte ve kontenjan açılabilmektedir</li>
                          </ol>

                          <p>İngilizce seviyenizin artması önem arz etmektedir. Örneğin vatandaşlığa hak kazanma ve iş bulmada 
                              seviyenizin 5- 6 civarında olması gerekmektedir. Kurs merkezlerinde seviye yükseltme sınavları her 
                              konu bittikten sonra yapılmaktadır. Ve her bir bölümden en az 6 ve üzeri sınav olmanız gerekmektedir. 
                              Yani okuma(reading), yazma(writing), konuşma(speaking) ve dinleme(listening) bölümlerinin her birinden en az altı sınav olmanız 
                              gerekmektedir. Welcome Centerlar İngilizce seviyeniz en az 4 
                              olunca, sizin yerinize iş başvuruları yapmaktadır</p>
                      </Col>
                </Container>            
             </div>
        )
    }
}
