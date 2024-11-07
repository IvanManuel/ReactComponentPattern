import { NavLink, Route, Routes } from "react-router-dom";
import { LazyPage2, LazyPage3 } from "../pages";
import { ShoppingPage } from "../../02-component-patterns/pages/ShoppingPage";

export const LazyLayout = () => {
    return (
        <div>
            <h1>LazyLayout Page</h1>

            <ul>
                <li>
                    <NavLink to='lazy1'>Shopping Page</NavLink>
                </li>
                <li>
                    <NavLink to='lazy2'>Lazy 2</NavLink>
                </li>
                <li>
                    <NavLink to='lazy3'>Lazy 3</NavLink>
                </li>
            </ul>

            <Routes>
                <Route path="lazy1" element={<ShoppingPage />} />
                <Route path="lazy2" element={<LazyPage2 />} />
                <Route path="lazy3" element={<LazyPage3 />} />

                <Route path="*" element={<div>Not Found</div>} />
            </Routes>
        </div>
    )
}

export default LazyLayout;