
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateWorkflowResponse extends SdkResponse {
    private 'enable_stream_response'?: boolean;
    public id?: string;
    private 'workflow_urn'?: string;
    public name?: string;
    public description?: string;
    private 'created_time'?: string;
    private 'updated_time'?: string;
    private 'created_by'?: string;
    public constructor() { 
        super();
    }
    public withEnableStreamResponse(enableStreamResponse: boolean): CreateWorkflowResponse {
        this['enable_stream_response'] = enableStreamResponse;
        return this;
    }
    public set enableStreamResponse(enableStreamResponse: boolean  | undefined) {
        this['enable_stream_response'] = enableStreamResponse;
    }
    public get enableStreamResponse(): boolean | undefined {
        return this['enable_stream_response'];
    }
    public withId(id: string): CreateWorkflowResponse {
        this['id'] = id;
        return this;
    }
    public withWorkflowUrn(workflowUrn: string): CreateWorkflowResponse {
        this['workflow_urn'] = workflowUrn;
        return this;
    }
    public set workflowUrn(workflowUrn: string  | undefined) {
        this['workflow_urn'] = workflowUrn;
    }
    public get workflowUrn(): string | undefined {
        return this['workflow_urn'];
    }
    public withName(name: string): CreateWorkflowResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateWorkflowResponse {
        this['description'] = description;
        return this;
    }
    public withCreatedTime(createdTime: string): CreateWorkflowResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): CreateWorkflowResponse {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withCreatedBy(createdBy: string): CreateWorkflowResponse {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
}