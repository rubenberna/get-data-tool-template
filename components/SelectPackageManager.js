import React from 'react';
import SelectInput from 'ink-select-input';
import { Box, Text } from 'ink';

export const SelectPackageManager = ({ selectManager, packageManager }) => {

  const items = [
    {
      label: 'Yarn (recommended)',
      value: 'yarn'
    },
    {
      label: 'Npm',
      value: 'npm'
    }
  ]

  return (
    <>
      { !packageManager &&
      <Box flexDirection="column">
        <Text>What's your favourite package manager?</Text>
        <SelectInput items={items} onSelect={selectManager}/>
      </Box>
      }
    </>
  )
}