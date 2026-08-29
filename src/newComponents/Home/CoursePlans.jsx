import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

import {
  MainHeading as MainHeadingTemplate,
  SubMainHeading as PlanHeadingTemplate,
  SubMainHeading3 as PriceHeadingTemplate,
  MainParagraph3 as MainParagraphTemplate,
  MainParagraph4 as SmallParagraphTemplate,
  Container as ContainerTemplate,
  ContentFormatted2
} from "assets/styles/TailwindComponents.jsx";
import { courseInfo } from "assets/tbas-data/TBas_Info.jsx";

import background from "assets/tbas-images/background/background-image-2.png";

const Container = styled(ContainerTemplate)(props => [
  tw`relative w-full h-auto px-4 pb-16 bg-gradient-to-t from-main-white to-tbasMain-blue700 bg-no-repeat sm:px-6 lg:px-8`,
  `&::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("${props.imageSrc}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.2;
    z-index: 0;
  }`,
  `& > * { position: relative; z-index: 10; }`
]);

const HeroContainer = styled(ContentFormatted2)(tw`relative`);
const HeaderContainer = tw.div`flex flex-col items-center w-full pt-10 pb-8 lg:pt-16 lg:pb-12`;
const MainHeading = tw(MainHeadingTemplate)`w-full tracking-widest text-center text-main-white`;

const PlansContainer = tw.div`relative grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8`;
const Plan = tw.article`flex flex-col w-full min-w-0 overflow-hidden text-center bg-white shadow rounded-2xl text-main-black`;
const ImageContainer = tw.div`w-full h-48 lg:h-56`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-full bg-center bg-no-repeat bg-cover`
]);

const TextContainer = tw.div`flex flex-col flex-1 p-5 sm:p-6`;
const HeadingContainer = tw.div`flex flex-col items-center justify-center h-32 mb-4`;
const PlanHeader = tw(PlanHeadingTemplate)`w-full font-bold leading-tight tracking-wide text-center whitespace-nowrap md:text-5xl lg:text-5xl xl:text-7xl`;
const SubHeader = tw(MainParagraphTemplate)`block min-h-6 mt-2 font-normal tracking-normal text-center`;

const FeatureTextContainer = tw.div`grid items-center w-full h-16 grid-cols-3 gap-2 mb-6`;
const Label = tw.span`flex items-center justify-center w-full h-10 px-1 font-normal leading-none text-center whitespace-nowrap rounded-sm text-xs sm:text-sm xl:text-base bg-tbasMain-blue500 text-main-white`;

const PriceTable = tw.div`flex flex-col w-full mt-auto overflow-hidden border border-black`;
const PriceHeadingContainer = tw.div`flex items-center w-full h-48 px-4 py-3`;
const PriceKeyNote = tw.div`w-full font-medium leading-relaxed text-left text-sm xl:text-base text-tbasMain-red900`;
const PriceNote = tw.div`flex items-start w-full`;
const PriceNoteMarker = tw.span`flex-shrink-0 mr-1`;
const PriceNoteText = tw.span`min-w-0`;

const CourseColumnContainer = tw.div`flex w-full h-32 border-t border-black`;
const CourseColumn = tw.div`flex flex-col justify-center w-1/2 min-w-0 px-2 py-4 text-center first:border-r first:border-black`;
const CourseDescription = tw(MainParagraphTemplate)`font-medium leading-snug text-center text-tbasMain-blue500`;
const CostHeading = tw(PriceHeadingTemplate)`w-full mt-2 font-bold leading-none text-center`;

export default function CoursePlans (props){
  const currInfo = props.language === "ENG" ? courseInfo[1] : courseInfo[0];

  return (
    <Container imageSrc={background}>
      <HeroContainer>
        <HeaderContainer>
          <MainHeading>{currInfo.Heading}</MainHeading>
        </HeaderContainer>
        <PlansContainer>
          {currInfo.Courses.map((plan, index) => (
            <Plan key={index}>
              <ImageContainer>
                <Image imageSrc={plan.ImageUrl} />
              </ImageContainer>
              <TextContainer>
                <HeadingContainer>
                  <PlanHeader>{plan.SubHeading}</PlanHeader>
                  <SubHeader>{plan.SubHeading2 || "\u00A0"}</SubHeader>
                </HeadingContainer>
                <FeatureTextContainer>
                  {plan.Features.map((feature, featureIndex) => (
                    <Label key={featureIndex}>{feature}</Label>
                  ))}
                </FeatureTextContainer>
                <PriceTable>
                  <PriceHeadingContainer>
                    <PriceKeyNote>
                      {(plan.PriceKeyNote || currInfo.PriceKeyNote).map((note, noteIndex) => (
                        <PriceNote key={noteIndex}>
                          <PriceNoteMarker>※</PriceNoteMarker>
                          <PriceNoteText>{note.replace(/^※/, "")}</PriceNoteText>
                        </PriceNote>
                      ))}
                    </PriceKeyNote>
                  </PriceHeadingContainer>
                  <CourseColumnContainer>
                    {plan.PriceTable.map((price, priceIndex) => (
                      <CourseColumn key={priceIndex}>
                        <CourseDescription>{price.stdPriceHeading}</CourseDescription>
                        <CostHeading>{price.stdPrice}</CostHeading>
                      </CourseColumn>
                    ))}
                  </CourseColumnContainer>
                </PriceTable>
              </TextContainer>
            </Plan>
          ))}
        </PlansContainer>
      </HeroContainer>
    </Container>
  );
}
