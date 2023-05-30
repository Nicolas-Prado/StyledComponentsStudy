import { ThemeProvider } from 'styled-components'
import Header from "./Header"
import Card from './Cart';
import Footer from './Footer';
import { Container } from "./Styles/Container.styled"
import GlobalStyles from "./Styles/Global";
import content from '../content'

const theme = {
    colors: {
        header: '#ebfbff',
        body: '#fff',
        footer: '#003333',
    },
    mobile: '768px'
}

export default function App(){
    return (
        <ThemeProvider theme = {theme}>
            <>
                <GlobalStyles />
                    <Header />
                    <Container>
                        {content.map((item, index) => 
                            <Card key={index} item={item}/>
                        )}
                    </Container>
                    <Footer />
            </>
        </ThemeProvider>
    )
}