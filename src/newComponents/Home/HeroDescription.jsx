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

const Container = tw(RowTemplate)`py-16 divide-y`;

const MainHeading = tw(DescriptionTemplate)`tracking-widest text-tbasMain-blue700 font-extrabold`;
const HeadingInfoContainer = tw.div`flex flex-col items-center pb-8`;

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
    </Container>
  );
};
