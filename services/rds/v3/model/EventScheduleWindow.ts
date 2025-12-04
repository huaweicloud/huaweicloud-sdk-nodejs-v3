

export class EventScheduleWindow {
    private 'planned_day'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(plannedDay?: string) { 
        this['planned_day'] = plannedDay;
    }
    public withPlannedDay(plannedDay: string): EventScheduleWindow {
        this['planned_day'] = plannedDay;
        return this;
    }
    public set plannedDay(plannedDay: string  | undefined) {
        this['planned_day'] = plannedDay;
    }
    public get plannedDay(): string | undefined {
        return this['planned_day'];
    }
    public withStartTime(startTime: string): EventScheduleWindow {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): EventScheduleWindow {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}