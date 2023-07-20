import { MbTaskParameter } from './MbTaskParameter';


export class MbTasksReportReq {
    private 'task_id'?: string;
    public status?: string;
    private 'task_name'?: string;
    public retry?: boolean;
    public parameter?: MbTaskParameter;
    public constructor() { 
    }
    public withTaskId(taskId: string): MbTasksReportReq {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withStatus(status: string): MbTasksReportReq {
        this['status'] = status;
        return this;
    }
    public withTaskName(taskName: string): MbTasksReportReq {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withRetry(retry: boolean): MbTasksReportReq {
        this['retry'] = retry;
        return this;
    }
    public withParameter(parameter: MbTaskParameter): MbTasksReportReq {
        this['parameter'] = parameter;
        return this;
    }
}