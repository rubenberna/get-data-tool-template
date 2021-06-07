import React from 'react';
import { Box, Text, Newline } from 'ink';


export const SuccessMsg = ({name, packageManager, completed}) => {
  return (
    <>
      {
        completed &&
        <Box borderStyle="round" borderColor="green" width={40} padding={2}>
          <Text>
            <Text italic>To start your project:</Text>
            <Newline/>
            <Text>cd <Text color="green" bold>{name}</Text></Text>
            <Newline />
            <Text color="green" bold>{packageManager} install</Text>
						<Newline />
						<Newline />
						<Text>cd example</Text>
						<Newline />
						<Text color="green" bold>{packageManager} install</Text>
						<Newline/>
						<Newline/>
            <Text>To run your project:</Text>
						<Newline />
						<Text color="green" bold>{packageManager} start</Text>
            <Newline />
            <Newline />
            <Text italic>To publish your project:</Text>
            <Newline/>
            <Text color="green" bold>{packageManager} publish</Text>
            <Newline />
            <Newline />
            <Text italic>"If you build it, they will come!"</Text>
          </Text>
        </Box>
      }
    </>
  )
}
