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

const PlansContainer = tw.div`relative grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8`;
const Plan = tw.article`flex flex-col w-full min-w-0 overflow-hidden text-center bg-white shadow rounded-2xl text-main-black`;
const ImageContainer = tw.div`w-full h-48 lg:h-56`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-full bg-center bg-no-repeat bg-cover`
]);

const TextContainer = tw.div`flex flex-col flex-1 p-5 sm:p-6`;
const HeadingContainer = tw.div`flex flex-col items-center justify-center h-32 mb-4`;
const PlanHeader = tw(PlanHeadingTemplate)`w-full font-bold leading-tight tracking-wide text-center md:text-3xl lg:text-7xl xl:text-10xl`;
const SubHeader = tw(MainParagraphTemplate)`block min-h-6 mt-2 font-normal tracking-normal text-center`;

const FeatureTextContainer = tw.div`grid items-center w-full h-20 grid-cols-3 gap-2 mb-6`;
const Label = tw(SmallParagraphTemplate)`flex items-center justify-center w-full h-12 px-1 font-light leading-snug text-center rounded-sm bg-tbasMain-blue500 text-main-white`;

const PriceTable = tw.div`flex flex-col w-full mt-auto overflow-hidden border border-black`;
const PriceHeadingContainer = tw.div`flex items-center w-full min-h-40 px-4 py-3 md:h-64 lg:h-56 xl:h-48`;
const PriceKeyNote = tw(SmallParagraphTemplate)`w-full font-medium leading-relaxed text-left break-words text-tbasMain-red900`;
const PriceNote = tw.p`m-0`;

const CourseColumnContainer = tw.div`flex w-full h-32 border-t border-black md:h-40 lg:h-32`;
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
                        <PriceNote key={noteIndex}>{note}</PriceNote>
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
