import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import AddStaffMember from './Pages/StaffMembers/Add'
import ViewStaffMember from './Pages/StaffMembers/Viewall'
import AddClassSchedule from './Pages/ClassSchedule/Add';
import EditClassSchedule from './Pages/ClassSchedule/Edit';
import ViewAllClassSchedule from './Pages/ClassSchedule/ViewAll';

import ViewallNutritionSchedule from './Pages/NutritionSchedule/ViewAll';
import EditNutritionSchedule from './Pages/NutritionSchedule/Edit';
import AddNutritionSchedule from './Pages/NutritionSchedule/Add';

import AddShopItem from "./Pages/Shop/AddShopItem";
import ShopList from "./Pages/Shop/ShopList";
function App() {
  return (
    <div>
      <Header />
      <div className='row m-0'>
        <div className='col-2 m-0 p-0 mh-100'>
          <SideBar />
        </div>
        <div className="col-10">
          <div className="page-content">
            <Routes>
              <Route path="/StaffMembers/Add" element={<AddStaffMember />} />
              <Route path="/StaffMembers/View" element={<ViewStaffMember />} />
              <Route path="/ClassSchedule/Add" element={<AddClassSchedule />} />
              <Route path="/ClassSchedule/Edit" element={<EditClassSchedule />} />
              <Route path="/ClassSchedule/ViewAll" element={<ViewAllClassSchedule />} />
              <Route path="/NutritionSchedule/ViewAll" element={<ViewallNutritionSchedule />} />
              <Route path="/NutritionSchedule/Edit" element={<EditNutritionSchedule />} />
              <Route path="/NutritionSchedule/Add" element={<AddNutritionSchedule />} />
              <Route path="/shop/add" element={<AddShopItem />} />
              <Route path="/shop/list" element={<ShopList />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
