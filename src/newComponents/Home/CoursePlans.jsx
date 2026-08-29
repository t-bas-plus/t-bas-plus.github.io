import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { useNavigate } from 'react-router-dom';

/* ========= importing assets ============ */
import {
    MainHeading as MainHeadingTemplate,
    MainHeading2 as SubMainHeadingTemplate,
    MainParagraph as MainParagraphTemplate,
    MainParagraph2 as MainParagraph2Template,
    SubMainHeading as MainHeading2Template,
    PrimaryButton as PrimaryButtonBase,
    SectionDescription as SectionDescriptionBase,

    Container as ContainerTemplate,
    ContentFormatted2
  } from "assets/styles/TailwindComponents.jsx";
import { courseInfo } from "assets/tbas-data/TBas_Info.jsx";

import { ReactComponent as CheckIcon } from "feather-icons/dist/icons/check.svg";
import { ReactComponent as ArrowIcon } from "feather-icons/dist/icons/arrow-right-circle.svg";

import background from "assets/tbas-images/background/background-image-2.png";

const Container = styled(ContainerTemplate)(props => [
  tw`relative px-8 pb-16 bg-gradient-to-t from-main-white to-tbasMain-blue700 bg-no-repeat w-full h-auto`,
  `&::before{`
    + `content: "";`
    + `position: absolute;`
    + `inset: 0;`
    + `background-image: url("${props.imageSrc}");`
    + `background-repeat: no-repeat;`
    + `background-size: cover;`
    + `background-position: center;`
    + `opacity: 0.2;`
    + `z-index: 0;`
  + `}`,
  `& > * { position: relative; z-index: 10; }`
]);

const HeroContainer = styled(ContentFormatted2)(tw`relative h-full pb-12 lg:pb-0`);

const HeaderContainer = tw.div`w-full flex flex-col items-center pt-10 lg:pt-16 pb-6 lg:pb-12`;
const MainHeading = tw(MainHeadingTemplate)`w-full tracking-widest text-center text-main-white`;

const PlansContainer = tw.div`flex flex-col md:flex-row justify-center items-center md:items-stretch relative space-y-6 md:space-y-0 md:space-x-10`;
const DetailedPlansContainer = tw.div`flex flex-col items-center mt-10 space-y-10`;

const Plan = styled.div(({ item }) => [
  tw`flex flex-col w-full h-auto
  text-center rounded-2xl shadow relative 
  text-main-black bg-white`
]);
const PlanHeader = styled(MainHeading2Template)(({ item }) => [
  tw`font-bold tracking-widest w-full py-4 text-center`,
]);
const SubHeader = tw(MainParagraphTemplate)`inline-block`

const FeatureTextContainer = tw.div`flex flex-row items-center justify-center flex-wrap mt-2 py-2`;
const Label = tw.span`inline-block bg-tbasMain-blue500 text-main-white font-light text-sm md:text-base lg:text-lg xl:text-xl px-6 ml-4 mb-4 md:mb-0 rounded-sm`;

const ImageContainer = tw.div`h-48 lg:h-1/3 w-full`;
const TextContainer = tw.div`flex flex-col lg:h-1/2 items-center mt-8 lg:mt-4 mb-12 lg:mb-0 text-left`;

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-no-repeat bg-center object-center object-fill m-auto h-full w-full rounded-t-2xl`
]);

const PriceTable = tw.div`flex flex-col w-5/6 md:my-6 border border-black`;
const PriceHeadingContainer = tw.div`w-full text-center py-4`
const PriceKeyNote = tw(SectionDescriptionBase)`text-tbasMain-red900 text-left px-2 lg:pl-6 items-center`;

const CourseColumnContainer = tw.div`flex flex-col md:flex-row w-full`;
const CourseColumn = tw.div`flex flex-col md:w-1/3 text-center p-4 border-black`;
const CostHeading = tw(SubMainHeadingTemplate)`font-bold w-full text-center md:text-left`;
const CourseDescription = tw(MainParagraph2Template)`inline-block text-center md:text-left text-tbasMain-blue500 font-medium lg:mt-6`;
const PriceCourseDescription = tw(CourseDescription)`inline-block text-main-black font-light mt-0 text-center md:text-left`;

const DetailedPlan = tw(Plan)`max-w-6xl overflow-hidden`;
const DetailedContent = tw.div`flex flex-col lg:flex-row text-left`;
const DetailedImage = tw(ImageContainer)`lg:w-2/5 lg:h-auto min-h-64`;
const DetailedText = tw.div`flex flex-col p-6 md:p-10 lg:w-3/5`;
const DetailedHeading = tw(MainHeading2Template)`font-bold tracking-widest text-center`;
const DetailedSectionHeading = tw(SubMainHeadingTemplate)`font-bold mt-6 mb-2 text-tbasMain-blue500`;
const DetailedParagraph = tw(MainParagraph2Template)`mb-4`;
const RecommendationList = tw.ul`grid md:grid-cols-2 gap-x-8 gap-y-2 list-disc pl-6`;
const Recommendation = tw(MainParagraph2Template)`pl-1`;
const DetailsGrid = tw.div`grid md:grid-cols-2 gap-4 mt-6`;
const Detail = tw.div`border border-tbasMain-blue500 rounded-lg p-4`;
const DetailHeading = tw(SubMainHeadingTemplate)`font-bold text-tbasMain-blue500 mb-2`;
const DetailLine = tw(MainParagraph2Template)`block`;
const DetailNote = tw(SectionDescriptionBase)`block mt-1 text-tbasMain-red900`;

export default function CoursePlans (props){
  const currInfo = props.language === "ENG" ? courseInfo[1] : courseInfo[0];
  const standardCourses = currInfo.Courses.filter(course => course.Type !== "detailed");
  const detailedCourses = currInfo.Courses.filter(course => course.Type === "detailed");

  return (
    <Container imageSrc={background} >
      <HeroContainer>
        <HeaderContainer>
          <MainHeading>{currInfo.Heading}</MainHeading>
        </HeaderContainer>
        <PlansContainer>
          {standardCourses.map((plan, index) => (
            <Plan key={index}>
              <ImageContainer>
                <Image imageSrc={plan.ImageUrl} />
              </ImageContainer>
              <TextContainer>
                <PlanHeader item={index}>
                  {plan.SubHeading}
                  <SubHeader>{plan.SubHeading2}</SubHeader>
                </PlanHeader>
                <FeatureTextContainer>
                  {plan.Features.map((feature, index) => (
                    <Label key={index}>{feature}</Label>
                  ))}
                </FeatureTextContainer>
                <PriceTable>
                  <PriceHeadingContainer>
                    {/* <PlanHeader>
                      {currInfo.PriceHeading}
                    </PlanHeader> */}
                    <PriceKeyNote >
                      {currInfo.PriceKeyNote[0]}<br/>
                      {currInfo.PriceKeyNote[1]}<br/>
                      {currInfo.PriceKeyNote[2]}
                    </PriceKeyNote>
                  </PriceHeadingContainer>
                  <CourseColumnContainer>
                    <CourseColumn tw="md:w-1/2 md:border-r border-t">
                      <CourseDescription>
                        {plan.PriceTable[0].stdPriceHeading}
                      </CourseDescription>
                      <CostHeading>
                        {plan.PriceTable[0].stdPrice}
                        {/* <PriceCourseDescription>
                        {faq.onlineTable.priceSuffix}
                        </PriceCourseDescription> */}
                      </CostHeading>
                    </CourseColumn>
                    <CourseColumn tw="md:w-1/2 border-t">
                      <CourseDescription>
                        {plan.PriceTable[1].stdPriceHeading}
                      </CourseDescription>
                     <CostHeading>
                        {plan.PriceTable[1].stdPrice}
                        {/* <PriceCourseDescription>
                        {faq.onlineTable.priceSuffix}
                        </PriceCourseDescription> */}
                      </CostHeading>
                    </CourseColumn>
                  </CourseColumnContainer>
                </PriceTable>
              </TextContainer>
            </Plan>
          ))}
        </PlansContainer>
        <DetailedPlansContainer>
          {detailedCourses.map((plan, index) => (
            <DetailedPlan key={index}>
              <DetailedContent>
                <DetailedImage>
                  <Image imageSrc={plan.ImageUrl} />
                </DetailedImage>
                <DetailedText>
                  <DetailedHeading>【{plan.SubHeading}】</DetailedHeading>
                  {plan.Intro.map((paragraph, paragraphIndex) => (
                    <DetailedParagraph key={paragraphIndex}>{paragraph}</DetailedParagraph>
                  ))}
                  {plan.Sections.map((section, sectionIndex) => (
                    <React.Fragment key={sectionIndex}>
                      <DetailedSectionHeading>{section.Heading}</DetailedSectionHeading>
                      {section.Paragraphs.map((paragraph, paragraphIndex) => (
                        <DetailedParagraph key={paragraphIndex}>{paragraph}</DetailedParagraph>
                      ))}
                    </React.Fragment>
                  ))}
                  <DetailedSectionHeading>こんな方におすすめです</DetailedSectionHeading>
                  <RecommendationList>
                    {plan.Recommendations.map((recommendation, recommendationIndex) => (
                      <Recommendation as="li" key={recommendationIndex}>
                        {recommendation}
                      </Recommendation>
                    ))}
                  </RecommendationList>
                  <DetailsGrid>
                    {plan.Details.map((detail, detailIndex) => (
                      <Detail key={detailIndex}>
                        <DetailHeading>■ {detail.Heading}</DetailHeading>
                        {detail.Lines.map((line, lineIndex) => (
                          <DetailLine key={lineIndex}>{line}</DetailLine>
                        ))}
                        {detail.Notes?.map((note, noteIndex) => (
                          <DetailNote key={noteIndex}>※{note}</DetailNote>
                        ))}
                      </Detail>
                    ))}
                  </DetailsGrid>
                </DetailedText>
              </DetailedContent>
            </DetailedPlan>
          ))}
        </DetailedPlansContainer>
      </HeroContainer>
    </Container>
  );
};
