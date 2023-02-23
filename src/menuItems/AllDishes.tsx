import { useEffect, useState } from "react"
import './AllDishes.css';

import Intro from "../components/Intro";

import {
    Table,
    Tbody,
    Tr,
    Td,
    Button,
    Text
} from '@chakra-ui/react'
import { Courses, Dish, FullMenu } from "./FullMenu";

export default function MenuItems({ courseId, orderedItems, addToOrder }: {
    courseId: number,
    orderedItems: Dish[],
    addToOrder: (dish: Dish) => void
}) {

    return (
        <>
            {courseId === 0 ? (<Intro />) :
                (
                    <>
                        <Text textAlign={'center'}>{Courses[courseId].name}</Text>
                        <hr />
                        <Table variant={'unstyled'} className="dishes-table">
                            <Tbody>
                                {FullMenu[courseId].dishes?.map((dish, index) => (
                                    <Tr key={index}>
                                        <Td className="dish-name">
                                            <span style={{ fontSize: '1.2rem' }}>
                                                {dish.name}
                                            </span>
                                            <br />
                                            <span style={{ color: 'grey', fontSize: '0.8rem' }}>
                                                {dish.description}
                                            </span>
                                        </Td>
                                        <Td className="dish-price">${dish.price}</Td>
                                        <Td className="dish-button">
                                            <Button
                                                className="add-to-order-button"
                                                colorScheme="whatsapp"
                                                onClick={() => addToOrder(dish)}
                                                variant={orderedItems.includes(dish) ? ("solid") : ("ghost")}
                                            >
                                                {orderedItems.includes(dish) ? ("Added") : ("Add")}
                                            </Button>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </>
                )}

        </>
    )
} 