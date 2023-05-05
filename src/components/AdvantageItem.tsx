import Image from "next/image";

import { Grid, GridItem, Show, Text } from "@chakra-ui/react";


type Props = {
    title: string;
    content: string;
    icon: string
}

export default function AdvantageItem({ title, content, icon }: Props) {
    return (
        <Grid gridTemplateColumns={{ base: '1fr', sm: '40px 1fr' }} justifyItems='center' alignItems='center' gap='1rem'>
            <GridItem>
                <Image src={icon} alt='' width={40} height={40} />
            </GridItem>
            <GridItem>
                <Text textTransform='uppercase' fontSize='xs' fontWeight='bold'>{title}</Text>
                <Show above="sm">

                    <Text fontSize='xs'>{content}</Text>
                </Show>
            </GridItem>
        </Grid>
    )
}
