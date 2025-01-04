import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
import { RegisterPage } from "../03-forms/pages/RegisterPage";
import { FormikBasicPage, FormikYupPage, FormikComponents, FormikAbstractation, RegisterFormikPage, DynamicForm } from "../03-forms/pages";

// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}

const LazyLayout = lazy(() => import( /* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        to: '/register',
        path: 'register',
        Component: RegisterPage,
        name: 'Register Page'
    },
    {
        to: '/formik-basic',
        path: 'formik-basic',
        Component: FormikBasicPage,
        name: 'Formik Basic'
    },
    {
        to: '/formik-yup',
        path: 'formik-yup',
        Component: FormikYupPage,
        name: 'Formik Yup'
    },
    {
        to: '/formik-components',
        path: 'formik-components',
        Component: FormikComponents,
        name: 'Formik Components'
    },
    {
        to: '/formik-abstractation',
        path: 'formik-abstractation',
        Component: FormikAbstractation,
        name: 'Formik Abstractation'
    },
    {
        to: '/register-formik',
        path: 'register-formik',
        Component: RegisterFormikPage,
        name: 'Register Formik'
    },
    {
        to: '/dynamic-form',
        path: 'dynamic-form',
        Component: DynamicForm,
        name: 'Dynamic Form',
    },
    {
        to: '/lazyload',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'LazyLayout - Dash'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
]