import { SummarizationAnalysisConfig } from './SummarizationAnalysisConfig';
import { TaskCallback } from './TaskCallback';
import { TaskOutput } from './TaskOutput';
import { VideoSummarizationTaskInput } from './VideoSummarizationTaskInput';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVideoSummarizationAnalysisTaskResponse extends SdkResponse {
    private 'task_id'?: string | undefined;
    private 'create_time'?: string | undefined;
    private 'update_time'?: string | undefined;
    public state?: ShowVideoSummarizationAnalysisTaskResponseStateEnum;
    public input?: VideoSummarizationTaskInput;
    public output?: TaskOutput;
    public config?: SummarizationAnalysisConfig;
    public callback?: TaskCallback;
    private 'X-request-id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): ShowVideoSummarizationAnalysisTaskResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withCreateTime(createTime: string): ShowVideoSummarizationAnalysisTaskResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowVideoSummarizationAnalysisTaskResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
    public withState(state: ShowVideoSummarizationAnalysisTaskResponseStateEnum): ShowVideoSummarizationAnalysisTaskResponse {
        this['state'] = state;
        return this;
    }
    public withInput(input: VideoSummarizationTaskInput): ShowVideoSummarizationAnalysisTaskResponse {
        this['input'] = input;
        return this;
    }
    public withOutput(output: TaskOutput): ShowVideoSummarizationAnalysisTaskResponse {
        this['output'] = output;
        return this;
    }
    public withConfig(config: SummarizationAnalysisConfig): ShowVideoSummarizationAnalysisTaskResponse {
        this['config'] = config;
        return this;
    }
    public withCallback(callback: TaskCallback): ShowVideoSummarizationAnalysisTaskResponse {
        this['callback'] = callback;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowVideoSummarizationAnalysisTaskResponse {
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
export enum ShowVideoSummarizationAnalysisTaskResponseStateEnum {
    SUCCEEDED = 'SUCCEEDED',
    FAILED = 'FAILED',
    RUNNING = 'RUNNING'
}
