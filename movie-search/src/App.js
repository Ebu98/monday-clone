import React, { useState, useEffect } from "react";
import "./App.css";

import axios from "axios";
import { DATA } from "./Components/Data";
import {
  MainContainer,
  Container,
  BarChartContainer,
  Number,
  BlackLine,
  MakeBar,
} from "./Components/styles";

const App = () => {
  // const [datas, setDatas] = useState({});

  useEffect(() => {
    const headers = {
      "X-RapidAPI-Key": "0b2f90b265mshf733fd530fe8481p158484jsndb0b7065bed3",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    };

    axios
      .get("https://imdb8.p.rapidapi.com/actors/get-awards", {
        headers,
        params: { nconst: "nm0001667" },
      })
      .then((response) => {
        console.log(response.data);
      });
    // .then((response) => setDatas(response.data));
  }, []);
  return (
    <Container>
      <MainContainer>
        {DATA.map(({ colors, year }, i) => {
          return (
            <BarChartContainer key={i}>
              <Number color={colors[1]}>{year} </Number>
              <MakeBar height={year * 2} colors={colors} />
            </BarChartContainer>
          );
        })}
      </MainContainer>
      <BlackLine />
    </Container>
  );
};

export default App;
