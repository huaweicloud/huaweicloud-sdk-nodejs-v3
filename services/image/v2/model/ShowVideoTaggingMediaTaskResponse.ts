import { TaskCallback } from './TaskCallback';
import { TaskOutput } from './TaskOutput';
import { VideoTaggingMediaTaskInput } from './VideoTaggingMediaTaskInput';
import { VideoTaggingTaskConfig } from './VideoTaggingTaskConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVideoTaggingMediaTaskResponse extends SdkResponse {
    private 'task_id'?: string | undefined;
    private 'create_time'?: string | undefined;
    private 'update_time'?: string | undefined;
    public state?: string;
    public input?: VideoTaggingMediaTaskInput;
    public output?: TaskOutput;
    public config?: VideoTaggingTaskConfig;
    public callback?: TaskCallback;
    private 'X-request-id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): ShowVideoTaggingMediaTaskResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withCreateTime(createTime: string): ShowVideoTaggingMediaTaskResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowVideoTaggingMediaTaskResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
    public withState(state: string): ShowVideoTaggingMediaTaskResponse {
        this['state'] = state;
        return this;
    }
    public withInput(input: VideoTaggingMediaTaskInput): ShowVideoTaggingMediaTaskResponse {
        this['input'] = input;
        return this;
    }
    public withOutput(output: TaskOutput): ShowVideoTaggingMediaTaskResponse {
        this['output'] = output;
        return this;
    }
    public withConfig(config: VideoTaggingTaskConfig): ShowVideoTaggingMediaTaskResponse {
        this['config'] = config;
        return this;
    }
    public withCallback(callback: TaskCallback): ShowVideoTaggingMediaTaskResponse {
        this['callback'] = callback;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowVideoTaggingMediaTaskResponse {
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