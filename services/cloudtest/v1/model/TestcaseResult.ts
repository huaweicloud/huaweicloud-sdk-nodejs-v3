

export class TestcaseResult {
    private 'execute_result_id'?: string;
    private 'execute_status'?: string;
    private 'failure_cause'?: string;
    private 'task_id'?: string;
    private 'plan_id'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'executor_id'?: string;
    private 'executor_name'?: string;
    public constructor() { 
    }
    public withExecuteResultId(executeResultId: string): TestcaseResult {
        this['execute_result_id'] = executeResultId;
        return this;
    }
    public set executeResultId(executeResultId: string  | undefined) {
        this['execute_result_id'] = executeResultId;
    }
    public get executeResultId(): string | undefined {
        return this['execute_result_id'];
    }
    public withExecuteStatus(executeStatus: string): TestcaseResult {
        this['execute_status'] = executeStatus;
        return this;
    }
    public set executeStatus(executeStatus: string  | undefined) {
        this['execute_status'] = executeStatus;
    }
    public get executeStatus(): string | undefined {
        return this['execute_status'];
    }
    public withFailureCause(failureCause: string): TestcaseResult {
        this['failure_cause'] = failureCause;
        return this;
    }
    public set failureCause(failureCause: string  | undefined) {
        this['failure_cause'] = failureCause;
    }
    public get failureCause(): string | undefined {
        return this['failure_cause'];
    }
    public withTaskId(taskId: string): TestcaseResult {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withPlanId(planId: string): TestcaseResult {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
    public withStartTime(startTime: string): TestcaseResult {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): TestcaseResult {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withExecutorId(executorId: string): TestcaseResult {
        this['executor_id'] = executorId;
        return this;
    }
    public set executorId(executorId: string  | undefined) {
        this['executor_id'] = executorId;
    }
    public get executorId(): string | undefined {
        return this['executor_id'];
    }
    public withExecutorName(executorName: string): TestcaseResult {
        this['executor_name'] = executorName;
        return this;
    }
    public set executorName(executorName: string  | undefined) {
        this['executor_name'] = executorName;
    }
    public get executorName(): string | undefined {
        return this['executor_name'];
    }
}