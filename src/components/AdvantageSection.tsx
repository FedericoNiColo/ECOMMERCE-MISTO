import { Flex } from '@chakra-ui/react'

import AdvantageItem from './AdvantageItem'


export default function AdvantageSection() {
    return (
        <Flex justifyContent='space-between' margin='2rem 0'>
            <AdvantageItem title='Free Shipping' content='On all UA order or order above $100' icon='/ico-truck.svg' />
            <AdvantageItem title='30 days return' content='Simply return it within 30 doys for on exchange' icon='/ico-return.svg' />
            <AdvantageItem title='Support 24/7' content='Contact us 24 hours a dat, 7 days a week' icon='/ico-support.svg' />
        </Flex>
    )
}
