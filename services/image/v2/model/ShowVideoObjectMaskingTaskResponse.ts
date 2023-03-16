import { TaskCallback } from './TaskCallback';
import { TaskInput } from './TaskInput';
import { TaskOutput } from './TaskOutput';
import { VideoObjectMaskingTaskConfig } from './VideoObjectMaskingTaskConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVideoObjectMaskingTaskResponse extends SdkResponse {
    private 'task_id'?: string | undefined;
    private 'create_time'?: string | undefined;
    private 'update_time'?: string | undefined;
    public state?: ShowVideoObjectMaskingTaskResponseStateEnum;
    public input?: TaskInput;
    public output?: TaskOutput;
    public config?: VideoObjectMaskingTaskConfig;
    public callback?: TaskCallback;
    private 'X-request-id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): ShowVideoObjectMaskingTaskResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withCreateTime(createTime: string): ShowVideoObjectMaskingTaskResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowVideoObjectMaskingTaskResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
    public withState(state: ShowVideoObjectMaskingTaskResponseStateEnum): ShowVideoObjectMaskingTaskResponse {
        this['state'] = state;
        return this;
    }
    public withInput(input: TaskInput): ShowVideoObjectMaskingTaskResponse {
        this['input'] = input;
        return this;
    }
    public withOutput(output: TaskOutput): ShowVideoObjectMaskingTaskResponse {
        this['output'] = output;
        return this;
    }
    public withConfig(config: VideoObjectMaskingTaskConfig): ShowVideoObjectMaskingTaskResponse {
        this['config'] = config;
        return this;
    }
    public withCallback(callback: TaskCallback): ShowVideoObjectMaskingTaskResponse {
        this['callback'] = callback;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowVideoObjectMaskingTaskResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-request-id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowVideoObjectMaskingTaskResponseStateEnum {
    SUCCEEDED = 'SUCCEEDED',
    FAILED = 'FAILED',
    RUNNING = 'RUNNING'
}
