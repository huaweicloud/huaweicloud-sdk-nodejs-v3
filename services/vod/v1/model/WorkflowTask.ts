import { ObjectTaskResult } from './ObjectTaskResult';
import { ObsInfo } from './ObsInfo';


export class WorkflowTask {
    public input?: ObsInfo;
    private 'task_result'?: Array<ObjectTaskResult>;
    public constructor() { 
    }
    public withInput(input: ObsInfo): WorkflowTask {
        this['input'] = input;
        return this;
    }
    public withTaskResult(taskResult: Array<ObjectTaskResult>): WorkflowTask {
        this['task_result'] = taskResult;
        return this;
    }
    public set taskResult(taskResult: Array<ObjectTaskResult>  | undefined) {
        this['task_result'] = taskResult;
    }
    public get taskResult(): Array<ObjectTaskResult> | undefined {
        return this['task_result'];
    }
}