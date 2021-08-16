import Link from 'next/link';

export default function Nav() {
    return(
        <nav>
            <Link href="/products">Products</Link>
            <Link href="/sell">Sell</Link>
            <Link href="/rent">Rent</Link>
            <Link href="/orders">Orders</Link>
            <Link href="/account">Account</Link>
        </nav>
    );
}