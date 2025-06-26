import { BatchConsistencyReq } from './BatchConsistencyReq';


export class BatchGetConsistencyResultReq {
    private 'task_info'?: Array<BatchConsistencyReq>;
    public constructor(taskInfo?: Array<BatchConsistencyReq>) { 
        this['task_info'] = taskInfo;
    }
    public withTaskInfo(taskInfo: Array<BatchConsistencyReq>): BatchGetConsistencyResultReq {
        this['task_info'] = taskInfo;
        return this;
    }
    public set taskInfo(taskInfo: Array<BatchConsistencyReq>  | undefined) {
        this['task_info'] = taskInfo;
    }
    public get taskInfo(): Array<BatchConsistencyReq> | undefined {
        return this['task_info'];
    }
}