import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { useState } from 'react';
import useMenu from '../../../Hooks/useMenu';
import OrderTab from '../orderTab/orderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories=  ['salad', 'pizza', 'soup' , 'desserts', 'drinks']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');



    return (
        <div>
             <Helmet
                title="BISTRO BOSS || Order"

            />
            <Cover img={orderImg} title={'order Food '} subTitle={'WOULD YOU LIKE TO TRY A DISH ?'} />

            <div className='text-center text-xl font-bold mt-16'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>salad </Tab>
                        <Tab>pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                    </TabList>
                    <TabPanel>
                       <OrderTab items={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;