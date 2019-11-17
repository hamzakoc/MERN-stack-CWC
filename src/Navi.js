import React from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

// Anasayfa
import Hakkimizda from './Navbar/Anasayfa/Hakkimizda';
import YeniIcerikler from './Navbar/Anasayfa/YeniIcerikler';
import Yardim from './Navbar/Anasayfa/Yardim';
import Gonullu from './Navbar/Anasayfa/Gonullu';
import Katkida from './Navbar/Anasayfa/Katkida';
import BizeUlasin from './Navbar/Anasayfa/BizeUlasin';

// Belgeler
import BasvuruSurecleri from './Navbar/Belgeler/BasvuruSurecleri';
import HukukiYardim from './Navbar/Belgeler/HukukiYardim';
import SosyalYardim from './Navbar/Belgeler/SosyalYardim';
import Ulasim from './Navbar/Belgeler/Ulasim';
import TelefonHatti from './Navbar/Belgeler/TelefonHatti';
import EvInterneti from './Navbar/Belgeler/EvInterneti';
import KutuphaneKarti from './Navbar/Belgeler/KutuphaneKarti';
import Ehliyet from './Navbar/Belgeler/Ehliyet';
import BankaHesaplari from './Navbar/Belgeler/BankaHesaplari';
import KrediKartlari from './Navbar/Belgeler/KrediKartlari';
import KiralamaAlimSatim from './Navbar/Belgeler/KiralamaAlimSatim';
import Sigortalar from './Navbar/Belgeler/Sigortalar';
import SeyehatBelgeleri from './Navbar/Belgeler/SeyehatBelgeleri';

// Gıda ve Alisveris
import YiyecekBankalari from './Navbar/GidaveAlisveris/YiyecekBankalari';
import OzelGidalar from './Navbar/GidaveAlisveris/OzelGidalar';
import Marketler from './Navbar/GidaveAlisveris/Marketler';
import GiysiMagazalari from './Navbar/GidaveAlisveris/GiysiMagazalari';
import AlisVeris from './Navbar/GidaveAlisveris/AlisVeris';
import InternettenAlisveris from './Navbar/GidaveAlisveris/InternettenAlisveris';

// Sağlık
import SaglikKuruluslari from './Navbar/Saglik/SaglikKuruluslari';
import Laboratuvarlar from './Navbar/Saglik/Laboratuvarlar';
import AileDoktorlari from './Navbar/Saglik/AileDoktorlari';
import DisHekimleri from './Navbar/Saglik/DisHekimleri';
import GidaBakimi from './Navbar/Saglik/GidaBakimi';

// Barınma
import GeciciBarinma from './Navbar/Barinma/GeciciBarinma';
import EvKiralama from './Navbar/Barinma/EvKiralama';
import EvSatinAlma from './Navbar/Barinma/EvSatinAlma';
import Yurtlar from './Navbar/Barinma/Yurtlar';

// İstihdam
import IsBulmaKurumlari from './Navbar/Istihdam/IsBulmaKurumlari';
import Denklik from './Navbar/Istihdam/Denklik';
import Sertifikalar from './Navbar/Istihdam/Sertifikalar';
import Kurslar from './Navbar/Istihdam/Kurslar';
import Ciraklik from './Navbar/Istihdam/Ciraklik';

// Eğitim
import CocuklarIcinOkullar from './Navbar/Egitim/CocuklarIcinOkullar';
import YetiskinlerIcinOkullar from './Navbar/Egitim/YetiskinlerIcinOkullar';
import YazveKisOkullari from './Navbar/Egitim/YazveKisOkullari';
import Kurslar1 from './Navbar/Egitim/Kurslar1';

// Kültür ve Sosyal Hayat
import GonulluCalismak from './Navbar/KulturveSosyalHayat/GonulluCalismak';
import KanadaKulturu from './Navbar/KulturveSosyalHayat/KanadaKulturu';
import GezilecekYerler from './Navbar/KulturveSosyalHayat/GezilecekYerler';
import OnemliKutsalMekanlar from './Navbar/KulturveSosyalHayat/OnemliKutsalMekanlar';
import SporFaaliyetleri from './Navbar/KulturveSosyalHayat/SporFaaliyetleri';
import SanatFaaliyetleri from './Navbar/KulturveSosyalHayat/SanatFaaliyetleri';
import MuzikFaaliyetleri from './Navbar/KulturveSosyalHayat/MuzikFaaliyetleri';

// Özel Bakım
import DevletHizmetleri from './Navbar/OzelBakim/DevletHizmetleri';
import OzelKuruluslar from './Navbar/OzelBakim/OzelKuruluslar';
import Topluluklar from './Navbar/OzelBakim/Topluluklar';
import Imkanlar from './Navbar/OzelBakim/Imkanlar';
import Organizasyonlar from './Navbar/OzelBakim/Organizasyonlar';


import Main from './Main'

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle=()=>{
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    const navstyle = {
      color: "white",
      
    
    };
    const navcolor = {
      color: "black",
      textDecoration: 'none'
    
    };


    return (

      <Router>
      <div>
        <Navbar color="dark"  light expand="md">
          <NavbarBrand  style={navstyle} href="/Main"><img src="https://cndwlcmcntr.com//wp-content/uploads/2019/06/logo-uncut-1024x650.jpeg" width="40" height="40"></img></NavbarBrand>
          <NavbarToggler  onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav  navbar>              
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={navstyle} nav caret href="/Main">Anasayfa</DropdownToggle>
                  <DropdownMenu >
                        <DropdownItem> <Link to="/hakkimizda" style={navcolor}>Hakkımızda</Link></DropdownItem>
                        <DropdownItem> <Link to="/yeniIcerikler" style={navcolor}>Yeni İçerikler</Link></DropdownItem>
                        <DropdownItem><Link to="/yardim" style={navcolor}>Yardıma ihtiyacınız mı var?</Link></DropdownItem>
                        <DropdownItem> <Link to="/gonullu" style={navcolor}>Gönüllü Olun!</Link></DropdownItem>
                        <DropdownItem> <Link to="/katkida" style={navcolor}>Katkıda Bulunun!</Link></DropdownItem>
                        <DropdownItem><Link to="/bizeulasın" style={navcolor}>Bize Ulasın</Link></DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={navstyle} nav caret>Belgeler</DropdownToggle>
                  <DropdownMenu >
                        <DropdownItem> <Link to="/basvurusurecleri" style={navcolor}>Başvuru Süreçleri </Link></DropdownItem>
                        <DropdownItem> <Link to="/hukukiyardim" style={navcolor}>Hukuki Yardım</Link></DropdownItem>
                        <DropdownItem> <Link to="/sosyalyardim" style={navcolor}>Sosyal Yardım</Link></DropdownItem>
                        <DropdownItem> <Link to="/ulasim" style={navcolor}>Ulaşım</Link></DropdownItem>
                        <DropdownItem> <Link to="/telefonhatti" style={navcolor}>Telefon Hattı</Link></DropdownItem>
                        <DropdownItem> <Link to="/evinterneti" style={navcolor}>Ev İnterneti</Link></DropdownItem>
                        <DropdownItem> <Link to="/kutuphanekarti" style={navcolor}>Kütüphane Kartı</Link></DropdownItem>
                        <DropdownItem> <Link to="/ehliyet" style={navcolor}>Ehliyet</Link></DropdownItem>
                        <DropdownItem> <Link to="/bankahesaplari" style={navcolor}>Banka Hesapları</Link></DropdownItem>
                        <DropdownItem> <Link to="/kredikartlari" style={navcolor}>Kredi Kartları</Link></DropdownItem>
                        <DropdownItem> <Link to="/kiralamaalimsatim" style={navcolor}>Kiralama, Alım-Satım</Link></DropdownItem>
                        <DropdownItem> <Link to="/sigortalar" style={navcolor}>Sigortalar</Link></DropdownItem>
                        <DropdownItem> <Link to="/seyehatbelgeleri" style={navcolor}>Seyehat Belgeleri</Link></DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={navstyle} nav caret>Gıda ve Alışveriş</DropdownToggle>
                  <DropdownMenu >
                        <DropdownItem> <Link to="/yiyecekbanklari" style={navcolor}>Yiyecek Bankaları </Link></DropdownItem>
                        <DropdownItem> <Link to="/ozelgidalar" style={navcolor}>Özel Gıdalar</Link></DropdownItem>
                        <DropdownItem> <Link to="/marketler" style={navcolor}>Marketler</Link></DropdownItem>
                        <DropdownItem> <Link to="/giysimagazalari" style={navcolor}>Giysi Mağazaları</Link></DropdownItem>
                        <DropdownItem> <Link to="/alisveris" style={navcolor}>Alış Veriş</Link></DropdownItem>
                        <DropdownItem> <Link to="/internettenalisveris" style={navcolor}>İnternetten Alışveriş</Link></DropdownItem>                   
                  </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={navstyle} nav caret>Sağlık</DropdownToggle>
                  <DropdownMenu >
                        <DropdownItem> <Link to="/saglikkuruluslari" style={navcolor}>Sağlık Kuruluşları </Link></DropdownItem>
                        <DropdownItem> <Link to="/laboratuvarlar" style={navcolor}>Laboratuvarlar </Link></DropdownItem>
                        <DropdownItem> <Link to="/ailedoktorlari" style={navcolor}>Aile Doktorları </Link></DropdownItem>
                        <DropdownItem> <Link to="/dishekimleri" style={navcolor}>Diş Hekimleri </Link></DropdownItem>
                        <DropdownItem> <Link to="/gidabakimi" style={navcolor}>Gıda Bakımı </Link></DropdownItem>
                        <DropdownItem> <Link to="/gecicibarinma" style={navcolor}>Geçici barınma </Link></DropdownItem>
                        <DropdownItem> <Link to="/evkiralama" style={navcolor}>Ev Kiralama </Link></DropdownItem>
                        <DropdownItem> <Link to="/evsatinalma" style={navcolor}>Ev Satın Alma </Link></DropdownItem>
                        <DropdownItem> <Link to="/yurtlar" style={navcolor}>Yurtlar </Link></DropdownItem>             
                  </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={navstyle} nav caret>Barınma</DropdownToggle>
                  <DropdownMenu >
                         <DropdownItem> <Link to="/gecicibarinma" style={navcolor}>Geçici barınma </Link></DropdownItem>
                        <DropdownItem> <Link to="/evkiralama" style={navcolor}>Ev Kiralama </Link></DropdownItem>
                        <DropdownItem> <Link to="/evsatinalma" style={navcolor}>Ev Satın Alma </Link></DropdownItem>
                        <DropdownItem> <Link to="/yurtlar" style={navcolor}>Yurtlar </Link></DropdownItem>             
                  </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={navstyle} nav caret>İstihdam</DropdownToggle>
                  <DropdownMenu >
                       <DropdownItem> <Link to="/isbulmakurumlari" style={navcolor}>İş Bulma Kurumları </Link></DropdownItem> 
                       <DropdownItem> <Link to="/denklik" style={navcolor}>WES, ICAS (Denklik) </Link></DropdownItem>             
                       <DropdownItem> <Link to="/sertifikalar" style={navcolor}>Sertifikalar </Link></DropdownItem> 
                       <DropdownItem> <Link to="/kurslar" style={navcolor}>Kurslar </Link></DropdownItem> 
                       <DropdownItem> <Link to="/ciraklik" style={navcolor}>Çıraklık </Link></DropdownItem> 
                  </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={navstyle} nav caret>Eğitim</DropdownToggle>
                  <DropdownMenu >
                       <DropdownItem> <Link to="/cocuklaricinokullar" style={navcolor}>Çocuklar için Okullar</Link></DropdownItem> 
                       <DropdownItem> <Link to="/yetiskinlericinokullar" style={navcolor}>Yetişkinler için Okullar </Link></DropdownItem>             
                       <DropdownItem> <Link to="/yazvekisokullari" style={navcolor}>Yaz ve Kış Okulları </Link></DropdownItem> 
                       <DropdownItem> <Link to="/kurslar" style={navcolor}>Kurslar </Link></DropdownItem> 
                  </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={navstyle} nav caret>Kültür ve Sosyal Hayat</DropdownToggle>
                  <DropdownMenu >
                       <DropdownItem> <Link to="/gonullucalismak" style={navcolor}>Gönüllü Çalışmak </Link></DropdownItem> 
                       <DropdownItem> <Link to="/kanadakulturu" style={navcolor}>Kanada Kültürü </Link></DropdownItem> 
                       <DropdownItem> <Link to="/gezilecekyerler" style={navcolor}>Gezilecek Yerler </Link></DropdownItem> 
                       <DropdownItem> <Link to="/onemlikutsalmekanlar" style={navcolor}>Önemli Kutsal Mekanlar </Link></DropdownItem> 
                       <DropdownItem> <Link to="/sporfaaliyetleri" style={navcolor}>Spor Faaliyetleri </Link></DropdownItem> 
                       <DropdownItem> <Link to="/sanatfaaliyetleri" style={navcolor}>Sanat Faaliyetleri </Link></DropdownItem> 
                       <DropdownItem> <Link to="/muzikfaaliyetleri" style={navcolor}>Müzik Faaliyetleri </Link></DropdownItem> 
                  </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={navstyle} nav caret>Özel Bakım</DropdownToggle>
                  <DropdownMenu >
                       <DropdownItem> <Link to="/devlethizmetleri" style={navcolor}>Devlet Hizmetleri </Link></DropdownItem> 
                       <DropdownItem> <Link to="/ozelkuruluslar" style={navcolor}>Özel Kuruluşlar</Link></DropdownItem> 
                       <DropdownItem> <Link to="/topluluklar" style={navcolor}>Topluluklar</Link></DropdownItem> 
                       <DropdownItem> <Link to="/imkanlar" style={navcolor}>İmkanlar</Link></DropdownItem> 
                       <DropdownItem> <Link to="/organizasyonlar" style={navcolor}>Organizasyonlar</Link></DropdownItem> 
                       
                  </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>


        <Switch>
        <Route path="/Main"><Main/></Route>

          {/* Anasayfa */}
          <Route path="/hakkimizda"><Hakkimizda/></Route>
          <Route path="/yeniIcerikler"><YeniIcerikler/></Route>
          <Route path="/yardim"><Yardim/></Route>
          <Route path="/gonullu"><Gonullu/></Route>
          <Route path="/katkida"><Katkida/></Route>
          <Route path="/bizeulasın"><BizeUlasin/></Route>

          {/* Belgeler */}
          <Route path="/basvurusurecleri"><BasvuruSurecleri/></Route>
          <Route path="/hukukiyardim"><HukukiYardim/></Route>
          <Route path="/sosyalyardim"><SosyalYardim/></Route>
          <Route path="/ulasim"><Ulasim/></Route>
          <Route path="/telefonhatti"><TelefonHatti/></Route>
          <Route path="/evinterneti"><EvInterneti/></Route>
          <Route path="/kutuphanekarti"><KutuphaneKarti/></Route>
          <Route path="/ehliyet"><Ehliyet/></Route>
          <Route path="/bankahesaplari"><BankaHesaplari/></Route>
          <Route path="/kredikartlari"><KrediKartlari/></Route>
          <Route path="/kiralamaalimsatim"><KiralamaAlimSatim/></Route>
          <Route path="/sigortalar"><Sigortalar/></Route>
          <Route path="/seyehatbelgeleri"><SeyehatBelgeleri/></Route>

          {/* Gıda ve Alışveriş */}
          <Route path="/yiyecekbanklari"><YiyecekBankalari/></Route>
          <Route path="/ozelgidalar"><OzelGidalar/></Route>
          <Route path="/marketler"><Marketler/></Route>
          <Route path="/giysimagazalari"><GiysiMagazalari/></Route>
          <Route path="/alisveris"><AlisVeris/></Route>
          <Route path="/internettenalisveris"><InternettenAlisveris/></Route>

          {/* Sağlık */}
          <Route path="/saglikkuruluslari"><SaglikKuruluslari/></Route>
          <Route path="/laboratuvarlar"><Laboratuvarlar/></Route>
          <Route path="/ailedoktorlari"><AileDoktorlari/></Route>
          <Route path="/dishekimleri"><DisHekimleri/></Route>
          <Route path="/gidabakimi"><GidaBakimi/></Route>

          {/* Barınma */}
          <Route path="/gecicibarinma"><GeciciBarinma/></Route>
          <Route path="/evkiralama"><EvKiralama/></Route>
          <Route path="/evsatinalma"><EvSatinAlma/></Route>
          <Route path="/yurtlar"><Yurtlar/></Route>
         
         {/* İstihdam */}
          <Route path="/isbulmakurumlari"><IsBulmaKurumlari/></Route>
          <Route path="/denklik"><Denklik/></Route>
          <Route path="/sertifikalar"><Sertifikalar/></Route>
          <Route path="/kurslar"><Kurslar/></Route>
          <Route path="/ciraklik"><Ciraklik/></Route>

          {/* Eğitim */}
          <Route path="/cocuklaricinokullar"><CocuklarIcinOkullar/></Route>
          <Route path="/yetiskinlericinokullar"><YetiskinlerIcinOkullar/></Route>
           <Route path="/yazvekisokullari"><YazveKisOkullari/></Route>
          <Route path="/kurslar"><Kurslar1/></Route>

          {/* Kültür ve Sosyal Hayat */}
          <Route path="/gonullucalismak"><GonulluCalismak/></Route>
          <Route path="/kanadakulturu"><KanadaKulturu/></Route>
          <Route path="/gezilecekyerler"><GezilecekYerler/></Route>
          <Route path="/onemlikutsalmekanlar"><OnemliKutsalMekanlar/></Route>
          <Route path="/sporfaaliyetleri"><SporFaaliyetleri/></Route>
          <Route path="/sanatfaaliyetleri"><SanatFaaliyetleri/></Route>
          <Route path="/muzikfaaliyetleri"><MuzikFaaliyetleri/></Route>
          
          {/* Özel Bakım */}
          <Route path="/devlethizmetleri"><DevletHizmetleri/></Route>
          <Route path="/ozelkuruluslar"><OzelKuruluslar/></Route>
          <Route path="/topluluklar"><Topluluklar/></Route>
          <Route path="/imkanlar"><Imkanlar/></Route>
          <Route path="/organizasyonlar"><Organizasyonlar/></Route>
          
        </Switch>
      
          </div>
      </Router>
    );
  }
}