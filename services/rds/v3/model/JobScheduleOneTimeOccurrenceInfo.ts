

export class JobScheduleOneTimeOccurrenceInfo {
    private 'active_start_date'?: string;
    private 'active_start_time'?: string;
    public constructor() { 
    }
    public withActiveStartDate(activeStartDate: string): JobScheduleOneTimeOccurrenceInfo {
        this['active_start_date'] = activeStartDate;
        return this;
    }
    public set activeStartDate(activeStartDate: string  | undefined) {
        this['active_start_date'] = activeStartDate;
    }
    public get activeStartDate(): string | undefined {
        return this['active_start_date'];
    }
    public withActiveStartTime(activeStartTime: string): JobScheduleOneTimeOccurrenceInfo {
        this['active_start_time'] = activeStartTime;
        return this;
    }
    public set activeStartTime(activeStartTime: string  | undefined) {
        this['active_start_time'] = activeStartTime;
    }
    public get activeStartTime(): string | undefined {
        return this['active_start_time'];
    }
}