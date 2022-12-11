import Link from 'next/link';
import React from 'react'
import styled, { isStyledComponent } from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: 
    linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
    ),
     url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
     display: flex;
  align-items: center;
  justify-content: center;

`
const Wrapper = styled.div`
display: flex;
width: 40%;
background-color: white;
padding: 20px;
flex-direction: column;

`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`



const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`

const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`


const Button = styled.button`
    border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  width: 40%;
`
const Details = styled.span`
    font-size: 16px;
    font-weight: 300;
    display: flex;
    gap: 0.5rem;
    margin-top: 10px;
`
const Anc = styled.span`
    font-size: 16px;
    font-weight: 300;
    text-decoration: underline;
    cursor: pointer;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>
                    Create a Account
                </Title>
                <Form>
                    <Input type={"text"} placeholder='First Name' />
                    <Input type={"text"} placeholder='Last Name' />
                    <Input type={"text"} placeholder='Username' />
                    <Input type={"email"} placeholder='Email' />
                    <Input type={"password"} placeholder='Password' />
                    <Input type={"password"} placeholder='Confirm Password' />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>Register</Button>
                </Form>
                <Details>
                    Already have an Account?
                    <Link href={'/login'}><Anc>Login</Anc></Link>
                </Details>
            </Wrapper>
        </Container>
    )
}

export default Register;