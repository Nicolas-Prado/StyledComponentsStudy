import { ThemeProvider } from 'styled-components'
import Header from "./Header"
import { Container } from "./Styles/Container.styled"
import GlobalStyles from "./Styles/Global";

const theme = {
    colors: {
        header: '#ebfbff',
        body: '#fff',
        footer: '#003333',
    },
}

export default function App(){
    return (
        <ThemeProvider theme = {theme}>
            <>
                <GlobalStyles />
                    <Header />
                    <Container>
                        <h1>El Psy Kongroo</h1>
                    </Container>
            </>
        </ThemeProvider>
    )
}