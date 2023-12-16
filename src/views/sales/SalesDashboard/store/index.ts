import { useSelector } from 'react-redux'
import { combineReducers } from '@reduxjs/toolkit'
import type { TypedUseSelectorHook } from 'react-redux'

import reducers, {
    SLICE_NAME,
    SalesDashboardState,
} from './salesDashboardSlice'
import type { RootState } from '@/store'

const reducer = combineReducers({
    data: reducers,
})

export const useAppSelector: TypedUseSelectorHook<
    RootState & {
        [SLICE_NAME]: {
            data: SalesDashboardState
        }
    }
> = useSelector

export * from './salesDashboardSlice'
export { useAppDispatch } from '@/store'
export default reducer
