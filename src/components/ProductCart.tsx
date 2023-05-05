import Image from "next/image";

import { StarIcon } from "@chakra-ui/icons";
import { AspectRatio, Box, Flex, Text } from "@chakra-ui/react";
import { Product } from "@/pages";



export default function ProductCart({ image, title, price, rating }: Product) {
    return (
        <Box width='100%'>
            <AspectRatio position='relative' ratio={1} maxWidth='100%' marginBottom='1rem'>
                <Image src={image} alt='' fill={true} style={{ objectFit: "contain" }} />
            </AspectRatio>
            <Text color='gray.500' marginBottom='0.75rem' noOfLines={1}>
                {title}
            </Text>
            <Flex align='center' justifyContent='space-between'>
                <Text fontWeight='bold'>${price}</Text>
                <Flex>
                    <StarIcon color='orange' />
                    <StarIcon color='orange' />
                    <StarIcon color='orange' />
                    <StarIcon color='orange' />
                    <StarIcon color='' />
                </Flex>
            </Flex>
        </Box>
    )
}
