import { Suspense } from "react";
import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"
import { routes } from "./routes";
import reactLogo from '../assets/react.svg';

export const Navigation = () => {
  return (
    <Suspense fallback={ <span>Loading...</span> }>
        <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={ reactLogo } alt="React logo" />
                <ul>
                    {
                        routes.map(({ to, name }) => (
                            <li key={ to }>
                                <NavLink to={ to } className={ ({ isActive }) => isActive ? 'nav-active' : '' }>{ name }</NavLink>
                            </li>
                        ))
                    }
            </ul>
            </nav>

            <Routes>
                {
                    routes.map(({ to, Component, path }) => (
                        <Route 
                            key={ to }
                            path={ path }
                            element={ <Component /> }
                            />
                    ))
                }
                <Route path="/*" element={<Navigate to="/lazyload" replace />} />
            </Routes>
        </div>
    </BrowserRouter>
    </Suspense>
  )
}
