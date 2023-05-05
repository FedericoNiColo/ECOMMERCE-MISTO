import { SimpleGrid, Text } from '@chakra-ui/react'

import PromoBanner from './PromoBanner'

import banner1 from '/public/banner-new-season.jpg'
import banner2 from '/public/banner-sale.jpg'


export default function BannerSection() {
    return (
        <SimpleGrid minChildWidth='255px' spacing={{ base: '1rem', md: '2rem' }}>

            <PromoBanner image={banner1}>
                <Text fontSize='sm' color='gray.500'>
                    New Season
                </Text>
                <Text fontSize='lg' fontWeight='bold' whiteSpace='nowrap'>
                    Lookbook collection
                </Text>
            </PromoBanner>

            <PromoBanner image={banner2}>
                <Text fontSize='sm' color='gray.500'>
                    Sale
                </Text>
                <Text fontSize='lg' textTransform='uppercase' fontWeight='bold' whiteSpace='nowrap'>
                    Get up to {' '} <Text as='span' color='red.500'>50% off</Text>
                </Text>
            </PromoBanner>

        </SimpleGrid>
    )
}
