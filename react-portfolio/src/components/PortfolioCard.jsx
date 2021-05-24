import React from "react";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
// import Image from 'react-bootstrap/Image'











const PortfolioCard = () => {
 
  return(
    <Container fluid>

        <Row>
          <Col>
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="logo.svg" />
                  <Card.Body>
                      <Card.Title>Beer Nuts</Card.Title>
                          <Card.Text>
                          This project gives a user the opportunity to discover a new brewery of their liking, with the opportunity to add a place to their favorites or to a wishlist, all of which is tracked through a profile page the user sets up.
                          </Card.Text>
                                  <Button href="https://github.com/wylie-u/BeerNuts" variant="primary">View GitHub Repo</Button>
                                  <Button href="https://shrouded-reaches-33204.herokuapp.com/" variant="primary">View Live Application</Button>
                    </Card.Body>
          </Card>


          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                      <Card.Title>Read Me Generator</Card.Title>
                          <Card.Text>
                                My project is designed to help coders write professional read me files with ease.
                          </Card.Text>
                                  <Button href="https://github.com/paxton44/Read-Me-Generator-" variant="primary">View GitHub Repo</Button>
                                  <Button href="https://paxton44.github.io/Read-Me-Generator-/" variant="primary">View Live Application</Button>
                    </Card.Body>
          </Card>
          </Col>
          
          <Col>
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                      <Card.Title>Boozy Playlists</Card.Title>
                          <Card.Text>
                          This project gives a user the opportunity to combine a delicious cocktail with a fun music playlist! The user will have the option to select a cocktail from a dropdown, which will then give them the ingredients need and the directs on how to make the drink, while also loading a playlist for them to listen to.
                          </Card.Text>
                                  <Button href="https://github.com/paxton44/teamAwesome" variant="primary">View GitHub Repo</Button>
                                  <Button href="https://paxton44.github.io/teamAwesome/ " variant="primary">View Live Application</Button>
                    </Card.Body>
          </Card>



          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                      <Card.Title>Password Generator</Card.Title>
                          <Card.Text>
                                This homework assignment required the use of arrays, functions, conditional statements, and the application of a for loop. I first started by constructing arrays for uppercase, lowercase, numerical, and special characters. Then I grouped all four arrays into an empty array named allCharacters. I then modified the writePassword function. This function runs on the parameters of password length being between 8-128 characters. It has conditional statements that prompt and require the user to have at least 8 characters in their password, whether or not they want uppercase, lowercase, special, or numerical characters. It then generates the random password using the for loop to use characters from each array based on the user prompts.
                          </Card.Text>
                                  <Button href="https://github.com/paxton44/week-3-hw-fixed"variant="primary">View GitHub Repo</Button>
                                  <Button href="https://paxton44.github.io/week-3-hw-fixed/" variant="primary">View Live Application</Button>
                    </Card.Body>
          </Card>
          
          </Col>
        </Row>

      

    </Container>
  );



};



export default PortfolioCard;