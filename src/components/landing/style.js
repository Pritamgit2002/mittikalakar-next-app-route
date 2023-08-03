import styled from "styled-components";
import { motion } from "framer-motion";


export const Header = styled.div`
  height: 32vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: white;
`;


export const Title = styled(motion.h1)`
  font-family: var(--font-primary);
  color: black;
  font-size: 8em;
  width: 100%;
  z-index: 1;
  margin: 0;
  white-space: nowrap;
  margin-top: auto;
  transition: all 1s linear;
`;
