import React from 'react';
import './css/navbarlink.css';


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

  import logo from './component/images/logo.jpeg'

// Anasayfa
import Hakkimizda from './Navbar/Anasayfa/Hakkimizda';
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
import SaglikHizmetleri from './Navbar/Saglik/SaglikHizmetleri';
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

import Section3 from './Section3'

import Section2 from './Section2'

import Section1 from './Section1'

import Admin from './Admin'



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
      paddingLeft: "30px"
        };
   
        const newsstyle = {
          color: "white",
          paddingTop: "30px"
            };

    return (

      <Router>
      <div>
        
        <Navbar className="navbarfixed navbar"   light expand="md">
          
          <NavbarBrand  style={navstyle} href="/"><img src={logo} width="40" height="40"></img></NavbarBrand>
          <NavbarBrand style={newsstyle} href="/admin"></NavbarBrand>
          

          {/* <Link to="/m"><div className="navwelcome">Canada Welcome Center   ||</div></Link> */}
          <NavbarToggler  onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav  navbar>              
              <UncontrolledDropdown inNavbar >
                <DropdownToggle style={navstyle} nav  >Anasayfa</DropdownToggle>
                  <DropdownMenu className="navbackcolor " onClick={this.toggle}  >
                        <DropdownItem> <Link to="/hakkimizda" className="navcolor " >Hakkımızda</Link></DropdownItem>
                        <DropdownItem><Link to="/yardim" className="navcolor">Yardıma ihtiyacınız mı var?</Link></DropdownItem>
                        <DropdownItem> <Link to="/gonullu" className="navcolor">Gönüllü Olun!</Link></DropdownItem>
                        <DropdownItem> <Link to="/katkida" className="navcolor">Katkıda Bulunun!</Link></DropdownItem>
                        <DropdownItem><Link to="/bizeulasın" className="navcolor">Bize Ulasın</Link></DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={navstyle} nav >Belgeler</DropdownToggle>
                  <DropdownMenu  className="navbackcolor" onClick={this.toggle}>
                        <DropdownItem> <Link to="/basvurusurecleri" className="navcolor">Başvuru Süreçleri </Link></DropdownItem>
                        <DropdownItem> <Link to="/hukukiyardim" className="navcolor">Hukuki Yardım</Link></DropdownItem>
                        <DropdownItem> <Link to="/sosyalyardim" className="navcolor">Sosyal Yardım</Link></DropdownItem>
                        <DropdownItem> <Link to="/ulasim" className="navcolor">Ulaşım</Link></DropdownItem>
                        <DropdownItem> <Link to="/telefonhatti" className="navcolor">Telefon Hattı</Link></DropdownItem>
                        <DropdownItem> <Link to="/evinterneti" className="navcolor">Ev İnterneti</Link></DropdownItem>
                        <DropdownItem> <Link to="/kutuphanekarti" className="navcolor">Kütüphane Kartı</Link></DropdownItem>
                        <DropdownItem> <Link to="/ehliyet" className="navcolor">Ehliyet</Link></DropdownItem>
                        <DropdownItem> <Link to="/bankahesaplari" className="navcolor">Banka Hesapları</Link></DropdownItem>
                        <DropdownItem> <Link to="/kredikartlari" className="navcolor">Kredi Kartları</Link></DropdownItem>
                        <DropdownItem> <Link to="/kiralamaalimsatim" className="navcolor">Kiralama, Alım-Satım</Link></DropdownItem>
                        <DropdownItem> <Link to="/sigortalar" className="navcolor">Sigortalar</Link></DropdownItem>
                        <DropdownItem> <Link to="/seyehatbelgeleri" className="navcolor">Seyehat Belgeleri</Link></DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={navstyle} nav >Gıda ve Alışveriş</DropdownToggle>
                  <DropdownMenu className="navbackcolor" onClick={this.toggle}>
                        <DropdownItem> <Link to="/yiyecekbanklari" className="navcolor">Yiyecek Bankaları </Link></DropdownItem>
                        <DropdownItem> <Link to="/ozelgidalar" className="navcolor">Özel Gıdalar</Link></DropdownItem>
                        <DropdownItem> <Link to="/marketler" className="navcolor">Marketler</Link></DropdownItem>
                        <DropdownItem> <Link to="/giysimagazalari" className="navcolor">Giysi Mağazaları</Link></DropdownItem>
                        <DropdownItem> <Link to="/alisveris" className="navcolor">Alış Veriş</Link></DropdownItem>
                        <DropdownItem> <Link to="/internettenalisveris" className="navcolor">İnternetten Alışveriş</Link></DropdownItem>                   
                  </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={navstyle} nav >Sağlık</DropdownToggle>
                  <DropdownMenu className="navbackcolor" onClick={this.toggle} >
                        <DropdownItem> <Link to="/saglikhizmetleri" className="navcolor">Sağlık Hizmetleri </Link></DropdownItem>
                        <DropdownItem> <Link to="/laboratuvarlar" className="navcolor">Laboratuvarlar </Link></DropdownItem>
                        <DropdownItem> <Link to="/ailedoktorlari" className="navcolor">Aile Doktorları </Link></DropdownItem>
                        <DropdownItem> <Link to="/dishekimleri" className="navcolor">Diş Hekimleri </Link></DropdownItem>
                        <DropdownItem> <Link to="/gidabakimi" className="navcolor">Gıda Bakımı </Link></DropdownItem>
                             
                  </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={navstyle} nav >Barınma</DropdownToggle>
                  <DropdownMenu className="navbackcolor" onClick={this.toggle}>
                         <DropdownItem> <Link to="/gecicibarinma" className="navcolor">Geçici barınma </Link></DropdownItem>
                        <DropdownItem> <Link to="/evkiralama" className="navcolor">Ev Kiralama </Link></DropdownItem>
                        <DropdownItem> <Link to="/evsatinalma" className="navcolor">Ev Satın Alma </Link></DropdownItem>
                        <DropdownItem> <Link to="/yurtlar" className="navcolor">Yurtlar </Link></DropdownItem>             
                  </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={navstyle} nav >İstihdam</DropdownToggle>
                  <DropdownMenu className="navbackcolor" onClick={this.toggle}>
                       <DropdownItem> <Link to="/isbulmakurumlari" className="navcolor">İş Bulma Kurumları </Link></DropdownItem> 
                       <DropdownItem> <Link to="/denklik" className="navcolor">WES, ICAS (Denklik) </Link></DropdownItem>             
                       <DropdownItem> <Link to="/sertifikalar" className="navcolor">Sertifikalar </Link></DropdownItem> 
                       <DropdownItem> <Link to="/kurslar" className="navcolor">Kurslar </Link></DropdownItem> 
                       <DropdownItem> <Link to="/ciraklik" className="navcolor">Çıraklık </Link></DropdownItem> 
                  </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={navstyle} nav >Eğitim</DropdownToggle>
                  <DropdownMenu className="navbackcolor" onClick={this.toggle}>
                       <DropdownItem> <Link to="/cocuklaricinokullar" className="navcolor">Çocuklar için Okullar</Link></DropdownItem> 
                       <DropdownItem> <Link to="/yetiskinlericinokullar" className="navcolor">Yetişkinler için Okullar </Link></DropdownItem>             
                       <DropdownItem> <Link to="/yazvekisokullari" className="navcolor">Yaz ve Kış Okulları </Link></DropdownItem> 
                      
                  </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={navstyle} nav >Kültür ve Sosyal Hayat</DropdownToggle>
                  <DropdownMenu className="navbackcolor" onClick={this.toggle}>
                       <DropdownItem> <Link to="/gonullucalismak" className="navcolor">Gönüllü Çalışmak </Link></DropdownItem> 
                       <DropdownItem> <Link to="/kanadakulturu" className="navcolor">Kanada Kültürü </Link></DropdownItem> 
                       <DropdownItem> <Link to="/gezilecekyerler" className="navcolor">Gezilecek Yerler </Link></DropdownItem> 
                       <DropdownItem> <Link to="/onemlikutsalmekanlar" className="navcolor">Önemli Kutsal Mekanlar </Link></DropdownItem> 
                       <DropdownItem> <Link to="/sporfaaliyetleri" className="navcolor">Spor Faaliyetleri </Link></DropdownItem> 
                       <DropdownItem> <Link to="/sanatfaaliyetleri" className="navcolor">Sanat Faaliyetleri </Link></DropdownItem> 
                       <DropdownItem> <Link to="/muzikfaaliyetleri" className="navcolor">Müzik Faaliyetleri </Link></DropdownItem> 
                  </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={navstyle} nav >Özel Bakım</DropdownToggle>
                  <DropdownMenu className="navbackcolor" onClick={this.toggle}>
                       <DropdownItem> <Link to="/devlethizmetleri"className="navcolor">Devlet Hizmetleri </Link></DropdownItem> 
                       <DropdownItem> <Link to="/ozelkuruluslar" className="navcolor">Özel Kuruluşlar</Link></DropdownItem> 
                       <DropdownItem> <Link to="/topluluklar" className="navcolor">Topluluklar</Link></DropdownItem> 
                       <DropdownItem> <Link to="/imkanlar" className="navcolor">İmkanlar</Link></DropdownItem> 
                       <DropdownItem> <Link to="/organizasyonlar" className="navcolor">Organizasyonlar</Link></DropdownItem> 
                       
                  </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>


        <Switch>
           <Route path="/" exact ><Section1/><Section3/><Section2/></Route>
           
           <Route path="/admin"><Admin/></Route>
           

          {/* Anasayfa */}
          <Route path="/hakkimizda"><Hakkimizda/></Route>
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
          <Route path="/saglikhizmetleri"><SaglikHizmetleri/></Route>
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