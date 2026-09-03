

export class ExecuteWindow {
    private 'planned_execution_day'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor() { 
    }
    public withPlannedExecutionDay(plannedExecutionDay: string): ExecuteWindow {
        this['planned_execution_day'] = plannedExecutionDay;
        return this;
    }
    public set plannedExecutionDay(plannedExecutionDay: string  | undefined) {
        this['planned_execution_day'] = plannedExecutionDay;
    }
    public get plannedExecutionDay(): string | undefined {
        return this['planned_execution_day'];
    }
    public withStartTime(startTime: string): ExecuteWindow {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ExecuteWindow {
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