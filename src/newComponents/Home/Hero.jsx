import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {MainHeading as HeadingTitleTemplate, 
  SubMainHeading2 as Heading2Template,
  ContentFormatted as BaseContainer,
  Container as ContainerTemplate
} from "assets/styles/TailwindComponents.jsx";

/* ======== importing some data for text =========== */
import { home_hero } from "assets/tbas-data/TBas_Info.jsx";

import background from "assets/tbas-images/background/background-image-1.png";
import mathImage from "assets/tbas-images/background/math-photo.png";

const Container = styled(ContainerTemplate)(props => [
  tw`relative px-8 bg-tbasMain-blue900 bg-no-repeat w-full h-auto h-160 lg:h-144 xl:h-144`,
  `&::before{`
    + `content: "";`
    + `position: absolute;`
    + `inset: 0;`
    + `background-image: url("${props.imageSrc}");`
    + `background-repeat: no-repeat;`
    + `background-size: cover;`
    + `background-position: center;`
    + `opacity: 0.1;`
    + `z-index: 0;`
  + `}`,
  `& > * { position: relative; z-index: 10; }`
]);

const HeroContainer = tw(BaseContainer)`z-20 relative py-6 lg:py-0 px-2 sm:px-8 mx-auto h-full flex flex-col lg:flex-row items-center`;
const Content = tw.div`z-30 py-8 flex-1 flex flex-col justify-center items-start`;

const RightImage = styled.div(props => [
  tw`rounded-3xl overflow-hidden`,
  `position: absolute;`,
  `right: 3%;`,
  `top: 50%;`,
  `transform: translateY(-50%);`,
  `width: 48%;`,
  `height: 80%;`,
  `background-image: url("${props.imageSrc}");`,
  `background-repeat: no-repeat;`,
  `background-size: cover;`,
  `background-position: center;`,
  `box-shadow: 0 10px 30px rgba(0,0,0,0.15);`,
  `z-index: 0;`
]);

const Heading = styled(HeadingTitleTemplate)`
  ${tw`text-left text-main-white tracking-widest leading-snug w-full`}
  span {
    ${tw`inline-block mt-2`}
  }
`;
const Paragraph = tw(Heading2Template)`text-main-white w-full my-8 leading-loose`;

var currInfo = home_hero[0];
export default function Home_Hero(props) {
  if(props.language === "ENG"){
    currInfo = home_hero[1];
  }

  return (
    <Container imageSrc={background} >
      <HeroContainer>
        <RightImage imageSrc={mathImage} />
        <Content>
          <Heading>
            {currInfo.Heading}
          </Heading>
          <Paragraph>
            {currInfo.Paragraph}
          </Paragraph>
        </Content>
      </HeroContainer>
    </Container>
  );
};
