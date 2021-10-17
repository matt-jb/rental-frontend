import Link from 'next/link';
import styled from 'styled-components';
import Cart from './Cart';
import Nav from './Nav';
import Search from './Search';

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
                {/* CSS GOES HERE */}
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
                <Search />
            </div>
            <Cart />
        </HeaderStyles>
    )
}