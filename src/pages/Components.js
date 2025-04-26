import React, { useState } from 'react';
import {
  Text,
  Stack,
  IStackTokens,
  mergeStyleSets,
  DefaultButton,
  PrimaryButton,
  Toggle,
  TextField,
  Dropdown,
  ChoiceGroup,
  Checkbox,
  Slider,
  useTheme,
  SpinButton,
  Label,
  Separator,
} from '@fluentui/react';

const Components = () => {
  const theme = useTheme();
  const [textValue, setTextValue] = useState('');
  const [toggleValue, setToggleValue] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('');
  const [choiceValue, setChoiceValue] = useState('option1');
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [spinValue, setSpinValue] = useState('0');

  const stackTokens = { 
    childrenGap: 20,
    padding: 10,
  };

  const componentGroupTokens = {
    childrenGap: 10,
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
    componentContainer: {
      padding: 20,
      backgroundColor: theme.palette.neutralLighterAlt,
      borderRadius: 4,
      marginBottom: 20,
    },
    componentTitle: {
      fontSize: 18,
      fontWeight: 600,
      marginBottom: 10,
    },
    componentDescription: {
      fontSize: 14,
      marginBottom: 15,
    },
    exampleContainer: {
      padding: 15,
      backgroundColor: theme.palette.white,
      borderRadius: 4,
    },
  });

  // Dropdown options
  const dropdownOptions = [
    { key: 'option1', text: 'Option 1' },
    { key: 'option2', text: 'Option 2' },
    { key: 'option3', text: 'Option 3' },
  ];

  // Choice group options
  const choiceGroupOptions = [
    { key: 'option1', text: 'Option 1' },
    { key: 'option2', text: 'Option 2' },
    { key: 'option3', text: 'Option 3' },
  ];

  return (
    <div className={styles.container}>
      <Text className={styles.title}>Components</Text>
      
      <Text className={styles.paragraph}>
        Explore the various components available in our library. Each component comes with examples and usage guidelines.
      </Text>
      
      <Separator />

      {/* Buttons */}
      <div className={styles.componentContainer}>
        <Text className={styles.componentTitle}>Buttons</Text>
        <Text className={styles.componentDescription}>
          Buttons are used to trigger actions or events, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
        </Text>
        
        <div className={styles.exampleContainer}>
          <Stack horizontal tokens={{ childrenGap: 10 }}>
            <DefaultButton text="Standard Button" onClick={() => alert('Clicked standard button')} />
            <PrimaryButton text="Primary Button" onClick={() => alert('Clicked primary button')} />
            <DefaultButton text="Disabled Button" disabled />
          </Stack>
        </div>
      </div>

      {/* Text Input */}
      <div className={styles.componentContainer}>
        <Text className={styles.componentTitle}>Text Input</Text>
        <Text className={styles.componentDescription}>
          Text fields allow users to enter text. They can be single-line or multi-line plain text editing controls.
        </Text>
        
        <div className={styles.exampleContainer}>
          <Stack tokens={componentGroupTokens}>
            <TextField 
              label="Standard Text Field" 
              value={textValue}
              onChange={(e, newValue) => setTextValue(newValue)}
              placeholder="Enter some text"
            />
            <TextField 
              label="Multiline Text Field" 
              multiline 
              rows={3}
              placeholder="Enter multiple lines of text"
            />
            <TextField 
              label="Disabled Text Field" 
              disabled
              value="You cannot edit this field"
            />
          </Stack>
        </div>
      </div>

      {/* Toggle */}
      <div className={styles.componentContainer}>
        <Text className={styles.componentTitle}>Toggle</Text>
        <Text className={styles.componentDescription}>
          Toggles represent a physical switch that allows users to turn things on or off.
        </Text>
        
        <div className={styles.exampleContainer}>
          <Stack tokens={componentGroupTokens}>
            <Toggle 
              label="Standard Toggle" 
              checked={toggleValue}
              onChange={(e, checked) => setToggleValue(checked)}
              onText="On"
              offText="Off"
            />
            <Toggle 
              label="Disabled Toggle" 
              disabled
              checked={true}
              onText="On"
              offText="Off"
            />
          </Stack>
        </div>
      </div>

      {/* Dropdown */}
      <div className={styles.componentContainer}>
        <Text className={styles.componentTitle}>Dropdown</Text>
        <Text className={styles.componentDescription}>
          Dropdowns allow users to select one option from a list.
        </Text>
        
        <div className={styles.exampleContainer}>
          <Stack tokens={componentGroupTokens}>
            <Dropdown
              label="Standard Dropdown"
              placeholder="Select an option"
              options={dropdownOptions}
              selectedKey={dropdownValue}
              onChange={(e, option) => setDropdownValue(option.key)}
            />
            <Dropdown
              label="Disabled Dropdown"
              disabled
              placeholder="You cannot select an option"
              options={dropdownOptions}
            />
          </Stack>
        </div>
      </div>

      {/* Other form components */}
      <div className={styles.componentContainer}>
        <Text className={styles.componentTitle}>Other Form Components</Text>
        <Text className={styles.componentDescription}>
          Various other form components for collecting user input.
        </Text>
        
        <div className={styles.exampleContainer}>
          <Stack tokens={componentGroupTokens}>
            <Label>Choice Group</Label>
            <ChoiceGroup
              options={choiceGroupOptions}
              selectedKey={choiceValue}
              onChange={(e, option) => setChoiceValue(option.key)}
            />
            
            <Checkbox
              label="Standard Checkbox"
              checked={checkboxValue}
              onChange={(e, checked) => setCheckboxValue(checked)}
            />

            <Label>Slider</Label>
            <Slider
              min={0}
              max={100}
              step={1}
              value={sliderValue}
              onChange={value => setSliderValue(value)}
              showValue
            />

            <SpinButton
              label="Spin Button"
              min={0}
              max={100}
              step={1}
              value={spinValue}
              onIncrement={(value) => setSpinValue(String(Number(value) + 1))}
              onDecrement={(value) => setSpinValue(String(Math.max(0, Number(value) - 1)))}
              onValidate={(value) => setSpinValue(value)}
            />
          </Stack>
        </div>
      </div>

    </div>
  );
};

export default Components;