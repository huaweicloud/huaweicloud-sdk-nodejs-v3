

export class DailyTimerType {
    public time: string;
    private 'days_of_week'?: string | undefined;
    public constructor(time?: any) { 
        this['time'] = time;
    }
    public withTime(time: string): DailyTimerType {
        this['time'] = time;
        return this;
    }
    public withDaysOfWeek(daysOfWeek: string): DailyTimerType {
        this['days_of_week'] = daysOfWeek;
        return this;
    }
    public set daysOfWeek(daysOfWeek: string | undefined) {
        this['days_of_week'] = daysOfWeek;
    }
    public get daysOfWeek() {
        return this['days_of_week'];
    }
}