import type { ChildrenProps } from '@/types';

import ReactQuerySetting from './ReactQuerySetting';
import RouterSetting from './RouterSetting';
import AuthSetting from './AuthSetting';

const AppSetting = ({ children }: ChildrenProps) => {
  return (
    <ReactQuerySetting>
      <RouterSetting>
        <AuthSetting>{children}</AuthSetting>
      </RouterSetting>
    </ReactQuerySetting>
  );
};

export default AppSetting;
