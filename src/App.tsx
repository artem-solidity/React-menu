import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import SidebarWithHeader from './components/Navibar'
import OrderModal from './components/OrderModal';
import MenuItems, { Dish } from './menuItems/AllDishes'

function App() {

  const [currentPageId, setCurrentPageId] = useState<number>(0);
  const [orderedItems, setOrderedItems] = useState<Dish[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();



  const addToOrder = (dish: Dish) => {
    if (orderedItems.includes(dish)) {
      const index = orderedItems.indexOf(dish);
      setOrderedItems((orderedItems) => orderedItems.filter((dish, i) => i !== index));
    } else {
      setOrderedItems((orderedItems) => [
        ...orderedItems,
        dish
      ])
    }
  }

  const displayOrder = () => {
    isOpen ? onClose() : onOpen();
  }


  return (
    <>
      <SidebarWithHeader
        displayOrder={displayOrder}
        setCurrentPageId={setCurrentPageId}
      >
        <MenuItems
          courseId={currentPageId}
          orderedItems={orderedItems}
          addToOrder={addToOrder}
        />
      </SidebarWithHeader>
      {isOpen && <OrderModal orderedItems={orderedItems} isOpen={isOpen} onOpen={onOpen} onClose={onClose} addToOrder={addToOrder} />}
    </>
  )

}

export default App;
