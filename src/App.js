import styled from 'styled-components';
import './App.css';
import Tabs from './components/Tabs/Tabs';
import RoutesPath from './routes';

const AppStyle = styled.div`
padding: 0 6rem;
.App_header {
  margin: 1rem 0 0.8rem 0;
}
.App_header_title {
  font-family: Poppins;
  font-size: 48px;
  font-weight: 900;
  line-height: 72px;
  letter-spacing: 1px;
  text-align: left;
}
`;

function App() {
  return (
    <AppStyle>
      <header className="App_header">
      <label className="App_header_title">Spacious</label>
      </header>
      <Tabs />
      <RoutesPath />
    </AppStyle>
  );
}

export default App;
