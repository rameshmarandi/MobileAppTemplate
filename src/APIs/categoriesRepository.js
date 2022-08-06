import {UATRepository} from './Repository';

const getallCategories = "get"
const subCategories ="get"
export default { 
    getallCategories(payload) {
    return UATRepository.get(transformRoute(getallCategories), payload);
  }, 
    getAllSubCategories(payload) {
    return UATRepository.get(transformRoute1(subCategories), payload);
  }, 
  
};

const transformRoute = (route) => {
  return `/api/category/${route}`;
};
const transformRoute1 = (route) => {
  return `/api/subcategory/${route}`;
};
