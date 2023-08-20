import React from 'react'
import Header from '../../common/Header'
import theme from '../../assets/Theme'
import { ThemeProvider } from '@mui/material'
import Theme from '../../assets/Theme'
const Home = () => {
  const theme =Theme();
  return (
    <>
    <Header/>
    <ThemeProvider sx={{theme.palette.primarylight}}><div>Home</div></ThemeProvider>
    
    </>
  )
}

export default Home