import Image from 'next/image';
import Link from 'next/link';
import { Flex, Box } from '@chakra-ui/react'

const TopBar = () => {
    return (
        <Flex bg='black' w='100%' p={2} color='white' justifyContent="space-between" fontSize='xs'>

            <Flex gap="1.5rem">
                <Flex as={Link} href={''} alignItems='center' gap='0.5rem'><Image src={'/ico-small-phone.svg'} alt={'ico-small-phone'} width={24} height={24} />+38 (050) 12 34 567</Flex>

                <Flex as={Link} href={''} alignItems='center' gap='0.5rem'><Image src={'/ico-small-location.svg'} alt={'ico-small-location'} width={24} height={24} />Ucraine, Kyiv, Khreshchatyk</Flex>

                <Flex as={Link} href={''} alignItems='center' gap='0.5rem'><Image src={'/ico-small-clock.svg'} alt={'ico-small-clock'} width={24} height={24} />All week 24/7</Flex>
            </Flex>

            <Flex gap='1rem'>
                <Link href="#"><Image src={'/ico-small-fb.svg'} alt={'ico-small-fb'} width={24} height={24} /></Link>

                <Link href="#"><Image src={'/ico-small-tw.svg'} alt={'ico-small-tw'} width={24} height={24} /></Link>

                <Link href="#"><Image src={'/ico-small-ig.svg'} alt={'ico-small-ig'} width={24} height={24} /></Link>

                <Link href="#"><Image src={'/ico-small-pin.svg'} alt={'ico-small-pin'} width={24} height={24} /></Link>
            </Flex>
        </Flex >
    )
}

export default TopBar
