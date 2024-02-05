enum DayOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}

class OpeningPolicy {
    isOpen(dayOfWeek: DayOfWeek, timeOfDay: number): boolean {
        if (dayOfWeek === DayOfWeek.Sunday) {
            return false
        }

        if (timeOfDay >= 19 && timeOfDay <= 23) {
            return true
        }

        return false
    }
}

export default OpeningPolicy
