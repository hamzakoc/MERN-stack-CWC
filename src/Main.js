import React from 'react';
import {Card, Button, CardImg, CardTitle, CardText, CardDeck,CardSubtitle, CardBody} from 'reactstrap';

const Main = () => {
  return (

   
    <CardDeck>
      <Card>
        <CardImg top width="100%" src="https://ellyelite.com/wp-content/uploads/2019/08/Familyphotoschicago_06.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>DO YOU NEED HELP?</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>Getting used to Canada will take time. You will have many problems to solve but we, 
            Canada Welcome Centre, will help you as much as we can to solve them. 
            Please fill in the following form for us to help you</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://cdn.gobankingrates.com/wp-content/uploads/2019/08/volunteer-donate-plant-trees-help-environment-iStock-834398248-1280x720.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>VOLUNTEER!</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>Becoming a volunteer, you are not just giving your time and skills; you get so much back in return. 
            Here are some of the benefits: Give back to your community Gain valuable experience by being 
            part of a team Meet people who share your interests Improve your leadership skills Share your 
            knowledge and life lessons…</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1094439874%2F960x0.jpg%3Ffit%3Dscale%20alt=" alt="Card image cap" />
        <CardBody>
          <CardTitle>DONATE!</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>If you would like to contribute us with your donations, please follow the link below;</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardDeck>
  
  );
};

export default Main;