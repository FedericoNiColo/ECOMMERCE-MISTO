import { Flex, Grid, GridItem, GridItemProps } from "@chakra-ui/react"
import { slugify } from "@/utils/sluglify"
import Image from 'next/image';
import { CenteredLabel } from '@/components/CenteredLabel';

type Categories = "electronics" | "jewelery" | "men's clothing" | "women's clothing";

type Props = {
    categories: Categories[]
}

export default function HomeHeroCategories({ categories }: Props) {
    return (

        <Grid
            templateColumns={{ base: '1fr 1fr', sm: '2fr 1fr 1fr' }}
            templateRows={{ base: '130px 154px 130px 1fr', sm: '200px 260px' }}
            templateAreas={{
                base: `
                'cat1 cat1'
                'cat2 cat3'
                'cat4 cat4'
            `,
                sm: `
                'cat1 cat2 cat3'
                'cat1 cat4 cat4'
                `
            }}
            gap={{ base: '0.5rem', sm: '1.5rem' }}>

            {categories.map((cat, index) => {

                const slug = slugify(cat)
                const imageUrl = `/pic-categories-${slug}.jpg`


                return <GridItem fontSize={{ base: '0.85rem', sm: '1rem' }} position="relative" w="100%" h="100%" gridArea={`cat${index + 1}`} key={index}>
                    <Image src={imageUrl} fill={true} alt={cat} />

                    <Flex display='flex' alignItems='center' justifyContent='center' height='100%'>
                        <CenteredLabel>{cat}</CenteredLabel>
                    </Flex>
                </GridItem>
            })}

        </Grid>
    )
}
