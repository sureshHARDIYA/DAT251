import type { CommonProps } from '@/@types/common'

export interface ForgotPasswordFormProps extends CommonProps {
    disableSubmit?: boolean
    signInUrl?: string
}
export type ForgotPasswordFormSchema = {
    email: string
}
