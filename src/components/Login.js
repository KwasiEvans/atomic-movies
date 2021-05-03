import styled from 'styled-components'

const Login = (props) => {
    return(
        <Container>
        <Content>
        <CTA>
            <CTALogoOne src='https://www.husham.com/wp-content/uploads/2020/04/1586073536_Best-Movies-to-Watch-on-Netflix-Amazon-Prime-Hulu-amp.png' alt=""/>
            <SignUp>GET STARTED</SignUp>
            <Description>
                Get Premier Access to Legacies and other movies as well
                with Atomic Movies subscription. As 0f 01/05/21.
            </Description>
            <CTALogoTwo src='/images/cta-logo-two.png' alt=''/>
        </CTA>
            <BgImage />
        </Content>
    </Container>
    )
};

// This is the styling potion
const Container = styled.section`
overflow: hidden;
display:flex;
flex-direction:column;
text-align:center;
height:100vh;
`;

const Content = styled.div`
margin-bottom:10w;
width:100%;
position:relative;
min-height:100vh;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding:80px 40px;
height:100%;
`;

const BgImage = styled.div`
top:0;
right:0;
left:0;
z-index:-1;
height:100%;
background-position:top;
background-size:cover;
background-repeat:no-repeat;
position:absolute;
background-image:url(https://i.redd.it/q3uig11152p11.jpg);
`;

const CTA = styled.div`
margin-bottom:2vw;
max-width:650px;
flex-wrap:wrap;
display:flex;
flex-direction:column;
justify-content:center;
margin-top:0;
align-items:center;
text-align:center;
margin-right:auto;
margin-left:auto;
transition-timing-function:ease-out;
transition:opacity 0.2s;
width:100%;
max-width:650px;
width:100%;
flex-direction:column;
`;


const CTALogoOne = styled.img`
margin-bottom:12px;
max-width:600px;
min-height:1px;
display:block;
width:100%;
height:150px;
`;

const SignUp = styled.a`
font-weight:bold;
color:white;
background-color:#0063e5;
margin-bottom:12px;
width:100%;
letter-spacing:1.5px;
font-size:18px;
padding:16.5px 0;
border:1px solid transparent;
border-radius:22px;

&:hover {
    background-color:#0483ee;
}
`;

const Description = styled.h2`
color:hsla(0, 0%, 95.3%, 1);
font-size:11px;
margin: 0 0 24px;
line-height:1.5px;
letter-spacing:1.5px;
`;

const CTALogoTwo = styled.img`
max-width:600px;
margin-bottom:20px;
display:inline-block;
vertical-align:bottom;
background-color:gray;
width:100%;
border:1px solid transparent;
border-radius:12px;

`;
export default Login; 