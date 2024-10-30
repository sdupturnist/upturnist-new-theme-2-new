// context/SiteContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { frontendUrl } from '@/utils/variables';
import { useRouter } from 'next/router';

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [homeMeues1, setHomeMeues1] = useState(null); 
  const [homeMeues2, setHomeMeues2] = useState(null); 
  const [primaryMenu, setPrimaryMenu] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const router = useRouter();
  const { query } = router;



  // Fetch additional menus data
  const fetchDataAdditionalMenus = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${frontendUrl}/api/menu`);
    
      setHomeMeues1(response.data.homeServiceMenu1);
      setHomeMeues2(response.data.homeServiceMenu2);  
      setPrimaryMenu(response.data.primaryMenu);  

    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };



  

  useEffect(() => {
  fetchDataAdditionalMenus(); 
  }, []);

  return (
    <SiteContext.Provider value={{ 
        homeMeues1,
        homeMeues2,
        primaryMenu,
      loading, 
      error, 
    
    }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSiteContext = () => {
  return useContext(SiteContext);
};
