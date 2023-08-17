
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceStatusResponse extends SdkResponse {
    private 'task_id'?: string;
    private 'task_status'?: string;
    private 'pipeline_id'?: string;
    private 'pipeline_name'?: string;
    private 'pipeline_url'?: string;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): ShowInstanceStatusResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskStatus(taskStatus: string): ShowInstanceStatusResponse {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: string  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): string | undefined {
        return this['task_status'];
    }
    public withPipelineId(pipelineId: string): ShowInstanceStatusResponse {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): string | undefined {
        return this['pipeline_id'];
    }
    public withPipelineName(pipelineName: string): ShowInstanceStatusResponse {
        this['pipeline_name'] = pipelineName;
        return this;
    }
    public set pipelineName(pipelineName: string  | undefined) {
        this['pipeline_name'] = pipelineName;
    }
    public get pipelineName(): string | undefined {
        return this['pipeline_name'];
    }
    public withPipelineUrl(pipelineUrl: string): ShowInstanceStatusResponse {
        this['pipeline_url'] = pipelineUrl;
        return this;
    }
    public set pipelineUrl(pipelineUrl: string  | undefined) {
        this['pipeline_url'] = pipelineUrl;
    }
    public get pipelineUrl(): string | undefined {
        return this['pipeline_url'];
    }
}