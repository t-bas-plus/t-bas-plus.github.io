import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {
  MainHeading as MainHeadingTemplate,
  SubMainHeading as SubMainHeadingTemplate,
  MainParagraph as MainParagraphTemplate,
  SectionDescription as SectionDescriptionBase,
  ContentFormatted as BaseContainer,
  HiddenBr_BreakPoint3
} from "assets/styles/TailwindComponents.jsx";

import { tutors_list } from "assets/tbas-data/TBas_Info.jsx";
import female from "assets/tbas-images/tutors/female.svg";
import male from "assets/tbas-images/tutors/male.svg";

const Container = tw(BaseContainer)`lg:py-12`;

const Heading = tw(MainHeadingTemplate)`text-center text-tbasMain-blue700 tracking-widest font-black pl-4 md:pl-8 2xl:pl-0 pt-8 pb-6`;
const HorizontalLine = tw.div`text-main-black bg-main-black border h-[3px]`;

const Row = tw.div`flex flex-col md:flex-row justify-between items-center lg:my-12 mx-auto lg:shadow-lg lg:rounded-3xl lg:border-black lg:border`;

const ImageColumn = tw.div`mt-8 md:mt-0 md:w-1/5 flex flex-col items-center justify-center`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center rounded-full object-center m-auto w-48 h-48 border-0`
]);
const ImageHeading = tw(SubMainHeadingTemplate)`pt-6 text-center text-main-black`;

const TextColumn = tw.div`w-4/5 h-full flex flex-col py-8 md:py-16 md:pr-8 rounded-l-3xl`;

const TextColumnRow = tw.div`flex flex-col mb-4 px-6 py-8 rounded-xl border-black border`

const TextColumnHeading = tw(MainParagraphTemplate)`w-full text-left text-main-black font-extrabold tracking-widest`;
const TextColumnDescription = tw(SectionDescriptionBase)`mt-4 text-main-black font-light max-w-full`;

const BulletList = tw.ul`mt-4 ml-12 list-disc`;
const BulletItem = tw.li`text-sm md:text-base lg:text-lg xl:text-xl font-light leading-relaxed text-main-black`;

const TagContainer = tw.div`flex flex-row flex-wrap mt-2 py-2`;
const Label = tw.span`inline-block bg-tbasMain-blue300 text-main-white font-light text-sm md:text-base lg:text-lg xl:text-xl px-6 ml-4 mb-4 md:mb-0 rounded-sm`;

var currInfo = tutors_list[0];
export default function TutorList(props) {
  if(props.language === "ENG"){
    currInfo = tutors_list[1];
  }

  return (
    <Container>
      <Heading>{currInfo.heading}</Heading>
      {currInfo.tutors.map((tutor, index) => (
        <Row key={index}>
          <ImageColumn>
            <Image imageSrc={female} />
            <ImageHeading>{tutor.name}</ImageHeading>
          </ImageColumn>
          <TextColumn>
            <TextColumnRow>
              <TextColumnHeading>{currInfo.expHeading}</TextColumnHeading>
              <TagContainer>
                {tutor.experience.map((exp, expIndex) => (
                  <Label key={expIndex}>
                    {exp}
                  </Label>
                ))}
              </TagContainer>
            </TextColumnRow>
            <TextColumnRow>
              <TextColumnHeading>{currInfo.comHeading}</TextColumnHeading>
              <TextColumnDescription>{tutor.comments}</TextColumnDescription>
            </TextColumnRow>
            <TextColumnRow>
              <TextColumnHeading>{currInfo.parentHeading}</TextColumnHeading>
              <TextColumnDescription>{tutor.parentComments}</TextColumnDescription>
            </TextColumnRow>
          </TextColumn>
        </Row>
      ))}
    </Container>
  );
};
