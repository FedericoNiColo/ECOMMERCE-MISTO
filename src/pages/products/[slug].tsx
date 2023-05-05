import { Product as ProductModel } from '../index';
import { slugify } from '@/utils/sluglify';

import PDPHeader from '@/components/PDPHeader';

import { FormatPrice } from '@/utils/FormatPrice';
import { AspectRatio, Box, Button, Container, Divider, Flex, Grid, Heading, Text } from '@chakra-ui/react';

import Image from 'next/image';
import Link from 'next/link';

import logoPaypal from 'public/logo_paypal.png'
import logoMastercard from 'public/logo_mastercard.png'
import logoVisa from 'public/logo_visa.png'
import logoStripe from 'public/logo_stripe.png'
import logoDiscover from 'public/logo_discover.png'
import logoAmex from 'public/logo_amex.png'
import logoAes from 'public/logo_aes256.png'

type Props = {
    product: ProductModel;
};


export default function Product({ product }: Props) {
    const { price, category, image, description } = product
    return (
        <>
            <PDPHeader product={product} />
            <Container marginTop='2rem'>
                <Grid gridTemplateColumns={'1fr 548px'} gap='2rem'>
                    <AspectRatio position='relative' ratio={1} maxWidth='100%' marginBottom='1rem'>
                        <Image
                            src={image}
                            alt=''
                            fill={true}
                            style={{ objectFit: 'contain' }}
                        />
                    </AspectRatio>

                    <Box>
                        <Heading as='h3' textTransform='uppercase' fontSize='md' mb='0.8rem' color='gray.500'>
                            Description
                        </Heading>
                        <Text>{description}</Text>

                        <Divider my='2rem' />

                        <Flex alignItems='center' gap='1.5rem'>

                            <Text fontSize='xl' fontWeight='bold'>{FormatPrice(price)}</Text>
                            <Button backgroundColor='black'>Add to cart</Button>
                            <Link href='#'>
                                <Image src='/ico-like.svg' alt='' width='24' height='24' />
                            </Link>
                            <Link href='#'>
                                <Image src='/ico-legal.svg' alt='' width='24' height='24' />
                            </Link>
                        </Flex>

                        <Divider my='2rem' />

                        <Flex alignItems='center' gap='2rem' fontSize='xs' mb='2rem'>

                            <Flex as={Link} href='#' alignItems='center' gap='0.25rem'>
                                <Image src='/ico-truck.svg' alt='' width='24' height='24' />
                                Shipping & Delivery
                            </Flex>
                            <Flex as={Link} href='#' alignItems='center' gap='0.25rem'>
                                <Image src='/ico-return.svg' alt='' width='24' height='24' />
                                Rerurns & Exchanges
                            </Flex>
                            <Flex as={Link} href='#' alignItems='center' gap='0.25rem'>
                                <Image src='/ico-mail.svg' alt='' width='24' height='24' />
                                Ask a question
                            </Flex>

                        </Flex>

                        <Flex alignItems='center' gap='1.5rem'>
                            <Heading as='h3' whiteSpace='nowrap' textTransform='uppercase' color='gray.500' fontSize='md'>
                                Guaranteed Safe Checkout
                            </Heading>
                            <Divider />
                        </Flex>

                        <Flex alignItems='center' gap='0.5rem' mt='1.5rem'>
                            <Image src={logoPaypal} alt='' />
                            <Image src={logoVisa} alt='' />
                            <Image src={logoMastercard} alt='' />
                            <Image src={logoDiscover} alt='' />
                            <Image src={logoAes} alt='' />
                            <Image src={logoAmex} alt='' />
                            <Image src={logoStripe} alt='' />
                        </Flex>

                        <Divider my='2rem' />
                    </Box>

                </Grid>
            </Container >
        </>
    )
}
















// Generates `/products/1` and `/products/2`
export async function getStaticPaths() {
    const products = await fetch('https://fakestoreapi.com/products').then((res) => res.json());

    const slugs: string[] = products.map((product: ProductModel) => {
        return `${slugify(product.title)}-${product.id}`;
    });

    return {
        // paths: [{ params: { slug: '1' } }, { params: { slug: '2' } }],
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false, // can also be true or 'blocking'
    };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: { params: { slug: string } }) {
    const id = parseInt(context.params.slug.split('-').pop() as string);

    const products: ProductModel[] = await fetch('https://fakestoreapi.com/products').then((res) => res.json());

    const product: ProductModel | undefined = products.find((product: ProductModel) => {
        return product.id === id;
    });

    const relatedProducts = products.filter((item: ProductModel) => {
        return item.category === product?.category && item.id !== product?.id;
    });

    return {
        // Passed to the page component as props
        props: {
            product,
            relatedProducts,
        },
    };
}
