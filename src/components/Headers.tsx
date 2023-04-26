import Image from 'next/image';
import Link from 'next/link';

const Headers = () => {
    return (
        <header>

            <Image src='/logo.svg' width={100} height={48} alt='logo' />
            <nav>
                <ul>
                    <li>
                        <Link href={''}>About Us</Link>
                    </li>
                    <li>
                        <Link href={''}>Woman</Link>
                    </li>
                    <li>
                        <Link href={''}>Men</Link>
                    </li>
                    <li>
                        <Link href={''}>Beauty</Link>
                    </li>
                    <li>
                        <Link href={''}>Accesories</Link>
                    </li>
                    <li>
                        <Link href={''}>Blog</Link>
                    </li>
                    <li>
                        <Link href={''}>Contact</Link>
                    </li>
                </ul>
            </nav>

            <div>
                <ul>
                    <li>
                        <Link href={''}><Image src={'/ico-search.svg'} alt={'ico-search'} width={24} height={24} /></Link>
                    </li>
                    <li>
                        <Link href={''}><Image src={'/ico-globe.svg'} alt={'ico-globe'} width={24} height={24} /></Link>
                    </li>
                    <li>
                        <Link href={''}><Image src={'/ico-user.svg'} alt={'ico-user'} width={24} height={24} /></Link>
                    </li>
                    <li>
                        <Link href={''}><Image src={'/ico-bag.svg'} alt={'ico-bag'} width={24} height={24} /></Link>
                    </li>
                </ul>
            </div>

        </header>
    )
}

export default Headers
