import React from 'react';
import { Link } from 'react-router-dom';
import {
  Text,
  Stack,
  DocumentCard,
  DocumentCardTitle,
  DocumentCardDetails,
  IStackTokens,
  DefaultButton,
  FontIcon,
  useTheme,
  mergeStyleSets,
} from '@fluentui/react';

const HomePage = () => {
  const theme = useTheme();
  
  const stackTokens = { 
    childrenGap: 15,
    padding: 10,
  };

  const cardStackTokens = {
    childrenGap: 20,
  };

  const styles = mergeStyleSets({
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    hero: {
      backgroundColor: theme.palette.themeLighterAlt,
      padding: '60px 20px',
      textAlign: 'center',
      borderRadius: 4,
      margin: '0 0 30px',
    },
    heroTitle: {
      fontSize: 32,
      fontWeight: 600,
      color: theme.palette.themePrimary,
      marginBottom: 16,
    },
    heroSubtitle: {
      fontSize: 18,
      color: theme.palette.neutralPrimary,
      maxWidth: 600,
      margin: '0 auto 20px',
    },
    section: {
      marginBottom: 40,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 600,
      marginBottom: 16,
    },
    card: {
      maxWidth: 320,
      minHeight: 150,
    },
    cardTitle: {
      padding: '16px 16px 0',
    },
    cardIcon: {
      fontSize: 24,
      color: theme.palette.themePrimary,
      marginRight: 8,
    },
    cardContent: {
      padding: '0 16px 16px',
    },
    buttonContainer: {
      padding: '0 16px 16px',
    },
  });

  const cards = [
    {
      title: 'Getting Started',
      icon: 'Rocket',
      description: 'Learn how to set up your first project and understand the basics.',
      url: '/getting-started',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Text className={styles.heroTitle}>Documentation Portal</Text>
        <br />
        <br />
        <Text className={styles.heroSubtitle}>
          Comprehensive guides, API references, and examples to help you build amazing applications
        </Text>
        <br />
        <br />
        <Link to="/getting-started" style={{ textDecoration: 'none' }}>
          <DefaultButton primary text="Get Started" />
        </Link>
      </div>

      <div className={styles.section}>
        <Text className={styles.sectionTitle}>Documentation</Text>
        <br />
        <br />
        <Stack horizontal tokens={cardStackTokens} wrap>
          {cards.map((card, index) => (
            <DocumentCard key={index} className={styles.card}>
              <DocumentCardDetails>
                <Stack horizontal verticalAlign="center" className={styles.cardTitle}>
                  <FontIcon iconName={card.icon} className={styles.cardIcon} />
                  <DocumentCardTitle title={card.title} />
                </Stack>
                <div className={styles.cardContent}>
                  <Text>{card.description}</Text>
                </div>
                <div className={styles.buttonContainer}>
                  <Link to={card.url} style={{ textDecoration: 'none' }}>
                    <DefaultButton text="Learn More" />
                  </Link>
                </div>
              </DocumentCardDetails>
            </DocumentCard>
          ))}
        </Stack>
      </div>
    </div>
  );
};

export default HomePage;