import Head from 'next/head'
import Image from 'next/image';
import { GetServerSidePropsContext } from 'next';

import { Box, Button, Container, Flex, FormControl, FormHelperText, FormLabel, Grid, GridItem, Heading, Input, SimpleGrid, Text } from '@chakra-ui/react';

import HomeHeroCategories from '@/components/HomeHeroCategories';
import AdvantageSection from '@/components/AdvantageSection';
import HomeProductsGrid from '@/components/HomeProductsGrid';
import BannerSection from '@/components/BannerSection';

import groupsProductsByCategory, { GroupedProducts } from '@/utils/groupsProductsByCategory';

import woman from '/public/woman-standing.png'
import men from '/public/men-walking.png'


export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    count: number;
    rate: number;
  }
}

type Categories = "electronics" | "jewelery" | "men's clothing" | "women's clothing";

type Props = {
  products: Product[];
  categories: Categories[];
  productsGroupedByCategory: GroupedProducts;
}

export default function Home({ products, categories, productsGroupedByCategory }: Props) {
  return (
    <>
      <Head>
        <title>Ecommerce</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as='main' marginBottom='2rem'>

        <Container marginTop='2rem'>

          <HomeHeroCategories categories={categories} />
          <AdvantageSection />

        </Container>

        <Container
          maxW={{ base: '100%', md: '1100px' }}
          paddingX='0'
        >
          {
            Object.entries(productsGroupedByCategory).map(([category, products]) => (

              <Box key={category} marginTop='4rem'>
                <Heading
                  as='h2'
                  size='md'
                  textTransform='uppercase'
                  margin={{ base: '0 0 0.5rem 1rem', md: '0 0 1rem 0' }}

                  noOfLines={1}>{category}</Heading>
                <HomeProductsGrid products={products} />
              </Box>
            ))
          }

        </Container>

        <Box as='section'>

          <Container marginBottom={'5rem'} marginTop='5rem'>
            <BannerSection />
          </Container>

        </Box>

        <Container
          background={'linear-gradient(180deg, #F3F2F2 0%, #DCDBDB 100%);'}
          m={{ base: '14.75rem 0 0', md: '2rem auto' }}
          p={{ base: '1.5rem', md: '3.55rem' }}
          maxW='100%'
          position='relative'
        >

          <Box
            position='absolute'
            width={{ base: '128px', md: '311px' }}
            height={{ base: '242px', md: '545px' }}
            left={{ base: '1.5rem', md: '50%' }}
            top={{ base: 'calc(-242px + 1.5rem)', md: 'initial' }}
            bottom={{ md: '0' }}
            transform={{ md: 'translate(-530px)' }}
          >
            <Image src={woman} alt='' fill={true} style={{ objectFit: 'cover' }} />
          </Box>

          <Box
            position='absolute'
            width={{ base: '99px', md: '219px' }}
            height={{ base: '236px', md: '524px' }}
            right={{ base: '2rem', md: '50%' }}
            top={{ base: 'calc(-220px + 1.5rem)', md: 'initial' }}
            bottom={{ md: '0' }}
            transform={{ md: 'translate(465px)' }}
          >
            <Image src={men} alt='' fill={true} style={{ objectFit: 'cover' }} />
          </Box>


          <Flex
            as='article'
            m='auto'
            maxW='33.25rem'
            bgColor='white'
            p='2rem'
            height={{ md: '28.75rem' }}
          >

            <Grid gap='2rem' m='auto' textAlign='center'>

              <header>
                <Heading size='sm' textTransform='uppercase' fontWeight='bold' color='gray'>Special Offer</Heading>
                <Heading size='xl' textTransform='uppercase' fontWeight='bold'>Subscribe and {' '} <Text as='span' color='red.500'> get 10%</Text></Heading>
              </header>

              <Grid as='form' action='' gap='1.5rem'>

                <FormControl >
                  <Input placeholder='Enter your email' type='email'
                    textAlign='inherit' background='gray.100' />
                </FormControl>
                <Button bgColor='black' color='white' w='100%' size='lg' h='4rem' textTransform='uppercase'>Subscribe</Button>

              </Grid>

            </Grid>
          </Flex>
        </Container>

      </Box >
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {

  const products = await fetch('https://fakestoreapi.com/products')
    .then(res => res.json())

  const categories = await fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())

  const productsGroupedByCategory = groupsProductsByCategory(products)

  return {
    props: {
      products,
      categories,
      productsGroupedByCategory
    },
  }
}
