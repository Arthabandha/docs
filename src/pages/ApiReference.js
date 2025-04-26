import React, { useState } from 'react';
import {
  Text,
  Stack,
  IStackTokens,
  mergeStyleSets,
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  SearchBox,
  Pivot,
  PivotItem,
  useTheme,
  Separator,
  Shimmer,
  Toggle,
} from '@fluentui/react';

const ApiReference = () => {
  const theme = useTheme();
  const [searchText, setSearchText] = useState('');
  const [showOptional, setShowOptional] = useState(true);
  
  const stackTokens = { 
    childrenGap: 15,
  };

  const styles = mergeStyleSets({
    container: {
      maxWidth: '1000px',
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
    componentHeader: {
      backgroundColor: theme.palette.neutralLighterAlt,
      padding: '15px',
      borderRadius: '4px 4px 0 0',
      marginBottom: 0,
    },
    componentContent: {
      border: `1px solid ${theme.palette.neutralLight}`,
      borderTop: 'none',
      borderRadius: '0 0 4px 4px',
      padding: '15px',
      marginBottom: 20,
    },
    searchBoxContainer: {
      marginBottom: 15,
    },
    filterContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 15,
    },
  });

  // Sample data for Button component
  const buttonProps = [
    { key: 'text', name: 'text', type: 'string', required: true, defaultValue: '""', description: 'Text to render on the button' },
    { key: 'primary', name: 'primary', type: 'boolean', required: false, defaultValue: 'false', description: 'Whether the button is primary' },
    { key: 'disabled', name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: 'Whether the button is disabled' },
    { key: 'onClick', name: 'onClick', type: 'function', required: false, defaultValue: 'undefined', description: 'Callback function for click event' },
    { key: 'ariaLabel', name: 'ariaLabel', type: 'string', required: false, defaultValue: 'undefined', description: 'Accessible label for the button' },
  ];

  // Sample data for TextField component
  const textFieldProps = [
    { key: 'label', name: 'label', type: 'string', required: false, defaultValue: 'undefined', description: 'Label for the input field' },
    { key: 'value', name: 'value', type: 'string', required: false, defaultValue: '""', description: 'Current value of the text field' },
    { key: 'placeholder', name: 'placeholder', type: 'string', required: false, defaultValue: '""', description: 'Placeholder text for the input' },
    { key: 'onChange', name: 'onChange', type: 'function', required: false, defaultValue: 'undefined', description: 'Callback function when value changes' },
    { key: 'multiline', name: 'multiline', type: 'boolean', required: false, defaultValue: 'false', description: 'Whether the field supports multiple lines of text' },
    { key: 'disabled', name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: 'Whether the field is disabled' },
  ];

  // Sample data for Toggle component
  const toggleProps = [
    { key: 'label', name: 'label', type: 'string', required: false, defaultValue: 'undefined', description: 'Label for the toggle' },
    { key: 'checked', name: 'checked', type: 'boolean', required: false, defaultValue: 'false', description: 'Whether the toggle is checked/on' },
    { key: 'onChange', name: 'onChange', type: 'function', required: false, defaultValue: 'undefined', description: 'Callback function when toggle changes' },
    { key: 'onText', name: 'onText', type: 'string', required: false, defaultValue: '""', description: 'Text to display when toggle is on' },
    { key: 'offText', name: 'offText', type: 'string', required: false, defaultValue: '""', description: 'Text to display when toggle is off' },
    { key: 'disabled', name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: 'Whether the toggle is disabled' },
  ];

  // Columns for the details list
  const columns = [
    {
      key: 'name',
      name: 'Property',
      fieldName: 'name',
      minWidth: 100,
      maxWidth: 150,
      isResizable: true,
      onRender: (item) => {
        return (
          <span style={{ 
            fontWeight: item.required ? 600 : 'normal',
            color: item.required ? theme.palette.themePrimary : 'inherit'
          }}>
            {item.name}{item.required ? '*' : ''}
          </span>
        );
      }
    },
    { key: 'type', name: 'Type', fieldName: 'type', minWidth: 80, maxWidth: 100, isResizable: true },
    { key: 'defaultValue', name: 'Default', fieldName: 'defaultValue', minWidth: 100, maxWidth: 150, isResizable: true },
    { key: 'description', name: 'Description', fieldName: 'description', minWidth: 300, isResizable: true }
  ];

  // Filter the props based on search text and optional toggle
  const getFilteredProps = (props) => {
    return props.filter(prop => {
      // Filter by search text
      const matchesSearch = searchText === '' || 
        prop.name.toLowerCase().includes(searchText.toLowerCase()) ||
        prop.description.toLowerCase().includes(searchText.toLowerCase());
      
      // Filter by required/optional status
      const matchesOptionalFilter = showOptional || prop.required;
      
      return matchesSearch && matchesOptionalFilter;
    });
  };

  return (
    <div className={styles.container}>
      <Text className={styles.title}>API Reference</Text>
      
      <Text className={styles.paragraph}>
        Detailed API documentation for all components, including props, methods, and examples.
      </Text>
      
      <div className={styles.searchBoxContainer}>
        <SearchBox
          placeholder="Search API documentation..."
          onChange={(_, newValue) => setSearchText(newValue || '')}
          value={searchText}
        />
      </div>
      
      <div className={styles.filterContainer}>
        <Text>Filter Options:</Text>
        <Toggle
          label="Show optional props"
          checked={showOptional}
          onChange={(_, checked) => setShowOptional(checked)}
          onText="Show optional"
          offText="Required only"
        />
      </div>
      
      <Separator />

      <Pivot>
        <PivotItem headerText="Button">
          <div className={styles.componentHeader}>
            <Text className={styles.subtitle}>Button Component</Text>
            <Text className={styles.paragraph}>
              Buttons are used to trigger actions or events, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
            </Text>
          </div>
          <div className={styles.componentContent}>
            <DetailsList
              items={getFilteredProps(buttonProps)}
              columns={columns}
              selectionMode={SelectionMode.none}
              layoutMode={DetailsListLayoutMode.justified}
            />
          </div>
        </PivotItem>
        
        <PivotItem headerText="TextField">
          <div className={styles.componentHeader}>
            <Text className={styles.subtitle}>TextField Component</Text>
            <Text className={styles.paragraph}>
              Text fields allow users to enter text. They can be single-line or multi-line plain text editing controls.
            </Text>
          </div>
          <div className={styles.componentContent}>
            <DetailsList
              items={getFilteredProps(textFieldProps)}
              columns={columns}
              selectionMode={SelectionMode.none}
              layoutMode={DetailsListLayoutMode.justified}
            />
          </div>
        </PivotItem>
        
        <PivotItem headerText="Toggle">
          <div className={styles.componentHeader}>
            <Text className={styles.subtitle}>Toggle Component</Text>
            <Text className={styles.paragraph}>
              Toggles represent a physical switch that allows users to turn things on or off.
            </Text>
          </div>
          <div className={styles.componentContent}>
            <DetailsList
              items={getFilteredProps(toggleProps)}
              columns={columns}
              selectionMode={SelectionMode.none}
              layoutMode={DetailsListLayoutMode.justified}
            />
          </div>
        </PivotItem>
      </Pivot>
    </div>
  );
};

export default ApiReference;