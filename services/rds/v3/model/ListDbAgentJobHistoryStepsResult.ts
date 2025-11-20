

export class ListDbAgentJobHistoryStepsResult {
    private 'step_id'?: string;
    private 'step_name'?: string;
    private 'run_status'?: string;
    private 'run_time'?: string;
    private 'run_duration'?: string;
    public message?: string;
    public constructor() { 
    }
    public withStepId(stepId: string): ListDbAgentJobHistoryStepsResult {
        this['step_id'] = stepId;
        return this;
    }
    public set stepId(stepId: string  | undefined) {
        this['step_id'] = stepId;
    }
    public get stepId(): string | undefined {
        return this['step_id'];
    }
    public withStepName(stepName: string): ListDbAgentJobHistoryStepsResult {
        this['step_name'] = stepName;
        return this;
    }
    public set stepName(stepName: string  | undefined) {
        this['step_name'] = stepName;
    }
    public get stepName(): string | undefined {
        return this['step_name'];
    }
    public withRunStatus(runStatus: string): ListDbAgentJobHistoryStepsResult {
        this['run_status'] = runStatus;
        return this;
    }
    public set runStatus(runStatus: string  | undefined) {
        this['run_status'] = runStatus;
    }
    public get runStatus(): string | undefined {
        return this['run_status'];
    }
    public withRunTime(runTime: string): ListDbAgentJobHistoryStepsResult {
        this['run_time'] = runTime;
        return this;
    }
    public set runTime(runTime: string  | undefined) {
        this['run_time'] = runTime;
    }
    public get runTime(): string | undefined {
        return this['run_time'];
    }
    public withRunDuration(runDuration: string): ListDbAgentJobHistoryStepsResult {
        this['run_duration'] = runDuration;
        return this;
    }
    public set runDuration(runDuration: string  | undefined) {
        this['run_duration'] = runDuration;
    }
    public get runDuration(): string | undefined {
        return this['run_duration'];
    }
    public withMessage(message: string): ListDbAgentJobHistoryStepsResult {
        this['message'] = message;
        return this;
    }
}