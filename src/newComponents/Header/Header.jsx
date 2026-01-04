import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import useAnimatedNavToggler from "helpers/useAnimatedNavToggler.js";

import { useNavigate, useLocation } from 'react-router-dom';

import logo from "assets/tbas-images/logo/TBAS-PLUS-LOGO.svg";

import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { ReactComponent as GlobeIcon } from "feather-icons/dist/icons/globe.svg";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";
import { ReactComponent as EmailIcon } from "feather-icons/dist/icons/mail.svg";

import { header_footer } from "assets/tbas-data/TBas_Info.jsx";

const HeaderComponent = tw.header`
  flex justify-between items-center max-w-screen-3xl mx-auto
`;

const NavLinks = tw.div`inline-block flex cursor-pointer`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
const NavLink = tw.a`
  text-sm md:text-base xl:text-lg 
  lg:mx-2 xl:mx-4 2xl:mx-6 my-2 lg:my-0
  py-2 
  font-semibold tracking-wide transition duration-300
  border-b-2 border-transparent 
  text-tbasMain-blue700
  hocus:text-tbasMain-orange
`;

const LanguageChangeContainer = tw.div`cursor-pointer w-full m-auto flex justify-end`;
const LanguageChange = tw(NavLink)`text-main-lightBlue flex items-end`

const LogoLink = styled(NavLink)`
  ${tw`cursor-pointer flex items-center`};
  img {
    ${tw`w-48 sm:w-64 md:w-80 lg:w-48 xl:w-64 2xl:w-80`}
  }
`;

const PrimaryLink = tw(NavLink)`
  lg:mx-0 p-4 lg:mb-2
  rounded-xl bg-tbasMain-blue700 text-gray-100
  hocus:bg-tbasMain-orange hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
const NavToggle = tw.button`
  lg:hidden pr-8 z-70 focus:outline-none hocus:text-main-blue transition duration-300
`;
const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-60 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-main-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

const DesktopNavLinks = tw.nav`
  flex w-full justify-center items-center
`;
const LgDesktopNav = tw(DesktopNavLinks)`hidden lg:flex lg:flex-wrap lg:pt-8 lg:px-0 justify-center`;

const DropdownContainer = tw.div`relative`;
const Dropdown = tw.div`select-none cursor-pointer hover:border-primary-500 transition-colors duration-300`;
const DropdownParent = tw.div`flex justify-between items-center`;
const DropdownParentText = tw.div`text-sm md:text-base xl:text-lg 
my-2 lg:my-0 py-2 
  font-semibold tracking-wide transition duration-300
  border-b-2 border-transparent 
  text-tbasMain-blue700
  hocus:text-tbasMain-orange`;
const DropdownParentToggleIcon = styled(motion.span)`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const DropdownLinkContainer = tw(motion.div)`hidden absolute 
left-0 z-40 font-normal mt-4 text-gray-300 bg-white lg:w-[12.5rem] xl:w-[13.5rem]`;
const DropdownLink = tw(NavLink)`block lg:mx-0 px-4 py-2 w-full`;
const DropdownLinks = tw.div`flex flex-wrap cursor-pointer`;

var currPath = "/";
var currInfo = header_footer[0];

export default function Header(props) {
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const navigate = useNavigate();
  let location = useLocation();
  const [dropdownActive, setDropdownActive] = useState(false);

  currPath = (location.pathname);
  let pathArr = currPath.split("/").slice(1);
  let currNavPath = "/";
  if(pathArr[0] === "eng"){
    pathArr = pathArr.slice(1);
    currNavPath = "/eng/";
    currInfo = header_footer[1];
  }
  currPath = pathArr.join("/");

  const globeLinkJap = (
    <LanguageChangeContainer>
      <LanguageChange onClick={() => {
          navigate("/eng/" + currPath);
          window.location.reload();
        }}>
        <GlobeIcon tw="w-6 h-6" />
        &nbsp;English
      </LanguageChange>
    </LanguageChangeContainer>
  );
  const globeLinkEng = (
    <LanguageChangeContainer>
      <LanguageChange onClick={() => {
          navigate("/" + currPath);
          window.location.reload();
        }}>
        <GlobeIcon tw="w-6 h-6" />
        &nbsp;日本語
      </LanguageChange>
    </LanguageChangeContainer>
  );

  const tbasLogoLink = (
    <LogoLink onClick={() => navigate(currNavPath)}>
      <img src={logo} alt="logo" />
    </LogoLink>
  );
  const tbasNavLinks = [
    <NavLinks key = {1}>
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[0])}>{currInfo.links[0]}</NavLink>
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[1])}>{currInfo.links[1]}</NavLink>
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[2])}>{currInfo.links[2]}</NavLink>
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[3])}>{currInfo.links[3]}</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink onClick={() => navigate(currNavPath+currInfo.endpoints[4])}>
        <EmailIcon tw="w-6 h-6 inline mr-4" />
        {currInfo.links[4]}
      </PrimaryLink>
    </NavLinks>
  ];
  const tbasMobileNavLinks = [
    <NavLinks key = {1}>
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[0])}>{currInfo.links[0]}</NavLink>
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[1])}>{currInfo.links[1]}</NavLink>
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[2])}>{currInfo.links[2]}</NavLink>
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[3])}>{currInfo.links[3]}</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink onClick={() => navigate(currNavPath+currInfo.endpoints[4])}>
        {currInfo.links[4]}
      </PrimaryLink>
    </NavLinks>
  ];

  return (
    <HeaderComponent>
      <DesktopNavLinks>
        {tbasLogoLink}
      </DesktopNavLinks>
    </HeaderComponent>
  );
};


/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  }
};
