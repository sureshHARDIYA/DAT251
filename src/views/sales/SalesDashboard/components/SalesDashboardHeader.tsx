import dayjs from 'dayjs'
import { Trans } from 'react-i18next'
import { HiOutlineFilter } from 'react-icons/hi'

import {
    setStartDate,
    setEndDate,
    getSalesDashboardData,
    useAppSelector,
} from '../store'
import { useAppDispatch } from '@/store'
import Button from '@/components/ui/Button'
import DatePicker from '@/components/ui/DatePicker'

const dateFormat = 'MMM DD, YYYY'

const { DatePickerRange } = DatePicker

const SalesDashboardHeader = () => {
    const dispatch = useAppDispatch()

    const startDate = useAppSelector(
        (state) => state.salesDashboard.data.startDate
    )
    const endDate = useAppSelector((state) => state.salesDashboard.data.endDate)

    const handleDateChange = (value: [Date | null, Date | null]) => {
        dispatch(setStartDate(dayjs(value[0]).unix()))
        dispatch(setEndDate(dayjs(value[1]).unix()))
    }

    const onFilter = () => {
        dispatch(getSalesDashboardData())
    }

    return (
        <div className="lg:flex items-center justify-between mb-4 gap-3">
            <div className="mb-4 lg:mb-0">
                <h3>
                    <Trans
                        i18nKey="nav.appsSales.title"
                        default="Sales Overview"
                    />
                </h3>
                <p>
                    <Trans
                        i18nKey="nav.appsSales.subtitle"
                        default="View your current sales & summary"
                    />
                </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center gap-3">
                <DatePickerRange
                    value={[
                        dayjs.unix(startDate).toDate(),
                        dayjs.unix(endDate).toDate(),
                    ]}
                    inputFormat={dateFormat}
                    size="sm"
                    onChange={handleDateChange}
                />
                <Button size="sm" icon={<HiOutlineFilter />} onClick={onFilter}>
                    Filter
                </Button>
            </div>
        </div>
    )
}

export default SalesDashboardHeader
