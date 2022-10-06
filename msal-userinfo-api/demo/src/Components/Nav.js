import * as React from "react";
import { Nav, INavStyles, INavLinkGroup } from "@fluentui/react/lib/Nav";
import ProfileBox from "./ProfileBox";

const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    height: "100%",
    boxSizing: "border-box",
    border: "1px solid #eee",
    overflowY: "auto",
    marginBottom: 5,
  },
  link: {
    whiteSpace: "normal",
    lineHeight: "inherit",
  },
};

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: "Home",
        url: "http://example.com",
        key: "key1",
        target: "_blank",
        title: "",
      },
      {
        name: "Pages",
        url: "http://msn.com",
        key: "key2",
        target: "_blank",
        title: "",
      },
      {
        name: "Email",
        url: "http://msn.com",
        key: "key3",
        target: "_blank",
        title: "",
      },
    ],
  },
];

const programerNavLinkGroups: NavLinkGroup[] = [
  {
    links: [
      {
        name: "Programmer stuff",
        url: "http://example.com",
        key: "key1",
        target: "_blank",
        title: "",
      },
      {
        name: "Home",
        url: "http://example.com",
        key: "key2",
        target: "_blank",
        title: "",
      },
      {
        name: "Pages",
        url: "http://msn.com",
        key: "key3",
        target: "_blank",
        title: "",
      },
      {
        name: "Email",
        url: "http://msn.com",
        key: "key4",
        target: "_blank",
        title: "",
      },
    ],
  },
];

const NavWrappedExample = ({ profileInfo }) => {
  return (
    <div style={{ maxWidth: 208 }}>
      <ProfileBox profileInfo={profileInfo} />
      {profileInfo === null || profileInfo.jobTitle !== "Programmer" ? (
        <Nav
          selectedKey="key1"
          ariaLabel="Nav example with wrapped link text"
          id="nav"
          styles={navStyles}
          groups={navLinkGroups}
        />
      ) : (
        <Nav
          selectedKey="key1"
          ariaLabel="Nav example with wrapped link text"
          id="nav"
          styles={navStyles}
          groups={programerNavLinkGroups}
        />
      )}
    </div>
  );
};

export default NavWrappedExample;
