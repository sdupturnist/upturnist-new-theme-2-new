import { wordpressRestApiUrlWordpressMenus } from '@/utils/variables';
import axios from 'axios';


const Wordpress = axios.create({
  baseURL: wordpressRestApiUrlWordpressMenus,
});

// Handler function
export default async function handler(req, res) {
 

  try {
    // Fetch menus for header and footer
    const [homeServiceMenu1, homeServiceMenu2, primaryMenu] = await Promise.all([
      Wordpress.get('menus/perception-branding'),
    Wordpress.get('menus/funnel-marketing'),
    Wordpress.get('menus/primary-menu'),
    ]);

    // Return both menu data
    res.status(200).json({
      homeServiceMenu1: homeServiceMenu1.data,
      homeServiceMenu2:homeServiceMenu2.data,
      primaryMenu:primaryMenu.data
    });
  } catch (error) {
    console.error('Error fetching menus:', error.response ? error.response.data : error.message);
    res.status(500).json({ 
      error: 'Failed to fetch menus', 
      details: error.response ? error.response.data : error.message 
    });
  }
}
