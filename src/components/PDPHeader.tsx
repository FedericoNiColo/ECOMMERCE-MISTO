import { Box, Button, Container, Flex, Heading, ListIcon, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { slugify } from '@/utils/sluglify';
import Link from 'next/link';

import Rating from '@/components/Rating';
import { ShareIcon } from '@/icons/Share';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Product } from '@/pages';

type Props = {
    product: Product;
}

export default function PDPHeader( { product: { id, title, price, image, rating, category, description } }: Props ) {
    return (
        <Box bg='gray.100' padding='1rem'>
            <Container>

                <Flex justifyContent='space-between' alignItems='center' marginBottom='1rem'>
                    <Flex as={UnorderedList} listStyleType='none' gap='2'>
                        <ListItem whiteSpace='nowrap'>
                            <Link href='/'>Home</Link>
                            <ListIcon w={18} h={18} as={ChevronRightIcon} color='gray.700' marginLeft='0.5rem' />
                        </ListItem>
                        <ListItem whiteSpace='nowrap'>
                            <Link href={`${category}`}>{category}</Link>
                            <ListIcon w={18} h={18} as={ChevronRightIcon} color='gray.700' marginLeft='0.5rem' />
                        </ListItem>
                        <ListItem noOfLines={1}>{title}</ListItem>
                    </Flex>

                    <Button color='gray' variant='ghost' leftIcon={<ShareIcon />}>Share</Button>
                </Flex>

                <Heading as='h1' fontSize='2xl' textAlign='center'>
                    {title}
                </Heading>

                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex gap='0.5rem' alignItems='baseline'>
                        <Rating rate={rating.rate} />
                        <Text>2 Reviews</Text>
                    </Flex>

                    <Flex gap={5}>
                        <Text>Sku: <Text as='span' color='gray.500'>{id}</Text></Text>
                        <Text>Availability: <Text as='span' color='gray.500'>In Stock</Text></Text>
                    </Flex>
                </Flex>
            </Container>
        </Box >
    )
}
