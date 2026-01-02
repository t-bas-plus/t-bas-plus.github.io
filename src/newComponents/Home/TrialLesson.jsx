import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

import { useNavigate } from 'react-router-dom';

/* ========= importing assets ============ */
import {
  SubMainHeading as HeadingTitleTemplate,
  SubMainHeading3 as HeadingTitle3Template,
  MainParagraph as MainParagraphTemplate,
  PrimaryButton as PrimaryButtonBase,
  ContentFormatted as BaseContainer
} from "assets/styles/TailwindComponents.jsx";

import { home_trialLessons } from "assets/tbas-data/TBas_Info.jsx";
import background from "assets/tbas-images/background/classroom-2.jpg";
import { ReactComponent as EmailIcon } from "feather-icons/dist/icons/phone-call.svg";

const Container = tw(BaseContainer)`lg:py-12`;

const Row = tw.div`flex flex-col md:flex-row justify-between items-center lg:my-12 mx-auto shadow-lg md:h-144 rounded-3xl `;

const TextColumn = tw.div`
w-full md:w-1/2 h-full flex flex-col justify-center bg-tbasMain-blue900 py-16 pl-16 lg:rounded-l-3xl`;

const SubHeading = tw(HeadingTitle3Template)`text-left text-main-white tracking-widest`;
const Heading = tw(HeadingTitleTemplate)`text-left text-main-white tracking-widest`;
const Description = tw(MainParagraphTemplate)`mt-8 md:mt-16 text-main-white`;
const PrimaryButton = tw.div`px-8 py-3 font-bold rounded text-main-white font-serif text-sm md:text-base lg:text-lg xl:text-xl w-4/5 lg:w-1/2 mt-8 inline-block tracking-wide text-left rounded-md bg-tbasMain-red900`;

const ImageColumn = tw.div`w-full md:w-1/2 h-72 md:h-full flex flex-col px-8 md:px-0 hidden md:inline`;
const MobileImageColumn = tw(ImageColumn)`inline md:hidden`;

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center object-center m-auto w-full h-full rounded-3xl md:rounded-none md:rounded-r-3xl`
]);

var currInfo = home_trialLessons[0];
var currNavPath = "/";
export default function TrialLesson(props) {
  if(props.language === "ENG"){
    currInfo = home_trialLessons[1];
    currNavPath = "/eng/";
  }
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <MobileImageColumn>
          <Image imageSrc={background} />
        </MobileImageColumn>
        <TextColumn>
          <Heading>
            {currInfo.Heading[0]}
            {currInfo.Heading[1]}
            {currInfo.Heading[2]}
          </Heading>
          <Heading>
            {currInfo.Heading[3]}
          </Heading>
          <Description>{currInfo.Subheading}</Description>
          <PrimaryButton>
            <EmailIcon tw="w-6 h-6 inline mr-4 mb-1" />
            {currInfo.ActionButton}
          </PrimaryButton>
        </TextColumn>
        <ImageColumn>
          <Image imageSrc={background} />
        </ImageColumn>
      </Row>
    </Container>
  );
};
