

export class ExecuteWindowResult {
    private 'planned_execution_time'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(plannedExecutionTime?: string, startTime?: string, endTime?: string) { 
        this['planned_execution_time'] = plannedExecutionTime;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withPlannedExecutionTime(plannedExecutionTime: string): ExecuteWindowResult {
        this['planned_execution_time'] = plannedExecutionTime;
        return this;
    }
    public set plannedExecutionTime(plannedExecutionTime: string  | undefined) {
        this['planned_execution_time'] = plannedExecutionTime;
    }
    public get plannedExecutionTime(): string | undefined {
        return this['planned_execution_time'];
    }
    public withStartTime(startTime: string): ExecuteWindowResult {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ExecuteWindowResult {
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