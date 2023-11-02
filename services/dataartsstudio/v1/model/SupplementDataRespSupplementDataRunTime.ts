

export class SupplementDataRespSupplementDataRunTime {
    private 'time_of_day'?: string;
    private 'day_of_week'?: string;
    private 'day_of_month'?: string;
    public constructor() { 
    }
    public withTimeOfDay(timeOfDay: string): SupplementDataRespSupplementDataRunTime {
        this['time_of_day'] = timeOfDay;
        return this;
    }
    public set timeOfDay(timeOfDay: string  | undefined) {
        this['time_of_day'] = timeOfDay;
    }
    public get timeOfDay(): string | undefined {
        return this['time_of_day'];
    }
    public withDayOfWeek(dayOfWeek: string): SupplementDataRespSupplementDataRunTime {
        this['day_of_week'] = dayOfWeek;
        return this;
    }
    public set dayOfWeek(dayOfWeek: string  | undefined) {
        this['day_of_week'] = dayOfWeek;
    }
    public get dayOfWeek(): string | undefined {
        return this['day_of_week'];
    }
    public withDayOfMonth(dayOfMonth: string): SupplementDataRespSupplementDataRunTime {
        this['day_of_month'] = dayOfMonth;
        return this;
    }
    public set dayOfMonth(dayOfMonth: string  | undefined) {
        this['day_of_month'] = dayOfMonth;
    }
    public get dayOfMonth(): string | undefined {
        return this['day_of_month'];
    }
}