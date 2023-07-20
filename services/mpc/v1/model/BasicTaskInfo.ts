import { ObsObjInfo } from './ObsObjInfo';


export class BasicTaskInfo {
    private 'task_id'?: string;
    public status?: string;
    private 'create_time'?: string;
    private 'end_time'?: string;
    public output?: ObsObjInfo;
    public description?: string;
    public constructor() { 
    }
    public withTaskId(taskId: string): BasicTaskInfo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withStatus(status: string): BasicTaskInfo {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): BasicTaskInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withEndTime(endTime: string): BasicTaskInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withOutput(output: ObsObjInfo): BasicTaskInfo {
        this['output'] = output;
        return this;
    }
    public withDescription(description: string): BasicTaskInfo {
        this['description'] = description;
        return this;
    }
}