import React from "react";
import Card from "react-bootstrap/Card";
import { players } from "../utilis/Players";

function Player({ name, team, nationality, jersey_num, age, image }) {
  return (
    <div
      style={{
        gap: "3rem",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Card
        style={{
          border: "6px solid black",
          width: "35rem",
          gap: "3rem",
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        <Card.Img variant="top" src={image} style={{ width: "550px" }} />
        <Card.Body>
          <h1>Name: {name}</h1>
          <Card.Title>Team: {team}</Card.Title>
          <Card.Text>Nationality: {nationality}</Card.Text>
          <h3>Age: {age}</h3>
          <Card.Title>Jersey No: {jersey_num}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Player;
