
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNewTaskStatusResponse extends SdkResponse {
    private 'task_status'?: string;
    private 'task_msg'?: string;
    public constructor() { 
        super();
    }
    public withTaskStatus(taskStatus: string): ShowNewTaskStatusResponse {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: string  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): string | undefined {
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