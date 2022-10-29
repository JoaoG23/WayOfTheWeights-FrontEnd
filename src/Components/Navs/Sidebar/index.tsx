import React from "react";
import { Link } from "react-router-dom";

import { linkes } from "./data/listLinks";

import { Container, Item } from "./styles";
const Sidebar: React.FC = () => {
  return (
    <Container>
      {linkes.map((item) => (
        <Item key={item.id}>
          <Link to={item.path}>
            <img src={item.icon} alt="gym"></img>
            <p>{item.descricao}</p>
          </Link>
        </Item>
      ))}
        <Item >
          <Link to={'/'}>
            <img src={'./assets/icons/sidebar-icons/logout.svg'} alt="gym"></img>
            <p>logout</p>
          </Link>
        </Item>
    </Container>
  );
};
export default Sidebar;
