import React from 'react';
import {
  Text,
  Stack,
  IStackTokens,
  mergeStyleSets,
  Link,
  Separator,
  useTheme,
} from '@fluentui/react';

const GettingStarted = () => {
  const theme = useTheme();
  
  const stackTokens = { 
    childrenGap: 15 
  };

  const styles = mergeStyleSets({
    container: {
      maxWidth: '900px',
    },
    title: {
      fontSize: 28,
      fontWeight: 600,
      color: theme.palette.neutralPrimary,
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 20,
      fontWeight: 600,
      color: theme.palette.neutralPrimary,
      marginTop: 20,
      marginBottom: 10,
    },
    paragraph: {
      fontSize: 16,
      lineHeight: 22,
      color: theme.palette.neutralSecondary,
      marginBottom: 15,
    },
    codeBlock: {
      backgroundColor: theme.palette.neutralLighter,
      padding: '15px',
      borderRadius: '4px',
      fontFamily: 'monospace',
      overflowX: 'auto',
      marginBottom: 15,
    },
    inlineCode: {
      backgroundColor: theme.palette.neutralLighter,
      padding: '2px 4px',
      borderRadius: '2px',
      fontFamily: 'monospace',
      fontSize: 14,
    },
    note: {
      backgroundColor: theme.palette.neutralLighterAlt,
      padding: '15px',
      borderLeft: `4px solid ${theme.palette.themePrimary}`,
      marginBottom: 15,
    },
  });

  return (
    <div className={styles.container}>
      <Text className={styles.title}>Getting Started</Text>
      
      <Text className={styles.paragraph}>
        Welcome to the getting started guide. This page will help you set up your project and understand the basics.
      </Text>
      
      <Separator />
      
      <Text className={styles.subtitle}>Prerequisites</Text>
      <Text className={styles.paragraph}>
        Before you begin, make sure you have the following installed:
      </Text>
      <ul>
        <li>
          <Text className={styles.paragraph}>
            Node.js (version 14 or higher)
          </Text>
        </li>
        <li>
          <Text className={styles.paragraph}>
            npm or yarn package manager
          </Text>
        </li>
      </ul>
      
      <Text className={styles.subtitle}>Installation</Text>
      <Text className={styles.paragraph}>
        Install the package using npm:
      </Text>
      <div className={styles.codeBlock}>
        <code>npm install my-library</code>
      </div>
      
      <Text className={styles.paragraph}>
        Or if you prefer using yarn:
      </Text>
      <div className={styles.codeBlock}>
        <code>yarn add my-library</code>
      </div>
      
      <Text className={styles.subtitle}>Basic Usage</Text>
      <Text className={styles.paragraph}>
        Here's a simple example of how to use the library:
      </Text>
      <div className={styles.codeBlock}>
        <pre><code>{`import { Component } from 'my-library';

function App() {
  return (
    <div>
      <Component 
        title="Hello World" 
        description="This is my first component"
      />
    </div>
  );
}`}</code></pre>
      </div>
      
      <div className={styles.note}>
        <Text className={styles.paragraph} style={{ marginBottom: 0 }}>
          <strong>Note:</strong> Make sure to import the component from the correct path. If you're having issues, check the import path in your code.
        </Text>
      </div>
      
      <Text className={styles.subtitle}>Configuration</Text>
      <Text className={styles.paragraph}>
        You can configure the library by creating a config file in your project root:
      </Text>
      <div className={styles.codeBlock}>
        <pre><code>{`// my-library.config.js
module.exports = {
  theme: 'light',
  debug: false,
  apiUrl: 'https://api.example.com'
};`}</code></pre>
      </div>
      
      <Text className={styles.subtitle}>Next Steps</Text>
      <Text className={styles.paragraph}>
        Now that you have set up the library, you can:
      </Text>
      <ul>
        <li>
          <Text className={styles.paragraph}>
            <Link href="/components">Explore the components</Link> available in the library
          </Text>
        </li>
        <li>
          <Text className={styles.paragraph}>
            Check out the <Link href="/api-reference">API reference</Link> for detailed documentation
          </Text>
        </li>
      </ul>
    </div>
  );
};

export default GettingStarted;