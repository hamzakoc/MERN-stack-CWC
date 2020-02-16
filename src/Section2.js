import React from 'react';
import {Card, Button, CardImg, CardTitle, CardText, CardDeck,CardSubtitle, CardBody} from 'reactstrap';
import { BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";


// import Yardim from './Navbar/Anasayfa/Yardim';
// import Gonullu from './Navbar/Anasayfa/Gonullu';
// import Katkida from './Navbar/Anasayfa/Katkida';
import yardim from './component/images/help.jpg'
import gonullu from './component/images/volunter.jpg'
import donation from './component/images/donation.jpg'

import './css/sections.css';

const Section2 = () => {
  return (
<Router>
    <CardDeck className="section2-background">
      <Card className="section2-card">
        <CardImg top width="100%" src={yardim} alt="Card image cap" />
        <CardBody>
          <CardTitle>Yardıma İhtiyacınız mı var?</CardTitle>
          <CardText>Kanada'ya alışmak zaman alabilir. Çözmeniz gereken birçok probleminiz olacak. 
            Biz Kanada Karşılama Merkezi olarak karşılaştığınız sorunları çözmek için elimizden
             geldiğince yardımcı olacağız.Daha fazla bilgi için </CardText>
            <a href="/Yardim"><Button className="btn btn-info">Tıklayınız</Button></a>
        </CardBody>
      </Card>
      <Card className="section2-card">
        
        <CardImg top width="100%" src={gonullu} alt="Card image cap" />
        <CardBody>
          <CardTitle>Gönüllü Olun!</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>
            Gönüllü olmak ile sadece zamanınızı ve becerilerinizi vermekle kalmayacaksınız; karşılığında çok daha 
            fazlasını geri kazanacaksınız. Yeni arkadaş edinmenize, yeni beceriler 
            kazamanıza, kariyerinizi ilerletmenize ve hatta daha mutlu ve daha sağlıklı 
            hissetmenize yardımcı olabilir. Daha fazla bilgi için</CardText>
            <a href="/Gonullu"><Button className="btn btn-info">Tıklayınız</Button></a>
        </CardBody>
      </Card>
      <Card className="section2-card">
        <CardImg top width="100%" src={donation} alt="Card image cap" />
        <CardBody>
          <CardTitle>Bağış Yapın!</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>Bize bağışlarınızla katkıda bulunmak istiyorsanız, lütfen aşağıdaki bağlantıyı </CardText>
          <a href="/Katkida"><Button className="btn btn-info">Tıklayınız</Button></a>
        </CardBody>
      </Card>
    </CardDeck>
    
    
    


    </Router>
  
  );
};

export default Section2;