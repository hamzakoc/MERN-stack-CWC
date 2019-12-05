import React, { Component } from 'react'
import { Container, Row, Col} from 'reactstrap';

export default class BizeUlasin extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Col>
                    <br></br><br></br>
                    <h2>EV KIRALAMA VE GECICI KONAKLAMA</h2>
                    <p>Greater Toronto Area (GTA) (Büyük Toronto Bölgesi) da ev 
                        kiralamak için Emlakçılardan yada kendi kendinize dolaşarak ev
                        bakabilirsiniz. Ancak kendi kendinize daha çok Apartmanlardan 
                        ev sormanız mümkün olmaktadır. Ev sahipleri evlerini kiraya vermek
                        için genellikle emlakçıları aracı olarak tayin etmektedir.</p>
                    <h5>1-Emlakçı yolu ile ev kiralama.</h5>
                    <ol>
                        <li>Emlak işleri ile ilgilenen kişiler sizden ne tür bir ev istediğiniz 
                            sorarak uygun evlerin listesini size bildirirler.</li>
                        <li>Siz hoşunuza giden evleri emlakçıya bildirirsiniz.</li>
                        <li>Emlakçı sizin hoşunuza giden evlerden randevu alır.</li>
                        <li>Emlakçı size evleri gezdirir.</li>
                        <li>Beğendiğiniz evlere emlakçı teklif hazırlar.</li>
                        <li>Ev sahibi sizinle birlikte teklif verenler arasından kendisine uygun 
                            olan kişiyi seçerek emlakçıya sonucu bildirir.</li>
                        <li>Emlakçı tarafınıza sonucu bildirir.</li>
                    </ol>
                    <br></br>
                    <h6>Size yardımcı olabilecek emlakçılar (Emlakçılık işinin İngilizcesi 'Real Estate' olarak adlandırılmaktadır).</h6>
                    <ul>
                        Özgür Boyacıoğlu: 647-771-95 51 Email: ozgurboyacioglu@gmail.com<br></br>
                        Yusuf Çeltikoğlu: 416-605-61-64 Email: yceltik@hotmail.com<br></br>
                        Sebahattin Uyanık: 416-660-95-39 Email: sabouyanik@gmail.com
                    </ul>
                    <br></br><br></br>
                    <h5>2-Kendi kendinize ev bulmak.</h5>
                    <ul>
                       <li> <a href="https://www.kijiji.ca/b-house-rental/gta-greater-toronto-area/rent/k0c43l1700272?dc=true" 
                        target="_blank">Kijiji </a>
                        linkini tıklayarak GTA denilen bölgede ev bakabilirsiniz. Kijiji web sitesinde <br></br>
                        Konu: House Rental <br></br>
                        Bölge: Toronto (GTA)<br></br>
                         seçerek size sunulan evler arasından uygun olanlarının iletişim bilgileri ile ev sahibine ulaşıp evi görmek için randevu talep
                        edebilirsiniz. </li><br></br>

                        <li> <a href="https://www.viewit.ca/" target="_blank">www.viewit.ca</a> adresinden kiralık apartman dairelerine bakabilirsiniz. Apartman daireleri sahışlara aitse CONDO,
                        apartmanın tüm daireleri bir şirkete aitse APARTMAN olarak adlandırılmaktadır. Apartman daireleri CONDO lara göre daha
                        uygun fiyatlı olmaktadır. Ancak talep yoğun olması nedeni ile boş apartman dairesi kolaylıkla bulunmamaktadır.</li>

                        
                        </ul>
                    </Col>
                </Container>
            </div>
        )
    }
}
