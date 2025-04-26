import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Stack,
  Nav,
  INavLink,
  INavStyles,
  Text,
  IconButton,
  IIconProps,
  SearchBox,
  StackItem,
  mergeStyleSets,
  FontIcon,
  useTheme,
} from '@fluentui/react';

const menuIcon = { iconName: 'GlobalNavButton' };
const searchIcon = { iconName: 'Search' };

const DocLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const toggleNav = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const navStyles = {
    root: {
      width: isNavCollapsed ? 50 : 250,
      height: '100vh',
      boxSizing: 'border-box',
      borderRight: `1px solid ${theme.palette.neutralLight}`,
      overflowY: 'auto',
      transitionProperty: 'width',
      transitionDuration: '0.2s',
      transitionTimingFunction: 'ease',
    },
    link: {
      whiteSpace: 'nowrap',
      textDecoration: 'none',
      color: theme.palette.neutralPrimary,
      ':hover': {
        backgroundColor: theme.palette.neutralLighter,
      },
    },
    chevronButton: {
      fontSize: 12,
      fontWeight: 400,
    },
  };

  const navLinkGroups = [
    {
      links: [
        {
          name: 'Home',
          url: '/',
          key: 'home',
          icon: 'Home',
        },
        {
          name: 'Getting Started',
          url: '/getting-started',
          key: 'getting-started',
          icon: 'Rocket',
        },
        {
          name: 'Components',
          url: '/components',
          key: 'components',
          icon: 'Puzzle',
        },
        {
          name: 'API Reference',
          url: '/api-reference',
          key: 'api-reference',
          icon: 'Code',
        },
      ],
    },
  ];

  const handleSearchChange = (event, newValue) => {
    setSearchValue(newValue);
  };

  const handleLinkClick = (ev, item) => {
    ev.preventDefault();
    navigate(item.url);
  };

  const styles = mergeStyleSets({
    container: {
      display: 'flex',
      height: '100vh',
    },
    navToggle: {
      marginRight: 10,
      marginLeft: 5,
    },
    contentArea: {
      flex: 1,
      padding: 20,
      overflow: 'auto',
    },
    headerContainer: {
      borderBottom: `1px solid ${theme.palette.neutralLight}`,
      padding: '10px 0',
      marginBottom: 20,
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    searchBox: {
      width: 200,
    },
    logo: {
      fontWeight: 600,
      fontSize: 24,
      color: theme.palette.themePrimary,
      display: 'flex',
      alignItems: 'center',
    },
    logoIcon: {
      marginRight: 8,
      fontSize: 20,
    },
  });

  return (
    <div className={styles.container}>
      <Nav
        onLinkClick={handleLinkClick}
        selectedKey={location.pathname === '/' ? 'home' : location.pathname.substring(1)}
        styles={navStyles}
        groups={navLinkGroups}
        expandButtonAriaLabel={isNavCollapsed ? 'Expand' : 'Collapse'}
        isCollapsed={isNavCollapsed}
      />

      <div className={styles.contentArea}>
        <div className={styles.headerContainer}>
          <Stack horizontal verticalAlign="center" horizontalAlign="space-between">
            <Stack horizontal verticalAlign="center">
              <IconButton
                className={styles.navToggle}
                iconProps={menuIcon}
                onClick={toggleNav}
                title={isNavCollapsed ? 'Expand' : 'Collapse'}
                ariaLabel={isNavCollapsed ? 'Expand' : 'Collapse'}
              />
              <span className={styles.logo}>
                <FontIcon iconName="DocumentSet" className={styles.logoIcon} />
                {!isNavCollapsed && <span>Documentation</span>}
              </span>
            </Stack>
            <SearchBox
              placeholder="Search documentation..."
              onChange={handleSearchChange}
              value={searchValue}
              className={styles.searchBox}
              iconProps={searchIcon}
            />
          </Stack>
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DocLayout;