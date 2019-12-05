import React, { Component } from 'react'
import { Container, Row, Col} from 'reactstrap';

export default class TelefonHatti extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Col>
                    
                        <h1>TELEFON HATTI</h1>
                        <p>Toronto/Kanada’ya gelindiğinde yapılması gereken ivedi işlemlerden birisi de Kanada telefon hattı almaktır. Zira
                            yapacağınız tüm başvurularda iletişim numarası olarak bu hattı vereceksiniz. ABD’den gelenler belli süre ile ABD hattını
                            Kanada’da kullanabilmektedir. Ancak yaklaşık 3 ay sonra ABD telefon şirketleri bu servislerini sona erdirmektedir. Bu
                            nedenle en kısa sürede yerel bir hat alınmasında fayda vardır.</p>
                        <h5>Kanada’da cep telefonu iletişimini sağlayan şirketler hizmet kalitelerine 
                            göre 3 sınıfta gruplandırılır. Cep telefonu hattınızı
                            alırken buna göre karar vermeliniz:</h5>
                            <p><br></br>
                             <strong>Yüksek Kalite:</strong> Kanada’nın en büyük şürketleri olan <strong>Rogers, Bell ve Tellus</strong> tarafından sağlanan hatlardır. Paketin içeriğine
                        göre değişmekle birlikte, bunlar diğer kalitedeki hatlara göre çekim kalitesi olarak çok daha üstün ancak ücret olarak da
                        daha pahalıdır.
                        <br></br><br></br>
                        <strong> Orta Kalite:</strong> Yukarıdaki üç şirketin alt yapısı kullanan alt şirketler tarafından sağlanan 
                        hatlardır. <strong>Fido </strong>(Rogers’ın alt yapısını
                        kullanıyor),<strong> Koodo Mobile </strong>(Tellus’ın alt yapısını kullanıyor) ve <strong>Virgin Mobile</strong> 
                        (Bell’in alt yapısını kullanıyor). Paket içeriğine
                        göre değişmekle birlikte, aylık ücretleri 55-65 CAD civarındadır. Çekim kaliteleri ilk gruptakine yakın ancak onlardan
                        ucuzdurlar. Bir alt gruptaki hatlara göre çok daha kalitelidir.
                        <br></br><br></br>
                        <strong>Düşük Kalite: </strong>Bu gruptaki hatlar şu şirketler tarafından sağlanmaktadır: 
                        <strong>Chatr</strong> (Rogers’ın alt yapısını kullanıyor) ve
                        <strong> Freedom.</strong> Bu gruptaki hatlar diğer ilk 2 gruba göre bariz olarak ucuzdur (Aylık 35-45 CAD). Ancak çekim ve konuşma
                        kalitesi de buna göre düşmektedir.
                        <br></br><br></br>
                        Bu kalite gruplardından hangisini seçeceğiniz bütçenize ve konuşma kalite tercihlerinize göre değişecektir. Örneğin
                        “şehrin her yerinde telefon hattım çeksin, her yerden kesintisiz konuşayım” diyorsanız 3. gruptaki hatlar sizi memnun
                        etmeyecektir. Ancak “ Kanada’da bir irtibat telefonum olsun, her zaman konuşma kalitemin uygun olması önemli değil”
                        diyorsanız da 1 ve 2. kalite sizin için lüks ve ilave maliyet anlamına gelecektir.
                        <br></br><br></br>
                       Aynı grupta yer alan hatlar arasında çok büyük fiyat farklılığı yoktur. Ancak gruplar arasında fiyat farklılıkları mevcuttur.
                        <br></br><br></br>
                        Telefon hattı almak için herhangi bir kimlik kartı (pasaport, ehliyet, sarı kapıt vb.) yeterlidir. Aylık ödemeler için vadesiz
                        hesabınıza veya kredi kartına talimat verebilirsiniz. Faturayı bankadan nakit yapmak da diğer bir seçenektir.
                            </p>

                    </Col>
                </Container>
            </div>
        )
    }
}
