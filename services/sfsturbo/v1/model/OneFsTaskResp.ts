import { FsDuInfo } from './FsDuInfo';


export class OneFsTaskResp {
    private 'task_id'?: string;
    public status?: OneFsTaskRespStatusEnum | string;
    private 'dir_usage'?: FsDuInfo;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public constructor(taskId?: string, status?: string, beginTime?: string, endTime?: string) { 
        this['task_id'] = taskId;
        this['status'] = status;
        this['begin_time'] = beginTime;
        this['end_time'] = endTime;
    }
    public withTaskId(taskId: string): OneFsTaskResp {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withStatus(status: OneFsTaskRespStatusEnum | string): OneFsTaskResp {
        this['status'] = status;
        return this;
    }
    public withDirUsage(dirUsage: FsDuInfo): OneFsTaskResp {
        this['dir_usage'] = dirUsage;
        return this;
    }
    public set dirUsage(dirUsage: FsDuInfo  | undefined) {
        this['dir_usage'] = dirUsage;
    }
    public get dirUsage(): FsDuInfo | undefined {
        return this['dir_usage'];
    }
    public withBeginTime(beginTime: string): OneFsTaskResp {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): OneFsTaskResp {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OneFsTaskRespStatusEnum {
    SUCCESS = 'SUCCESS',
    DOING = 'DOING',
    FAIL = 'FAIL'
}
