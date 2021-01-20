import styled from 'styled-components';
import img from './images/bigsur-bg.jpg';
import airdrop from './images/icons/airdrop.svg';
import left from './images/icons/left.svg';
import right from './images/icons/right.svg';
import share from './images/icons/share.svg';
import more from './images/icons/more.svg';
import box from './images/icons/box.svg';
import search from './images/icons/search.svg';

import { Airdrop } from './icons';

import { ReactComponent as AirdropIcon } from './images/icons/airdrop.svg';
import { ReactComponent as LeftIcon } from './images/icons/left.svg';
import { ReactComponent as RightIcon } from './images/icons/right.svg';

const StyledIcon = styled(AirdropIcon)`
  path {
    fill: ${(props) => (props.selected ? 'black' : 'gray')};
    fill: ${(props) => (props.selected ? 'black' : 'gray')};
  }
`;

const StyledLeft = styled(LeftIcon)`
  border-radius: 4px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: background-color 0.05s ease;
  }
  path {
    stroke: ${(props) => (props.selected ? 'black' : 'gray')};
  }
`;

const StyledRight = styled(RightIcon)`
  border-radius: 4px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: background-color 0.05s ease;
  }
  path {
    stroke: ${(props) => (props.selected ? 'black' : 'gray')};
  }
`;

const Container = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'SF Pro';
`;

const Finder = styled.div`
  box-shadow: 0px 30px 70px rgba(0, 0, 0, 0.5);

  width: 700px;
  height: 425px;
  /* background: white; */
  display: flex;
`;

const Sidebar = styled.div`
  height: 100%;
  width: 165px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.7);
  color: #333;
  border-radius: 12px 0 0 12px;

  p {
    line-height: 11px;
    font-size: 11px;
    color: #696969;
    text-align: left;
    margin-top: 30px;
    padding: 0px;
    font-weight: 700;
  }
`;

const Inner = styled.div`
  padding: 24px;
`;

const Controls = styled.div`
  display: flex;
`;

const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;
  background: ${(props) => (props.colred ? '#ee645b' : props.colorange ? '#f6c243' : '#5ccd41')};
  border: 0.5px rgba(0, 0, 0, 0.1) solid;
  &:hover {
    border: 0.5px rgba(0, 0, 0, 0.3) solid;
  }
`;

const FavoriteItem = styled.div`
  color: #121212;
  font-size: 13px;
  font-weight: 400;
  display: flex;
  margin-bottom: 4px;
  width: 110px;
  background-color: none;
  padding: 4px 4px 4px 6px;
  border-radius: 4px;
  user-select: none;
  img {
    height: 16px;
    width: 16px;
    /* background-color: #276be9; */
    margin-right: 10px;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: background-color 0.05s ease;
  }
`;

const Main = styled.div`
  width: calc(700px - 165px);
  background-color: #fff;
  height: 100%;
  border-radius: 0 12px 12px 0;
`;

const ListItem = ({ name, icon }) => {
  return (
    <FavoriteItem>
      {/* <div /> */}
      <img src={icon} alt="" />
      {name}
    </FavoriteItem>
  );
};

const TopBar = styled.div`
  width: 100%;
  height: 54px;
  /* background-color: blue; */
  border-radius: 0 12px 0 0;
  border-bottom: 1px #c5c5c5 solid;
  box-shadow: 0 1px 8px #c5c5c580;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 162px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 10px;

  h3 {
    font-size: 15px;
    font-weight: 500;
    color: black;
  }
`;

const Right = styled.div`
  width: 180px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 10px;
`;

function App() {
  return (
    <Container className="App">
      <Finder>
        <Sidebar>
          <Inner>
            <Controls>
              <Circle colred></Circle>
              <Circle colorange></Circle>
              <Circle colgreen></Circle>
            </Controls>
            <p>Favourites</p>
            <ListItem icon={airdrop} name="AirDrop" />
            <ListItem icon={airdrop} name="Recents" />
            <ListItem icon={airdrop} name="Desktop" />
            <ListItem icon={airdrop} name="Applications" />
            <ListItem icon={airdrop} name="Documents" />
            <ListItem icon={airdrop} name="Downloads" />
            <p>iCloud</p>
            <ListItem icon={airdrop} name="iCloud Drive" />
            <p>Locations</p>
            <ListItem icon={airdrop} name="Macintosh" />
          </Inner>
        </Sidebar>
        <Main>
          <TopBar>
            <Left>
              {/* <img src={left} alt="" /> */}
              {/* <img src={right} alt="" /> */}
              <StyledLeft />
              <StyledRight />
              <h3>Desktop</h3>
            </Left>
            <Right>
              <img src={box} alt="" />
              <img src={share} alt="" />
              <img src={more} alt="" />
              <img src={search} alt="" />
            </Right>
          </TopBar>
        </Main>
      </Finder>
    </Container>
  );
}

export default App;
