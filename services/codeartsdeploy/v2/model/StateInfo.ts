import { StepInfo } from './StepInfo';


export class StateInfo {
    public status?: string;
    private 'nick_name'?: string;
    private 'record_id'?: string;
    private 'task_id'?: string;
    public step?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public executor?: string;
    private 'task_name'?: string;
    private 'step_state'?: Array<StepInfo>;
    public constructor() { 
    }
    public withStatus(status: string): StateInfo {
        this['status'] = status;
        return this;
    }
    public withNickName(nickName: string): StateInfo {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withRecordId(recordId: string): StateInfo {
        this['record_id'] = recordId;
        return this;
    }
    public set recordId(recordId: string  | undefined) {
        this['record_id'] = recordId;
    }
    public get recordId(): string | undefined {
        return this['record_id'];
    }
    public withTaskId(taskId: string): StateInfo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withStep(step: string): StateInfo {
        this['step'] = step;
        return this;
    }
    public withStartTime(startTime: string): StateInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): StateInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withExecutor(executor: string): StateInfo {
        this['executor'] = executor;
        return this;
    }
    public withTaskName(taskName: string): StateInfo {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withStepState(stepState: Array<StepInfo>): StateInfo {
        this['step_state'] = stepState;
        return this;
    }
    public set stepState(stepState: Array<StepInfo>  | undefined) {
        this['step_state'] = stepState;
    }
    public get stepState(): Array<StepInfo> | undefined {
        return this['step_state'];
    }
}