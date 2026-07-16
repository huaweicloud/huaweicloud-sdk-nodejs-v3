

export class WorkflowStepPolicy {
    private 'poll_interval_seconds'?: string;
    private 'max_execution_minutes'?: string;
    public constructor() { 
    }
    public withPollIntervalSeconds(pollIntervalSeconds: string): WorkflowStepPolicy {
        this['poll_interval_seconds'] = pollIntervalSeconds;
        return this;
    }
    public set pollIntervalSeconds(pollIntervalSeconds: string  | undefined) {
        this['poll_interval_seconds'] = pollIntervalSeconds;
    }
    public get pollIntervalSeconds(): string | undefined {
        return this['poll_interval_seconds'];
    }
    public withMaxExecutionMinutes(maxExecutionMinutes: string): WorkflowStepPolicy {
        this['max_execution_minutes'] = maxExecutionMinutes;
        return this;
    }
    public set maxExecutionMinutes(maxExecutionMinutes: string  | undefined) {
        this['max_execution_minutes'] = maxExecutionMinutes;
    }
    public get maxExecutionMinutes(): string | undefined {
        return this['max_execution_minutes'];
    }
}