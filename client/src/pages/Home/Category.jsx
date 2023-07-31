import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Marvel from './SubCategories/Marvel';
import Dc from './SubCategories/Dc';
import StarWars from './SubCategories/StarWars';
import Transformers from './SubCategories/Transformers';

const SubCategory = () => {
      const [category, setCategory] = useState('Marvel');
      const [toys, setToys] = useState([]);
      const [isLoading, setIsLoading] = useState(true);

      useEffect(() => {
            const fetchData = async () => {
                  try {
                        const response = await fetch(`https://toy-galaxy-server.vercel.app/toys/?subCategory=${category}`);
                        const data = await response.json();

                        setToys(data.slice(0, 3));
                        setIsLoading(false);
                  } catch (error) {
                        console.error(error);
                  }
            };
            setIsLoading(true);
            fetchData();
      }, [category]);

      return (
            <div className="my-20">
                  <h1 className='text-4xl text-center font-semibold font-lobster mb-4' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">Shop By Category</h1>

                  <h4 className='mb-8 md:w-[70%] mx-auto text-center text-gray-500' data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000">We allow you to easily navigate through our wide variety of toys based on your favorite hero. Whether you're a fan of the Avengers, DC, Star Wars of Transformers, we've got you covered with action figures, collectibles, and more.</h4>

                  <Tabs >
                        <TabList className='text-center bg-[#D3E3FD] hover:bg-[#b1cdfb] font-semibold rounded-lg'>
                              <Tab onClick={() => setCategory('Marvel')}>Marvel</Tab>
                              <Tab onClick={() => setCategory('DC')}>DC</Tab>
                              <Tab onClick={() => setCategory('Star Wars')}>Star Wars</Tab>
                              <Tab onClick={() => setCategory('Transformers')}>Transformers</Tab>
                        </TabList>

                        {isLoading ? (
                              <div className='my-4 flex justify-center items-center'>
                                    <img src="https://www.justinmind.com/wp-content/uploads/2018/09/progress-bar.gif" alt="" className='w-52' />
                              </div>
                        ) : (
                              <>
                                    <TabPanel className="border-t-2 rounded-lg p-1">
                                          <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                                                {
                                                      toys.map((marvel) => <Marvel key={marvel._id} marvel={marvel} />)
                                                }
                                          </div>
                                    </TabPanel>

                                    <TabPanel>
                                          <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                                                {
                                                      toys.map((dc) => <Dc key={dc._id} dc={dc} />)
                                                }
                                          </div>
                                    </TabPanel>

                                    <TabPanel>
                                          <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                                                {
                                                      toys.map((wars) => <StarWars key={wars._id} wars={wars} />)
                                                }
                                          </div>
                                    </TabPanel>

                                    <TabPanel>
                                          <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                                                {
                                                      toys.map((transformer) => <Transformers key={transformer._id} transformer={transformer} />)
                                                }
                                          </div>
                                    </TabPanel>
                              </>
                        )}
                  </Tabs>

            </div>
      );
};

export default SubCategory;
