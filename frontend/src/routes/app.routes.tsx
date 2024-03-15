import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<h1>hello app routes</h1>} />
        </Routes>
    )
}

export default AppRoutes
