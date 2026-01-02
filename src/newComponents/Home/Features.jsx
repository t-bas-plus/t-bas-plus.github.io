import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

import { useNavigate } from 'react-router-dom';

/* ========= importing assets ============ */
import {
  SubMainHeading as HeadingTitleTemplate,
  SubMainHeading3 as HeadingTitle3Template,
  MainParagraph3 as MainParagraphTemplate,
  PrimaryButton as PrimaryButtonBase,
  ContentFormatted as BaseContainer
} from "assets/styles/TailwindComponents.jsx";

import { home_features } from "assets/tbas-data/TBas_Info.jsx";
import background from "assets/tbas-images/background/classroom-2.jpg";
import { ReactComponent as EmailIcon } from "feather-icons/dist/icons/mail.svg";

const Container = tw(BaseContainer)`px-8 lg:px-0 pt-8 lg:py-8`;

const Row = tw.div`flex flex-col md:flex-row justify-between items-center lg:my-12 mx-auto rounded-3xl`;

const TextColumn = tw.div`
w-full h-full flex flex-col text-center justify-center`;

const SubHeading = tw(HeadingTitle3Template)`text-tbasMain-red900 tracking-widest`;
const Heading = tw(HeadingTitleTemplate)`text-tbasMain-red900 tracking-widest pb-8`;
const Description = tw(MainParagraphTemplate)`mt-4  text-main-black `;
const PrimaryButton = tw(PrimaryButtonBase)`px-0 md:px-2 w-4/5 lg:w-1/2 mt-8 inline-block tracking-wide text-center rounded-md bg-tbasMain-red900`;

const ImageColumn = tw.div`w-full md:w-1/2 h-72 md:h-full flex flex-col px-8 md:px-0 hidden md:inline`;
const MobileImageColumn = tw(ImageColumn)`inline md:hidden`;

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center object-center m-auto w-full h-full rounded-3xl md:rounded-none md:rounded-r-3xl`
]);

var currInfo = home_features[0];
var currNavPath = "/";
export default function TrialLesson(props) {
  if(props.language === "ENG"){
    currInfo = home_features[1];
    currNavPath = "/eng/";
  }
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <TextColumn>
          <Heading>
            {currInfo.Heading[0]}
          </Heading>
          <Heading tw="inline sm:block">
            {currInfo.Heading[1]}{currInfo.Heading[2]}
          </Heading>
          <Description>{currInfo.Heading2}</Description>
        </TextColumn>
      </Row>
    </Container>
  );
};
