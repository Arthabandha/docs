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

const FyersConfiguration = () => {
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
      <Text className={styles.title}>Fyers Configuration</Text>
      <br /><br />
      <Text className={styles.paragraph}>Todo</Text>
    </div>
  );
};

export default FyersConfiguration;