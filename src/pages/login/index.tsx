import { Link } from "react-router-dom";
import backgroundLogin from "../../assets/team_login_background.svg";
import {
  Container,
  FormContainer,
  LeftContainer,
  RightContainer,
} from "./styles";

export default function Login() {
  const handleLogin = () => {};

  return (
    <Container>
      <LeftContainer>
        <img
          src={backgroundLogin}
          alt="image of background with group peoples in computers"
        />
      </LeftContainer>

      <RightContainer>
        <h1>LOGIN</h1>

        <FormContainer>
          <input type="text" placeholder="E-mail: " />
          <input type="text" placeholder="Senha: " />

          <Link to="/home">
            <button onClick={handleLogin}>ENTRAR</button>
          </Link>
        </FormContainer>
      </RightContainer>
    </Container>
  );
}
