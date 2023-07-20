import { ImageHighresolutionMattingConfig } from './ImageHighresolutionMattingConfig';
import { ImageHighresolutionMattingInput } from './ImageHighresolutionMattingInput';
import { TaskCallback } from './TaskCallback';
import { TaskOutput } from './TaskOutput';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowImageHighresolutionMattingTaskResponse extends SdkResponse {
    private 'task_id'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public state?: string;
    public input?: ImageHighresolutionMattingInput;
    public output?: TaskOutput;
    public config?: ImageHighresolutionMattingConfig;
    public callback?: TaskCallback;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): ShowImageHighresolutionMattingTaskResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withCreateTime(createTime: string): ShowImageHighresolutionMattingTaskResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowImageHighresolutionMattingTaskResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withState(state: string): ShowImageHighresolutionMattingTaskResponse {
        this['state'] = state;
        return this;
    }
    public withInput(input: ImageHighresolutionMattingInput): ShowImageHighresolutionMattingTaskResponse {
        this['input'] = input;
        return this;
    }
    public withOutput(output: TaskOutput): ShowImageHighresolutionMattingTaskResponse {
        this['output'] = output;
        return this;
    }
    public withConfig(config: ImageHighresolutionMattingConfig): ShowImageHighresolutionMattingTaskResponse {
        this['config'] = config;
        return this;
    }
    public withCallback(callback: TaskCallback): ShowImageHighresolutionMattingTaskResponse {
        this['callback'] = callback;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowImageHighresolutionMattingTaskResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}