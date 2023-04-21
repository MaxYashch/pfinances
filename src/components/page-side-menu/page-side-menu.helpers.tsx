import { AccountBookOutlined, AppstoreAddOutlined, DislikeOutlined, LikeOutlined, QuestionCircleOutlined, SettingOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";

export const menuOptions: MenuProps['items'] = [
  {
    label: 'Dashboard',
    key: '/',
    icon: <AppstoreAddOutlined />,
  },
  {
    label: 'Income',
    key: '/income',
    icon: <LikeOutlined />,
  },
  {
    label: 'Outcome',
    key: '/outcome',
    icon: <DislikeOutlined />,
  },
  {
    label: 'Account',
    key: '/account',
    icon: <AccountBookOutlined />,
  },
  { type: 'divider' },
  {
    label: 'Settings',
    key: '/settings',
    icon: <SettingOutlined />,
  },
  {
    label: 'Help',
    key: '/help',
    icon: <QuestionCircleOutlined />,
  },
]