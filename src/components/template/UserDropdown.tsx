import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { FiActivity } from 'react-icons/fi'
import { Trans, useTranslation } from 'react-i18next'
import { HiOutlineUser, HiOutlineCog, HiOutlineLogout } from 'react-icons/hi'

import { useAppSelector } from '@/store'
import Avatar from '@/components/ui/Avatar'
import useAuth from '@/utils/hooks/useAuth'
import Dropdown from '@/components/ui/Dropdown'
import type { CommonProps } from '@/@types/common'
import withHeaderItem from '@/utils/hoc/withHeaderItem'

type DropdownList = {
    label: string
    path: string
    icon: JSX.Element
    tkey: string
}

const dropdownItemList: DropdownList[] = [
    {
        label: 'Profile',
        tkey: 'profile.profile',
        path: '/app/account/settings/profile',
        icon: <HiOutlineUser />,
    },
    {
        label: 'Account Setting',
        path: '/app/account/settings/profile',
        icon: <HiOutlineCog />,
        tkey: 'profile.accountSetting',
    },
    {
        label: 'Activity Log',
        path: '/app/account/activity-log',
        icon: <FiActivity />,
        tkey: 'profile.activityLog',
    },
]

const _UserDropdown = ({ className }: CommonProps) => {
    const { avatar, userName, authority, email } = useAppSelector(
        (state) => state.auth.user
    )
    const { t } = useTranslation()

    const { signOut } = useAuth()

    const UserAvatar = (
        <div className={classNames(className, 'flex items-center gap-2')}>
            <Avatar size={32} shape="circle" src={avatar} />
            <div className="hidden md:block">
                <div className="text-xs capitalize">
                    {authority?.[0] || 'guest'}
                </div>
                <div className="font-bold" data-cy="header-username">
                    {userName}
                </div>
            </div>
        </div>
    )

    return (
        <div>
            <Dropdown
                menuStyle={{ minWidth: 240 }}
                renderTitle={UserAvatar}
                placement="bottom-end"
            >
                <Dropdown.Item variant="header">
                    <div className="py-2 px-3 flex items-center gap-2">
                        <Avatar shape="circle" src={avatar} />
                        <div>
                            <div className="font-bold text-gray-900 dark:text-gray-100">
                                {userName}
                            </div>
                            <div className="text-xs">{email}</div>
                        </div>
                    </div>
                </Dropdown.Item>
                <Dropdown.Item variant="divider" />
                {dropdownItemList.map((item) => (
                    <Dropdown.Item
                        key={item.label}
                        eventKey={item.label}
                        className="mb-1 px-0"
                    >
                        <Link
                            className="flex h-full w-full px-2"
                            to={item.path}
                        >
                            <span className="flex gap-2 items-center w-full">
                                <span className="text-xl opacity-50">
                                    {item.icon}
                                </span>
                                <span>{t(item.tkey) || item.label}</span>
                            </span>
                        </Link>
                    </Dropdown.Item>
                ))}
                <Dropdown.Item variant="divider" />
                <Dropdown.Item
                    eventKey="Sign Out"
                    className="gap-2"
                    onClick={signOut}
                >
                    <span className="text-xl opacity-50">
                        <HiOutlineLogout />
                    </span>
                    <span>
                        <Trans i18nKey="profile.signOut" default="Sign Out" />
                    </span>
                </Dropdown.Item>
            </Dropdown>
        </div>
    )
}

const UserDropdown = withHeaderItem(_UserDropdown)

export default UserDropdown
