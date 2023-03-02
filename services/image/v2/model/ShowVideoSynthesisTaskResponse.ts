import { TaskCallback } from './TaskCallback';
import { TaskInput } from './TaskInput';
import { TaskOutput } from './TaskOutput';
import { VideoSynthesisConfig } from './VideoSynthesisConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVideoSynthesisTaskResponse extends SdkResponse {
    private 'task_id'?: string | undefined;
    private 'create_time'?: string | undefined;
    private 'update_time'?: string | undefined;
    public state?: string;
    public input?: TaskInput;
    public output?: TaskOutput;
    public config?: VideoSynthesisConfig;
    public callback?: TaskCallback;
    private 'X-request-id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): ShowVideoSynthesisTaskResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withCreateTime(createTime: string): ShowVideoSynthesisTaskResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowVideoSynthesisTaskResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
    public withState(state: string): ShowVideoSynthesisTaskResponse {
        this['state'] = state;
        return this;
    }
    public withInput(input: TaskInput): ShowVideoSynthesisTaskResponse {
        this['input'] = input;
        return this;
    }
    public withOutput(output: TaskOutput): ShowVideoSynthesisTaskResponse {
        this['output'] = output;
        return this;
    }
    public withConfig(config: VideoSynthesisConfig): ShowVideoSynthesisTaskResponse {
        this['config'] = config;
        return this;
    }
    public withCallback(callback: TaskCallback): ShowVideoSynthesisTaskResponse {
        this['callback'] = callback;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowVideoSynthesisTaskResponse {
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