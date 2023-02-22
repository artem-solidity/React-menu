import { Text, Button, Flex } from "@chakra-ui/react"
import { useState } from "react";

export default function Intro() {


    return(
        <>
            <Text fontSize={'1.2rem'} textAlign={'justify'} marginBottom={'3%'}>
                Welcome to our restaurant, where we strive to provide an unforgettable dining experience. 
                Our menu features classic dishes made with the freshest ingredients, as well as a carefully curated selection of Italian and French wines. 
                From our Caesar Salad and handmade pasta to our decadent desserts, every dish is made to perfection and presented with care.
            </Text>
            <Text fontSize={'1.2rem'} textAlign={'justify'} marginBottom={'3%'}>Whether you are looking for a romantic evening out or a night with friends, our warm and inviting atmosphere will make you feel right at home. 
                We look forward to serving you soon!
            </Text>
            <Flex fontSize={'1.2rem'} textAlign={'right'} justifyContent={'right'}>
                <Text>Chef Garry Ratatouille & Team</Text>
            </Flex>
        </>
    )
}