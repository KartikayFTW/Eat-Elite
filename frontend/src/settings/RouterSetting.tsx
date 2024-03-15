import { ChildrenProps } from '@/types'
import { BrowserRouter } from 'react-router-dom'

const RouterSetting = ({ children }: ChildrenProps) => (
    <BrowserRouter>{children}</BrowserRouter>
)

export default RouterSetting
