import Image from 'next/image';
import Link from 'next/link';
import { Flex, Box, Container, Menu, MenuButton, IconButton, MenuList, MenuItem, Show } from '@chakra-ui/react'
import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons';

const menu = [
    {
        title: 'About Us',
        href: '#'
    },
    {
        title: 'Woman',
        href: '#'
    },
    {
        title: 'Men',
        href: '#'
    },
    {
        title: 'Beauty',
        href: '#'
    },
    {
        title: 'Accesories',
        href: '#'
    },
    {
        title: 'Blog',
        href: '#'
    },
    {
        title: 'Contact',
        href: '#'
    },
]

export default function Headers() {
    return (
        <Flex w='100%' as='header' borderBottom='solid 2px' borderColor='gray.100'>
            <Container as={Flex} justifyContent="space-between" alignItems='center'>

                <Flex gap='0.5rem' margin='1rem 0'>
                    <Show below='lg'>
                        <Box as='nav'>
                            <Menu>
                                <MenuButton
                                    as={IconButton}
                                    aria-label='Options'
                                    icon={<HamburgerIcon />}
                                    variant='outline'
                                />
                                <MenuList>
                                    {
                                        menu.map((item, index) => (
                                            <MenuItem key={index}>
                                                <Link href={item.href}>{item.title}</Link>
                                            </MenuItem>
                                        ))
                                    }
                                </MenuList>
                            </Menu>
                        </Box>
                    </Show>

                    <Image src='/logo.svg' width={100} height={48} alt='logo' />
                </Flex>

                <Show above='lg'>
                    <Box as='nav'>
                        <Flex as='ul' listStyleType='none' gap='2rem'>
                            {
                                menu.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.href}>{item.title}</Link>
                                    </li>
                                ))
                            }
                        </Flex>
                    </Box>
                </Show>

                <div>
                    <Flex as='ul' listStyleType='none' gap='1.5rem'>

                        <li><Link href={''}><Image src={'/ico-search.svg'} alt={'ico-search'} width={24} height={24} /></Link></li>
                        <li><Link href={''}><Image src={'/ico-globe.svg'} alt={'ico-globe'} width={24} height={24} /></Link></li>
                        <li><Link href={''}><Image src={'/ico-user.svg'} alt={'ico-user'} width={24} height={24} /></Link></li>
                        <li><Link href={''}><Image src={'/ico-bag.svg'} alt={'ico-bag'} width={24} height={24} /></Link></li>

                    </Flex>
                </div>

            </Container>
        </Flex >
    )
}

