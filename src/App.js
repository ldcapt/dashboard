import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSetting } from "./components";
import { useStateContext } from "./contexts/ContextProvider";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Line,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";

import "./App.css";

const App = () => {
  const { activeMenu, themeSetting, setThemeSetting, currentColor, currentMode } = useStateContext();

  return (
    <div className={ currentMode === 'Dark' ? 'dark' : '' }>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: currentColor, borderRadius: "50%" }}
                onClick={() => setThemeSetting(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">Sidebar</div>
          )}

          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            <div>
              { themeSetting && <ThemeSetting />}

              <Routes>
                {/* Dashboard */}
                <Route path="/Dashboard" element={<Ecommerce />} />
                <Route path="/Dashboard/ecommerce" element={<Ecommerce />} />

                {/* Pages */}
                <Route path="/Dashboard/orders" element={<Orders />} />
                <Route path="/Dashboard/employees" element={<Employees />} />
                <Route path="/Dashboard/customers" element={<Customers />} />

                {/* App */}
                <Route path="/Dashboard/kanban" element={<Kanban />} />
                <Route path="/Dashboard/editor" element={<Editor />} />
                <Route path="/Dashboard/calendar" element={<Calendar />} />
                <Route path="/Dashboard/color-picker" element={<ColorPicker />} />

                {/* Charts */}
                <Route path="/Dashboard/line" element={<Line />} />
                <Route path="/Dashboard/area" element={<Area />} />
                <Route path="/Dashboard/bar" element={<Bar />} />
                <Route path="/Dashboard/pie" element={<Pie />} />
                <Route path="/Dashboard/financial" element={<Financial />} />
                <Route path="/Dashboard/color-mapping" element={<ColorMapping />} />
                <Route path="/Dashboard/pyramid" element={<Pyramid />} />
                <Route path="/Dashboard/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
