import Head from "next/head";
import React from "react";
import styled from "styled-components";
// import Footer from "../components/Footer";

const Home = () => {
  const myStyle = {
    backgroundColor: "grey",
    color: "orange",
    fontFamily: "sans-serif",
    fontSize: "34px",
    fontWeight: "bold",
  };
  const Section = styled.div`
    background-color: white;
    color: orange;
  `;
  return (
    <>
      <Head>
        <title>Home Page</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossorigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
          crossorigin="anonymous"
        ></script>
        <title>Homepage</title>
      </Head>
      Welcome
    </>
  );
};

export default Home;

