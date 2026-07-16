

export class ExecutionBrief {
    private 'execution_id'?: string;
    private 'created_at'?: string;
    public status?: string;
    private 'running_steps'?: Array<string>;
    private 'current_steps'?: Array<string>;
    public duration?: number;
    public constructor() { 
    }
    public withExecutionId(executionId: string): ExecutionBrief {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): string | undefined {
        return this['execution_id'];
    }
    public withCreatedAt(createdAt: string): ExecutionBrief {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withStatus(status: string): ExecutionBrief {
        this['status'] = status;
        return this;
    }
    public withRunningSteps(runningSteps: Array<string>): ExecutionBrief {
        this['running_steps'] = runningSteps;
        return this;
    }
    public set runningSteps(runningSteps: Array<string>  | undefined) {
        this['running_steps'] = runningSteps;
    }
    public get runningSteps(): Array<string> | undefined {
        return this['running_steps'];
    }
    public withCurrentSteps(currentSteps: Array<string>): ExecutionBrief {
        this['current_steps'] = currentSteps;
        return this;
    }
    public set currentSteps(currentSteps: Array<string>  | undefined) {
        this['current_steps'] = currentSteps;
    }
    public get currentSteps(): Array<string> | undefined {
        return this['current_steps'];
    }
    public withDuration(duration: number): ExecutionBrief {
        this['duration'] = duration;
        return this;
    }
}