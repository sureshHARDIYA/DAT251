import { useAppSelector } from '@/store'
import Logo from '@/components/template/Logo'

const HeaderLogo = () => {
    const mode = useAppSelector((state) => state.theme.mode)

    return <Logo mode={mode} className="hidden md:block" />
}

export default HeaderLogo
