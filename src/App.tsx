import {
  ChakraProvider,
  VStack,
  theme,
} from "@chakra-ui/react"
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  TableContainer,
} from '@chakra-ui/react'
import { useEffect, useState } from "react"
import { LogModel } from "./LogModel"

const App = () => {
  const [logs, setLogs] = useState<LogModel[]>([])

  useEffect(() => {
    fetch("https://localhost:44371/Log", { method: "GET", }).then((response) => response.json()).then((json) => setLogs(json))
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <Heading >Technical Interview Assignment</Heading>
        <Heading size="md">Logging Library</Heading>
        <TableContainer mt={500}>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>Level</Th>
                <Th>(Message)</Th>
                <Th>(Exception)</Th>
                <Th>Date</Th>
              </Tr>
            </Thead>
            <Tbody>
              {logs.map(log => (
                <Tr>
                  <Td>{log.level}</Td>
                  <Td>{log.message}</Td>
                  <Td>{log.exception.message + " " + log.exception.stacktrace}</Td>
                  <Td>{new Date(log.createdOn).toDateString()}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </ChakraProvider>
  )
}

export default App
