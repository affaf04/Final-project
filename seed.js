require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Cleanser', sortOrder:10},
    {name: 'Moisturizers', sortOrder: 20},
    {name: 'Eye care', sortOrder:30},
    {name: 'Sensitive skin', sortOrder: 40},
    {name: 'Oily skin', sortOrder: 50},
    {name: 'Dry skin', sortOrder: 60},
    {name: 'Essential oils', sortOrder: 70},
    {name: 'Make-up', sortOrder: 80},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Bubble', img: 'https://cdn.accentuate.io/7180002689177/1651174231561/FreshStart_Primary_CutOut_01-2.png?v=1668706801111', category: categories[0], price: 5.95},
    {name: 'Avene', img: 'https://www.aveneusa.com/media/catalog/product/cache/c954090e9cbe842a5793c4ed77897932/p/0/p0005868-avene-cleanance-cleansing-gel-400ml-01_052_clipped.png', category: categories[0], price: 5.95},
    {name: 'Aveeno', img: 'https://www.aveeno.com/sites/aveeno_us_2/files/product-images/ave_381370036913_us_clear_complexion_foaming_cleanser_6oz_00000.png', category: categories[0], price: 5.95},
    {name: 'Clean & Clear', img: 'https://www.cleanandclear.ca/sites/cleanandclear_ca/files/product-images/mb-hfc.png', category: categories[0], price: 5.95},
    {name: 'Cerave', img: 'https://www.cerave.com/-/media/project/loreal/brand-sites/cerave/americas/us/products-v3/renewing-sa-cleanser/700x875/renewing_sa_cleanser_8oz_front_new-700x875-v2.jpg', category: categories[0], price: 5.95},
    {name: 'Skin Active', img: 'https://www.garnierusa.com/-/media/project/loreal/brand-sites/garnier/usa/us/home/products/skincare/facials-cleansers/the-gentle-sulfate-free-cleanser/garnier_skinactive_gentle_sulfate_free_cleanser_skin_care_productshot.png', category: categories[0], price: 5.95},
    {name: 'Ahava', img: 'https://www.ahava.com/cdn/shop/products/all-in-one-toning-cleanser.png?v=1627286141', category: categories[0], price: 5.95},
    

    {name: 'Skin Pharma', img : 'https://skinpharm.com/cdn/shop/products/skinpharm-product-facewhip_1200x.png',  category: categories[1], price: 11.95},
    {name: 'Skin Pharma', img : 'https://skinpharm.com/cdn/shop/products/skinpharm-product-facewhip_1200x.png',  category: categories[1], price: 11.95},
    {name: 'Skin Pharma', img : 'https://skinpharm.com/cdn/shop/products/skinpharm-product-facewhip_1200x.png',  category: categories[1], price: 11.95},
    {name: 'Skin Pharma', img : 'https://skinpharm.com/cdn/shop/products/skinpharm-product-facewhip_1200x.png',  category: categories[1], price: 11.95},
    {name: 'Skin Pharma', img : 'https://skinpharm.com/cdn/shop/products/skinpharm-product-facewhip_1200x.png',  category: categories[1], price: 11.95},
    {name: 'Skin Pharma', img : 'https://skinpharm.com/cdn/shop/products/skinpharm-product-facewhip_1200x.png',  category: categories[1], price: 11.95},
    {name: 'Skin Pharma', img : 'https://skinpharm.com/cdn/shop/products/skinpharm-product-facewhip_1200x.png',  category: categories[1], price: 11.95},
    {name: 'Skin Pharma', img : 'https://skinpharm.com/cdn/shop/products/skinpharm-product-facewhip_1200x.png',  category: categories[1], price: 11.95},

    {name: 'Ahava -Darc circls', img: 'https://www.ahava.com/cdn/shop/products/dark-circles-and-uplift-eye-treatment.png', category: categories[2], price: 9.95},
    {name: 'Ahava -Darc circls', img: 'https://www.ahava.com/cdn/shop/products/dark-circles-and-uplift-eye-treatment.png', category: categories[2], price: 9.95},
    {name: 'Ahava -Darc circls', img: 'https://www.ahava.com/cdn/shop/products/dark-circles-and-uplift-eye-treatment.png', category: categories[2], price: 9.95},
    {name: 'Ahava -Darc circls', img: 'https://www.ahava.com/cdn/shop/products/dark-circles-and-uplift-eye-treatment.png', category: categories[2], price: 9.95},
    {name: 'Ahava -Darc circls', img: 'https://www.ahava.com/cdn/shop/products/dark-circles-and-uplift-eye-treatment.png', category: categories[2], price: 9.95},
    {name: 'Ahava -Darc circls', img: 'https://www.ahava.com/cdn/shop/products/dark-circles-and-uplift-eye-treatment.png', category: categories[2], price: 9.95},
    {name: 'Ahava -Darc circls', img: 'https://www.ahava.com/cdn/shop/products/dark-circles-and-uplift-eye-treatment.png', category: categories[2], price: 9.95},
    {name: 'Ahava -Darc circls', img: 'https://www.ahava.com/cdn/shop/products/dark-circles-and-uplift-eye-treatment.png', category: categories[2], price: 9.95},
    {name: 'Ahava -Darc circls', img: 'https://www.ahava.com/cdn/shop/products/dark-circles-and-uplift-eye-treatment.png', category: categories[2], price: 9.95},
    {name: 'Ahava -Darc circls', img: 'https://www.ahava.com/cdn/shop/products/dark-circles-and-uplift-eye-treatment.png', category: categories[2], price: 9.95},

    {name: 'Essemtials', img: 'https://rhondaallison.com/cdn/shop/products/SENSITIVESKINCOMPLEX.png', category: categories[3], price: 9.95},
    {name: 'Essemtials', img: 'https://rhondaallison.com/cdn/shop/products/SENSITIVESKINCOMPLEX.png', category: categories[3], price: 9.95},
    {name: 'Essemtials', img: 'https://rhondaallison.com/cdn/shop/products/SENSITIVESKINCOMPLEX.png', category: categories[3], price: 9.95},
    {name: 'Essemtials', img: 'https://rhondaallison.com/cdn/shop/products/SENSITIVESKINCOMPLEX.png', category: categories[3], price: 9.95},
    {name: 'Essemtials', img: 'https://rhondaallison.com/cdn/shop/products/SENSITIVESKINCOMPLEX.png', category: categories[3], price: 9.95},
    {name: 'Essemtials', img: 'https://rhondaallison.com/cdn/shop/products/SENSITIVESKINCOMPLEX.png', category: categories[3], price: 9.95},
    {name: 'Essemtials', img: 'https://rhondaallison.com/cdn/shop/products/SENSITIVESKINCOMPLEX.png', category: categories[3], price: 9.95},
    {name: 'Essemtials', img: 'https://rhondaallison.com/cdn/shop/products/SENSITIVESKINCOMPLEX.png', category: categories[3], price: 9.95},
    {name: 'Essemtials', img: 'https://rhondaallison.com/cdn/shop/products/SENSITIVESKINCOMPLEX.png', category: categories[3], price: 9.95},
    {name: 'Essemtials', img: 'https://rhondaallison.com/cdn/shop/products/SENSITIVESKINCOMPLEX.png', category: categories[3], price: 9.95},
    {name: 'Essemtials', img: 'https://rhondaallison.com/cdn/shop/products/SENSITIVESKINCOMPLEX.png', category: categories[3], price: 9.95},
    {name: 'Essemtials', img: 'https://rhondaallison.com/cdn/shop/products/SENSITIVESKINCOMPLEX.png', category: categories[3], price: 9.95},
    {name: 'Essemtials', img: 'https://rhondaallison.com/cdn/shop/products/SENSITIVESKINCOMPLEX.png', category: categories[3], price: 9.95},

    {name: 'Facial scrub for Oily skin', img : 'https://drthrowerskincare.com/cdn/shop/files/15_49480ad5-2c98-46a4-bbd8-fd5d813f9d7f.png', category: categories[4], price: 3.95},
    {name: 'Facial scrub for Oily skin', img : 'https://drthrowerskincare.com/cdn/shop/files/15_49480ad5-2c98-46a4-bbd8-fd5d813f9d7f.png', category: categories[4], price: 3.95},
    {name: 'Facial scrub for Oily skin', img : 'https://drthrowerskincare.com/cdn/shop/files/15_49480ad5-2c98-46a4-bbd8-fd5d813f9d7f.png', category: categories[4], price: 3.95},
    {name: 'Facial scrub for Oily skin', img : 'https://drthrowerskincare.com/cdn/shop/files/15_49480ad5-2c98-46a4-bbd8-fd5d813f9d7f.png', category: categories[4], price: 3.95},
    {name: 'Facial scrub for Oily skin', img : 'https://drthrowerskincare.com/cdn/shop/files/15_49480ad5-2c98-46a4-bbd8-fd5d813f9d7f.png', category: categories[4], price: 3.95},
    {name: 'Facial scrub for Oily skin', img : 'https://drthrowerskincare.com/cdn/shop/files/15_49480ad5-2c98-46a4-bbd8-fd5d813f9d7f.png', category: categories[4], price: 3.95},
    {name: 'Facial scrub for Oily skin', img : 'https://drthrowerskincare.com/cdn/shop/files/15_49480ad5-2c98-46a4-bbd8-fd5d813f9d7f.png', category: categories[4], price: 3.95},
    {name: 'Facial scrub for Oily skin', img : 'https://drthrowerskincare.com/cdn/shop/files/15_49480ad5-2c98-46a4-bbd8-fd5d813f9d7f.png', category: categories[4], price: 3.95},
    {name: 'Facial scrub for Oily skin', img : 'https://drthrowerskincare.com/cdn/shop/files/15_49480ad5-2c98-46a4-bbd8-fd5d813f9d7f.png', category: categories[4], price: 3.95},
    {name: 'Facial scrub for Oily skin', img : 'https://drthrowerskincare.com/cdn/shop/files/15_49480ad5-2c98-46a4-bbd8-fd5d813f9d7f.png', category: categories[4], price: 3.95},
    {name: 'Facial scrub for Oily skin', img : 'https://drthrowerskincare.com/cdn/shop/files/15_49480ad5-2c98-46a4-bbd8-fd5d813f9d7f.png', category: categories[4], price: 3.95},

    {name: 'Dry skin therapy', img: 'https://dermarite.com/wp-content/uploads/2019/01/Lantiseptic-Dry-Skin.png', category: categories[5], price: 5.95},
    {name: 'Dry skin therapy', img: 'https://dermarite.com/wp-content/uploads/2019/01/Lantiseptic-Dry-Skin.png', category: categories[5], price: 5.95},
    {name: 'Dry skin therapy', img: 'https://dermarite.com/wp-content/uploads/2019/01/Lantiseptic-Dry-Skin.png', category: categories[5], price: 5.95},
    {name: 'Dry skin therapy', img: 'https://dermarite.com/wp-content/uploads/2019/01/Lantiseptic-Dry-Skin.png', category: categories[5], price: 5.95},
    {name: 'Dry skin therapy', img: 'https://dermarite.com/wp-content/uploads/2019/01/Lantiseptic-Dry-Skin.png', category: categories[5], price: 5.95},
    {name: 'Dry skin therapy', img: 'https://dermarite.com/wp-content/uploads/2019/01/Lantiseptic-Dry-Skin.png', category: categories[5], price: 5.95},
    {name: 'Dry skin therapy', img: 'https://dermarite.com/wp-content/uploads/2019/01/Lantiseptic-Dry-Skin.png', category: categories[5], price: 5.95},
    {name: 'Dry skin therapy', img: 'https://dermarite.com/wp-content/uploads/2019/01/Lantiseptic-Dry-Skin.png', category: categories[5], price: 5.95},
    {name: 'Dry skin therapy', img: 'https://dermarite.com/wp-content/uploads/2019/01/Lantiseptic-Dry-Skin.png', category: categories[5], price: 5.95},
    {name: 'Dry skin therapy', img: 'https://dermarite.com/wp-content/uploads/2019/01/Lantiseptic-Dry-Skin.png', category: categories[5], price: 5.95},
    {name: 'Dry skin therapy', img: 'https://dermarite.com/wp-content/uploads/2019/01/Lantiseptic-Dry-Skin.png', category: categories[5], price: 5.95},
    {name: 'Dry skin therapy', img: 'https://dermarite.com/wp-content/uploads/2019/01/Lantiseptic-Dry-Skin.png', category: categories[5], price: 5.95},
    {name: 'Dry skin therapy', img: 'https://dermarite.com/wp-content/uploads/2019/01/Lantiseptic-Dry-Skin.png', category: categories[5], price: 5.95},

    {name: 'Lavender', img: 'https://cdn11.bigcommerce.com/s-caylvaou2m/images/stencil/1280x1280/products/150/567/VD-LAV05-WEBSITE__64649.1585538051.png', category: categories[6], price: 9.95},
    {name: 'Lavender', img: 'https://cdn11.bigcommerce.com/s-caylvaou2m/images/stencil/1280x1280/products/150/567/VD-LAV05-WEBSITE__64649.1585538051.png', category: categories[6], price: 9.95},
    {name: 'Lavender', img: 'https://cdn11.bigcommerce.com/s-caylvaou2m/images/stencil/1280x1280/products/150/567/VD-LAV05-WEBSITE__64649.1585538051.png', category: categories[6], price: 9.95},
    {name: 'Lavender', img: 'https://cdn11.bigcommerce.com/s-caylvaou2m/images/stencil/1280x1280/products/150/567/VD-LAV05-WEBSITE__64649.1585538051.png', category: categories[6], price: 9.95},
    {name: 'Lavender', img: 'https://cdn11.bigcommerce.com/s-caylvaou2m/images/stencil/1280x1280/products/150/567/VD-LAV05-WEBSITE__64649.1585538051.png', category: categories[6], price: 9.95},
    {name: 'Lavender', img: 'https://cdn11.bigcommerce.com/s-caylvaou2m/images/stencil/1280x1280/products/150/567/VD-LAV05-WEBSITE__64649.1585538051.png', category: categories[6], price: 9.95},
    {name: 'Lavender', img: 'https://cdn11.bigcommerce.com/s-caylvaou2m/images/stencil/1280x1280/products/150/567/VD-LAV05-WEBSITE__64649.1585538051.png', category: categories[6], price: 9.95},
    {name: 'Lavender', img: 'https://cdn11.bigcommerce.com/s-caylvaou2m/images/stencil/1280x1280/products/150/567/VD-LAV05-WEBSITE__64649.1585538051.png', category: categories[6], price: 9.95},
    {name: 'Lavender', img: 'https://cdn11.bigcommerce.com/s-caylvaou2m/images/stencil/1280x1280/products/150/567/VD-LAV05-WEBSITE__64649.1585538051.png', category: categories[6], price: 9.95},
    {name: 'Lavender', img: 'https://cdn11.bigcommerce.com/s-caylvaou2m/images/stencil/1280x1280/products/150/567/VD-LAV05-WEBSITE__64649.1585538051.png', category: categories[6], price: 9.95},
    {name: 'Lavender', img: 'https://cdn11.bigcommerce.com/s-caylvaou2m/images/stencil/1280x1280/products/150/567/VD-LAV05-WEBSITE__64649.1585538051.png', category: categories[6], price: 9.95},
    {name: 'Lavender', img: 'https://cdn11.bigcommerce.com/s-caylvaou2m/images/stencil/1280x1280/products/150/567/VD-LAV05-WEBSITE__64649.1585538051.png', category: categories[6], price: 9.95},
    {name: 'Lavender', img: 'https://cdn11.bigcommerce.com/s-caylvaou2m/images/stencil/1280x1280/products/150/567/VD-LAV05-WEBSITE__64649.1585538051.png', category: categories[6], price: 9.95},
    {name: 'Lavender', img: 'https://cdn11.bigcommerce.com/s-caylvaou2m/images/stencil/1280x1280/products/150/567/VD-LAV05-WEBSITE__64649.1585538051.png', category: categories[6], price: 9.95},
    {name: 'Lavender', img: 'https://cdn11.bigcommerce.com/s-caylvaou2m/images/stencil/1280x1280/products/150/567/VD-LAV05-WEBSITE__64649.1585538051.png', category: categories[6], price: 9.95},

    {name: 'Foundation', img: 'https://www.makeupforever.com/dw/image/v2/BCRL_PRD/on/demandware.static/-/Sites-Makeupforever_master_catalog/default/dwe03c0514/images/I000075106/US-3548752185189_I000075106_HD-SKIN-FOUNDATION-22-30ML-1N06_Face_0.png', category: categories[7], price: 5.95},
    {name: 'Foundation', img: 'https://www.makeupforever.com/dw/image/v2/BCRL_PRD/on/demandware.static/-/Sites-Makeupforever_master_catalog/default/dwe03c0514/images/I000075106/US-3548752185189_I000075106_HD-SKIN-FOUNDATION-22-30ML-1N06_Face_0.png', category: categories[7], price: 5.95},
    {name: 'Foundation', img: 'https://www.makeupforever.com/dw/image/v2/BCRL_PRD/on/demandware.static/-/Sites-Makeupforever_master_catalog/default/dwe03c0514/images/I000075106/US-3548752185189_I000075106_HD-SKIN-FOUNDATION-22-30ML-1N06_Face_0.png', category: categories[7], price: 5.95},
    {name: 'Foundation', img: 'https://www.makeupforever.com/dw/image/v2/BCRL_PRD/on/demandware.static/-/Sites-Makeupforever_master_catalog/default/dwe03c0514/images/I000075106/US-3548752185189_I000075106_HD-SKIN-FOUNDATION-22-30ML-1N06_Face_0.png', category: categories[7], price: 5.95},
    {name: 'Foundation', img: 'https://www.makeupforever.com/dw/image/v2/BCRL_PRD/on/demandware.static/-/Sites-Makeupforever_master_catalog/default/dwe03c0514/images/I000075106/US-3548752185189_I000075106_HD-SKIN-FOUNDATION-22-30ML-1N06_Face_0.png', category: categories[7], price: 5.95},
    {name: 'Foundation', img: 'https://www.makeupforever.com/dw/image/v2/BCRL_PRD/on/demandware.static/-/Sites-Makeupforever_master_catalog/default/dwe03c0514/images/I000075106/US-3548752185189_I000075106_HD-SKIN-FOUNDATION-22-30ML-1N06_Face_0.png', category: categories[7], price: 5.95},
    {name: 'Foundation', img: 'https://www.makeupforever.com/dw/image/v2/BCRL_PRD/on/demandware.static/-/Sites-Makeupforever_master_catalog/default/dwe03c0514/images/I000075106/US-3548752185189_I000075106_HD-SKIN-FOUNDATION-22-30ML-1N06_Face_0.png', category: categories[7], price: 5.95},
    {name: 'Foundation', img: 'https://www.makeupforever.com/dw/image/v2/BCRL_PRD/on/demandware.static/-/Sites-Makeupforever_master_catalog/default/dwe03c0514/images/I000075106/US-3548752185189_I000075106_HD-SKIN-FOUNDATION-22-30ML-1N06_Face_0.png', category: categories[7], price: 5.95},
    {name: 'Foundation', img: 'https://www.makeupforever.com/dw/image/v2/BCRL_PRD/on/demandware.static/-/Sites-Makeupforever_master_catalog/default/dwe03c0514/images/I000075106/US-3548752185189_I000075106_HD-SKIN-FOUNDATION-22-30ML-1N06_Face_0.png', category: categories[7], price: 5.95},
    {name: 'Foundation', img: 'https://www.makeupforever.com/dw/image/v2/BCRL_PRD/on/demandware.static/-/Sites-Makeupforever_master_catalog/default/dwe03c0514/images/I000075106/US-3548752185189_I000075106_HD-SKIN-FOUNDATION-22-30ML-1N06_Face_0.png', category: categories[7], price: 5.95},
    {name: 'Foundation', img: 'https://www.makeupforever.com/dw/image/v2/BCRL_PRD/on/demandware.static/-/Sites-Makeupforever_master_catalog/default/dwe03c0514/images/I000075106/US-3548752185189_I000075106_HD-SKIN-FOUNDATION-22-30ML-1N06_Face_0.png', category: categories[7], price: 5.95},
    {name: 'Foundation', img: 'https://www.makeupforever.com/dw/image/v2/BCRL_PRD/on/demandware.static/-/Sites-Makeupforever_master_catalog/default/dwe03c0514/images/I000075106/US-3548752185189_I000075106_HD-SKIN-FOUNDATION-22-30ML-1N06_Face_0.png', category: categories[7], price: 5.95},

  ]);
  console.log(items)

  

  process.exit();

})();
