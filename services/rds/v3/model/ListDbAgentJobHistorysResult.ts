

export class ListDbAgentJobHistorysResult {
    private 'history_id'?: string;
    private 'run_status'?: string;
    private 'run_time'?: string;
    private 'run_duration'?: string;
    public message?: string;
    public constructor() { 
    }
    public withHistoryId(historyId: string): ListDbAgentJobHistorysResult {
        this['history_id'] = historyId;
        return this;
    }
    public set historyId(historyId: string  | undefined) {
        this['history_id'] = historyId;
    }
    public get historyId(): string | undefined {
        return this['history_id'];
    }
    public withRunStatus(runStatus: string): ListDbAgentJobHistorysResult {
        this['run_status'] = runStatus;
        return this;
    }
    public set runStatus(runStatus: string  | undefined) {
        this['run_status'] = runStatus;
    }
    public get runStatus(): string | undefined {
        return this['run_status'];
    }
    public withRunTime(runTime: string): ListDbAgentJobHistorysResult {
        this['run_time'] = runTime;
        return this;
    }
    public set runTime(runTime: string  | undefined) {
        this['run_time'] = runTime;
    }
    public get runTime(): string | undefined {
        return this['run_time'];
    }
    public withRunDuration(runDuration: string): ListDbAgentJobHistorysResult {
        this['run_duration'] = runDuration;
        return this;
    }
    public set runDuration(runDuration: string  | undefined) {
        this['run_duration'] = runDuration;
    }
    public get runDuration(): string | undefined {
        return this['run_duration'];
    }
    public withMessage(message: string): ListDbAgentJobHistorysResult {
        this['message'] = message;
        return this;
    }
}