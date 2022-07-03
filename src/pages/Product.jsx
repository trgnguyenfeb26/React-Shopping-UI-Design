import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div`

`;

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src=""/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Denmi Jumpsuit</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos facilis dolorem perspiciatis suscipit quas similique a nemo cum, tempora vel, rem, fuga id. Corporis sapiente alias accusantium praesentium aliquid facere?</Desc>
                    <Price> 20$</Price>

                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product