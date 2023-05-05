import { Box, Grid } from "@chakra-ui/react";
import ProductCart from "./ProductCart";
import { Product } from "@/pages";
import Link from "next/link";
import { slugify } from '@/utils/sluglify';


type Props = {
    products: Product[]
}


export default function HomeProductsGrid(props: Props) {
    return (
        <Grid
            gridTemplateColumns={{ base: 'repeat(auto-fit, 255px)', md: 'repeat(auto-fit, minmax(255,1fr))' }}
            gridAutoFlow={{ base: 'column', md: 'row' }}
            alignItems='stretch'
            gridAutoColumns='255px'
            gridAutoRows='1fr'
            overflowX={{ base: 'scroll', md: 'hidden' }}
            scrollSnapType='x mandatory'
            scrollSnapStop='always'
            gap='1rem'
        >
            {props.products.map((product, i) => {
                const slug = slugify(product.title);
                return <Box
                    key={product.id}
                    scrollSnapAlign='center'
                    marginLeft={{
                        base: i === 0 ? '1rem' : '0',
                        md: '0'
                    }}
                    border='solid 1px'
                    borderColor='gray.200'
                    p={'1rem'}
                >
                    <Link href={`/products/${slug}-${product.id}`}>
                        <ProductCart {...product} />
                    </Link>
                </Box>
            })}
        </Grid>
    )
}
