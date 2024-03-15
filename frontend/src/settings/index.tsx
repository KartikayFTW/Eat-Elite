import type { ChildrenProps } from '@/types'

import ReactQuerySetting from './ReactQuerySetting'
import RouterSetting from './RouterSetting'

const AppSetting = ({ children }: ChildrenProps) => {
    return (
        <ReactQuerySetting>
            <RouterSetting>{children}</RouterSetting>
        </ReactQuerySetting>
    )
}

export default AppSetting
