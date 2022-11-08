import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";

export const ContainerModalLogin = styled.div`
  max-width: 380px;
  width: 100%;
  border-radius: 8px;
  padding: 1.5rem;
  background-color: var(--color-grey-1);
  position: relative;
  animation: fadeInRight 1.5s;
`;

export const FormModalLogin = styled.form`
  padding: 1rem 0;
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  

  h2 {
    letter-spacing: 2rem;
    margin-right: calc(2rem * -1);
  }

  span {
    color: var(--color-grey-3);
    text-decoration: underline;
    cursor: pointer;
  }

  .horizontalBar {
    width: 140%;
    height: 2px;
    background-color: var(--color-primary);
  }
`;

export const BackButton = styled(ArrowBackIcon)`
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 20px;
  color: var(--color-grey-2);
  cursor: pointer;
`;

export const CloseButton = styled(CloseIcon)`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 20px;
  color: var(--color-grey-2);
  cursor: pointer;
`;
