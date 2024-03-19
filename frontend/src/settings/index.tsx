import type { ChildrenProps } from '@/types';

import ReactQuerySetting from './ReactQuerySetting';
import RouterSetting from './RouterSetting';
import AuthSetting from './AuthSetting';
import { Toaster } from '@/components/ui/sonner';

const AppSetting = ({ children }: ChildrenProps) => {
  return (
    <ReactQuerySetting>
      <RouterSetting>
        <AuthSetting>
          <Toaster visibleToasts={1} richColors position="bottom-center" />
          {children}
        </AuthSetting>
      </RouterSetting>
    </ReactQuerySetting>
  );
};

export default AppSetting;
