import { Outlet } from 'react-router-dom'
const MainLayout = () => {
    return (
        <>
            <header>Header</header>
            <Outlet />
        </>
    )
}

export default MainLayout