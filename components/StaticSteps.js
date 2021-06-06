import React from 'react';
import { Box, Text, Static } from 'ink';

export const StaticSteps = ({steps}) => {
  return (
    <Static items={steps}>
      {step => (
        <Box key={step.nr}>
          { step.success ?
						<Text>
							<Text color="#006064">✔ </Text>
							<Text color="#fff">{step.title}</Text>
						</Text>
            :
            <Text color="red">&#x261E; {step.title}</Text>
          }
        </Box>
      )}
    </Static>
  )
}
