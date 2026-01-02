import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {MainHeading3 as HeadingTitleTemplate, 
  SubMainHeading as HeadingTitle3Template,
  MainParagraph2 as MainParagraphTemplate,
  Container, ContentFormatted, HiddenBr
} from "assets/styles/TailwindComponents.jsx";
/* ======== importing some data for text =========== */
import { home_concerns } from "assets/tbas-data/TBas_Info.jsx";

import lady from "assets/tbas-images/home/stressed-lady.svg";
import boy from "assets/tbas-images/home/stressed-boy.svg";

/* ===== define some twin / tailwind css for components ===== */
const HeadingTitle = tw(HeadingTitle3Template)`tracking-widest text-main-black`;
const HeadingRedTitle = tw(HeadingTitleTemplate)`inline tracking-widest text-tbasMain-red`;

const HeadingInfoContainer = tw.div`py-12 flex flex-col items-center bg-tbasMain-purple400 px-8 text-center`;
const TriangleContainer = tw.div`flex flex-col items-center`;

const Triangle = tw.div`flex justify-center w-0 h-0 
border-l-[50px] border-l-transparent
border-t-[75px] border-tbasMain-purple400
border-r-[50px] border-r-transparent`;
const WhiteTriangle = tw.div`flex justify-center w-0 h-0 
border-l-[50px] border-l-transparent
border-t-[75px] border-white
border-r-[50px] border-r-transparent`;

const Row = tw(ContentFormatted)`relative flex flex-row lg:px-12 mt-16 sm:mt-0 mb-56 sm:mb-0 sm:my-12
h-64 md:h-80 lg:h-112 xl:h-128`;
const ImageColumn = tw.div`w-1/2 h-full md:mx-8 lg:mx-16 xl:mx-20
rounded-full overflow-hidden 
border sm:border-2 border-black`;

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center object-center w-full h-full`
]);

const TextBoxContainer = tw.div`bg-tbasMain-purple900 text-main-white p-4 absolute rounded-xl transform`;
const CenterContainer = tw(TextBoxContainer)`bottom-0 left-1/2
-translate-x-1/2 translate-y-16 sm:-translate-y-24 lg:-translate-y-40`;
const LeftTopContainer = tw(TextBoxContainer)`top-0 left-0 
-translate-y-12
md:translate-x-0 md:translate-y-0`;
const LeftBotContainer = tw(TextBoxContainer)`bottom-0 left-0 
translate-y-[11rem]
md:translate-x-0 md:translate-y-0`;
const RightTopContainer = tw(TextBoxContainer)`top-0 right-0 
-translate-y-12
md:-translate-x-1 md:-translate-y-1`;
const RightBotContainer = tw(TextBoxContainer)`bottom-0 right-0 
translate-y-[11.5rem]
md:-translate-x-1 md:-translate-y-1`;
const TextBox = tw(MainParagraphTemplate)`text-center font-bold`;

var currInfo = home_concerns[0];
export default function Concerns(props) {
  if(props.language === "ENG"){
      currInfo = home_concerns[1];
  }
  return (
    <Container tw="pt-12">
      <HeadingInfoContainer>
        {props.language === "ENG"
        ?
        <HeadingTitle tw="pl-8 sm:pl-0">      
          {currInfo.Heading[0]}
          <br/>
          <HeadingRedTitle>{currInfo.Heading[1]}</HeadingRedTitle>
          <br/>
          {currInfo.Heading[2]}
        </HeadingTitle>
        :
        <HeadingTitle>      
          {currInfo.Heading[0]}
          <br/>
          <HeadingRedTitle>{currInfo.Heading[1]}</HeadingRedTitle>
          <br/>
          {currInfo.Heading[2]}
          {/* {currInfo.Heading[2][0]}
          <HiddenBr/>
          {currInfo.Heading[2].slice(1)} */}
        </HeadingTitle>
        }
      </HeadingInfoContainer>
    </Container>
  );
};
