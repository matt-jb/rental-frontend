import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.h1` 
    font-size: 4rem;
    margin-left: 2rem;
    position: relative;
    z-index: 2;

    a {
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        color: #213E3B;
        background-color: #fc5185;
        padding: 0.5rem 1rem;
        border-radius: 25px;
    }
`;

const HeaderStyles = styled.header`
    .bar {
        border-bottom: 10px solid #213E3B;
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;
        align-items: center;
    }

    .sub-bar {
        display: grid;
        grid-template-columns: 1fr auto;
        border-bottom: 10px solid #213E3B;
    }
`;

export default function Header() {
    return (
        <HeaderStyles>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
            </style>
            <div className="bar">
                <Logo>
                    <Link href="/">
                        Rental
                    </Link>
                </Logo>
                <Nav />
            </div>
            <div className="sub-bar">
                <p>Search</p>
            </div>
        </HeaderStyles>
    )
}