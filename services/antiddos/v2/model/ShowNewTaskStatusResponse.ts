
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNewTaskStatusResponse extends SdkResponse {
    private 'task_status'?: ShowNewTaskStatusResponseTaskStatusEnum | string;
    private 'task_msg'?: string;
    public constructor() { 
        super();
    }
    public withTaskStatus(taskStatus: ShowNewTaskStatusResponseTaskStatusEnum | string): ShowNewTaskStatusResponse {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: ShowNewTaskStatusResponseTaskStatusEnum | string  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): ShowNewTaskStatusResponseTaskStatusEnum | string | undefined {
        return this['task_status'];
    }
    public withTaskMsg(taskMsg: string): ShowNewTaskStatusResponse {
        this['task_msg'] = taskMsg;
        return this;
    }
    public set taskMsg(taskMsg: string  | undefined) {
        this['task_msg'] = taskMsg;
    }
    public get taskMsg(): string | undefined {
        return this['task_msg'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowNewTaskStatusResponseTaskStatusEnum {
    SUCCESS = 'success',
    FAILED = 'failed',
    WAITING = 'waiting',
    RUNNING = 'running',
    PREPROCESS = 'preprocess',
    READY = 'ready'
}
