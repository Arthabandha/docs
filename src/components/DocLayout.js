import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Stack,
  Nav,
  IconButton,
  SearchBox,
  FontIcon,
  useTheme,
  mergeStyleSets,
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
    linkText: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      display: isNavCollapsed ? 'none' : 'block',
    },
    link: {
      whiteSpace: 'nowrap',
      textDecoration: 'none',
      color: theme.palette.neutralPrimary,
      paddingLeft: isNavCollapsed ? 11 : undefined,
      textAlign: isNavCollapsed ? 'center' : undefined,
      ':hover': {
        backgroundColor: theme.palette.neutralLighter,
      },
    },
    chevronButton: {
      fontSize: 12,
      fontWeight: 400,
      display: isNavCollapsed ? 'none' : 'block',
    },
    chevronIcon: {
      fontSize: 10,
    },
    groupContent: {
      marginLeft: isNavCollapsed ? 0 : 0,
      paddingLeft: isNavCollapsed ? 0 : undefined,
    },
    compositeLink: {
      alignItems: isNavCollapsed ? 'center' : undefined,
    },
    iconWrapper: {
      textAlign: isNavCollapsed ? 'center' : undefined,
      width: isNavCollapsed ? '100%' : undefined,
    },
    divider: {
      borderBottom: `1px solid ${theme.palette.neutralLight}`,
      marginTop: 10,
      marginBottom: 10,
    },
    groupHeader: {
      paddingLeft: 16,
      paddingTop: 10,
      paddingBottom: 10,
      fontSize: 14,
      fontWeight: 600,
      color: theme.palette.neutralSecondary,
      display: isNavCollapsed ? 'none' : 'block',
    },
  };

  // Updated navLinkGroups with separators and section headers
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
      ],
    },
    // Use a separate group with a header to create a section
    {
      name: 'Configuration',
      links: [
        {
          name: 'Fyers Configuration',
          url: '/fyers-configuration',
          key: 'fyers-configuration',
          icon: 'PlugConnected',
        },
      ],
    },
    // Another section
    // {
    //   name: 'Developer Tools',
    //   links: [
    //     {
    //       name: 'API Documentation',
    //       url: '/api-docs',
    //       key: 'api-docs',
    //       icon: 'Code',
    //     },
    //     {
    //       name: 'SDK Examples',
    //       url: '/sdk-examples',
    //       key: 'sdk-examples',
    //       icon: 'CodeEdit',
    //     },
    //   ],
    // },
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
      margin: 0,
      padding: 0,
    },
    navToggle: {
      marginRight: 10,
      marginLeft: 5,
    },
    contentArea: {
      flex: 1,
      padding: 20,
      overflow: 'auto',
      margin: 0,
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
      marginRight: isNavCollapsed ? 0 : 8,
      fontSize: 20,
      textAlign: isNavCollapsed ? 'center' : undefined,
      width: isNavCollapsed ? '100%' : undefined,
    },
    navContainer: {
      padding: 0,
      margin: 0,
    }
  });

  const getSelectedKey = () => {
    if (location.pathname === '/') return 'home';
    
    const path = location.pathname.substring(1);
    return path;
  };

  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <Nav
          onLinkClick={handleLinkClick}
          selectedKey={getSelectedKey()}
          styles={navStyles}
          groups={navLinkGroups}
          expandAriaLabel={isNavCollapsed ? 'Expand' : 'Collapse'}
          expandedStateText="expanded"
          collapsedStateText="collapsed"
          isCollapsed={isNavCollapsed}
        />
      </div>

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