import { ImageToVideoConfig } from './ImageToVideoConfig';
import { TaskCallback } from './TaskCallback';
import { TaskInput } from './TaskInput';
import { TaskOutput } from './TaskOutput';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowImageToVideoTaskResponse extends SdkResponse {
    private 'task_id'?: string | undefined;
    private 'create_time'?: string | undefined;
    private 'update_time'?: string | undefined;
    public state?: string;
    public input?: TaskInput;
    public output?: TaskOutput;
    public config?: ImageToVideoConfig;
    public callback?: TaskCallback;
    private 'X-request-id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): ShowImageToVideoTaskResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withCreateTime(createTime: string): ShowImageToVideoTaskResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowImageToVideoTaskResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
    public withState(state: string): ShowImageToVideoTaskResponse {
        this['state'] = state;
        return this;
    }
    public withInput(input: TaskInput): ShowImageToVideoTaskResponse {
        this['input'] = input;
        return this;
    }
    public withOutput(output: TaskOutput): ShowImageToVideoTaskResponse {
        this['output'] = output;
        return this;
    }
    public withConfig(config: ImageToVideoConfig): ShowImageToVideoTaskResponse {
        this['config'] = config;
        return this;
    }
    public withCallback(callback: TaskCallback): ShowImageToVideoTaskResponse {
        this['callback'] = callback;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowImageToVideoTaskResponse {
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