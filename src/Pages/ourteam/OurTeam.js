import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, div } from "react-bootstrap";
import Team from "../Team/Team";
// import "./OurTeam.css";

const OurTeam = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios
      .get("https://enigmatic-cliffs-59575.herokuapp.com/team")
      .then(function (response) {
        setTeams(response.data);
      });
  }, []);

  return (
    // team-area start
    <div className="bg-red-300 py-5 mb-10">
      <Container>
        <div className="section-top">
          <h2 className="text-6xl font-bold mb-3">Our trip organizer</h2>
          <p className="text-2xl font-medium">
            We have the best team in the whole world that organizes the best{" "}
            <br />
            trips for our clients and make their journeys life remembering.
          </p>
        </div>
        <div className="grid gap-5 grid-cols-2 ml-20 my-10 ">
          {teams.map((team) => (
            <Team key={team._id} team={team}></Team>
          ))}
        </div>
      </Container>
    </div>
    // team-area end
  );
};

export default OurTeam;
