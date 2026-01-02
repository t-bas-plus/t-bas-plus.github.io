import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {
    MainHeading as MainHeadingTemplate,
    MainHeading2 as SubMainHeadingTemplate,
    MainParagraph as MainParagraphTemplate,
    MainParagraph4 as DescriptionTemplate,
    ContentFormatted2 as RowTemplate
  } from "assets/styles/TailwindComponents.jsx";

import { home_keyAspects } from "assets/tbas-data/TBas_Info.jsx";

const Container = tw(RowTemplate)`pt-12 lg:py-16 divide-y`;
const RowConfig= tw(RowTemplate)`flex flex-col md:flex-row justify-between items-center`;
const InnerRow = tw(RowConfig)`flex-row lg:w-1/2 px-8 lg:px-0 mb-12 lg:mb-32 mx-auto h-104 lg:h-160`;
const Row = tw(RowConfig)`md:divide-x`;

const TextColumn = tw.div`w-1/16 h-full flex flex-col lg:px-12 items-center`;

const MainHeading = tw(MainHeadingTemplate)`tracking-widest text-tbasMain-blue700 font-extrabold`;
const HeadingInfoContainer = tw.div`flex flex-col items-center pb-8`;

const Heading = tw(MainHeadingTemplate)`text-center text-tbasMain-blue700 tracking-widest pt-8`;
const Description = tw(DescriptionTemplate)`mt-4 text-main-black font-light lg:max-w-lg`;
const SubDescription = tw(MainParagraphTemplate)`[writing-mode:vertical-rl] mt-4 text-main-black font-light lg:max-w-lg`;

const ImageColumn = tw.div`w-15/16 h-full flex flex-col items-center justify-center mt-8 lg:mt-12 pl-4 lg:pl-0`;
const ImageContainer = tw.div`w-full h-3/4`;
const TextContainer = tw.div`md:px-12 w-full md:h-1/4 text-left`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-contain bg-no-repeat bg-center object-center m-auto w-full h-full`
]);

var currInfo = home_keyAspects[0];

export default function KeyAspects(props) {
  if(props.language === "ENG"){
    currInfo = home_keyAspects[1];
  }

  return (
    <Container>
      <HeadingInfoContainer>
        <MainHeading>{currInfo.Heading}</MainHeading>
      </HeadingInfoContainer>
      <Row>
        {currInfo.KeyAspects.map((keyaspect, index) => (
          <InnerRow>
            <TextColumn>
              <Heading>{index + 1}</Heading>
              <SubDescription>{keyaspect.SubHeading}</SubDescription>
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <Image imageSrc={keyaspect.ImageUrl} />
              </ImageContainer>
              <TextContainer>
                <Description>{keyaspect.Description}</Description>
              </TextContainer>
            </ImageColumn>
          </InnerRow>
        ))}
      </Row>
    </Container>
  );
};
