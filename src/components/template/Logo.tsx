import classNames from 'classnames'
import { Link } from 'react-router-dom'

import SiteLogo from '@/assets/svg/Logo'
import type { CommonProps } from '@/@types/common'
import { APP_NAME } from '@/constants/app.constant'

const LOGO_SRC_PATH = '/img/logo/'

interface LogoProps extends CommonProps {
    type?: 'full' | 'streamline'
    mode?: 'light' | 'dark'
    imgClass?: string
    logoWidth?: number | string
}

const Logo = (props: LogoProps) => {
    const {
        type = 'full',
        mode = 'light',
        className,
        imgClass = 'mt-3 mb-3',
        style,
        logoWidth = 'auto',
    } = props

    const smallLogo = type === 'streamline' && mode === 'light'

    return (
        <div
            className={classNames('logo', className)}
            style={{
                ...style,
                ...{ width: logoWidth },
            }}
        >
            <Link to="/">
                {smallLogo && (
                    <img
                        className={imgClass}
                        src={`${LOGO_SRC_PATH}logo-${mode}-${type}.png`}
                        alt={`${APP_NAME} logo`}
                    />
                )}
                {!smallLogo && <SiteLogo />}
            </Link>
        </div>
    )
}

export default Logo
