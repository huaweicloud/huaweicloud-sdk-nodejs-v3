

export class ActionInfo {
    private 'action_name'?: string;
    public progress?: number;
    public completed?: boolean;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public result?: string;
    public logs?: string;
    public constructor() { 
    }
    public withActionName(actionName: string): ActionInfo {
        this['action_name'] = actionName;
        return this;
    }
    public set actionName(actionName: string  | undefined) {
        this['action_name'] = actionName;
    }
    public get actionName(): string | undefined {
        return this['action_name'];
    }
    public withProgress(progress: number): ActionInfo {
        this['progress'] = progress;
        return this;
    }
    public withCompleted(completed: boolean): ActionInfo {
        this['completed'] = completed;
        return this;
    }
    public withStartTime(startTime: string): ActionInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ActionInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withResult(result: string): ActionInfo {
        this['result'] = result;
        return this;
    }
    public withLogs(logs: string): ActionInfo {
        this['logs'] = logs;
        return this;
    }
}