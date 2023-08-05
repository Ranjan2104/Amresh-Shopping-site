import { Box, Stack, ThemeProvider, createTheme } from '@mui/material'
import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Middlebar from '../Components/Middlebar'
import Rightbar from '../Components/Rightbar'

const Home = () => {
    const [urlPath, setPath] = useState('home');
    const[mode, setMode] = useState("light");
    const darkTheme = createTheme({
      palette: {
        mode: mode
      }
    })
    return (
        <ThemeProvider theme={darkTheme}>
            <Box p={2} bgcolor={"background.default"} color={"text.primary"}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                >
                    <Sidebar setPath={setPath} mode={mode} setMode = {setMode} />
                    <Middlebar urlPath={urlPath} />
                    <Rightbar urlPath={urlPath}/>
                </Stack>
            </Box>
        </ThemeProvider>
    )
}

export default Home