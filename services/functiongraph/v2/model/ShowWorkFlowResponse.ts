import { WorkflowCreateBody } from './WorkflowCreateBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWorkFlowResponse extends SdkResponse {
    public id?: string;
    private 'workflow_urn'?: string;
    private 'created_time'?: string;
    private 'updated_time'?: string;
    private 'created_by'?: string;
    private 'lts_group_id'?: string;
    private 'lts_stream_id'?: string;
    public definition?: WorkflowCreateBody;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowWorkFlowResponse {
        this['id'] = id;
        return this;
    }
    public withWorkflowUrn(workflowUrn: string): ShowWorkFlowResponse {
        this['workflow_urn'] = workflowUrn;
        return this;
    }
    public set workflowUrn(workflowUrn: string  | undefined) {
        this['workflow_urn'] = workflowUrn;
    }
    public get workflowUrn(): string | undefined {
        return this['workflow_urn'];
    }
    public withCreatedTime(createdTime: string): ShowWorkFlowResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): ShowWorkFlowResponse {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withCreatedBy(createdBy: string): ShowWorkFlowResponse {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withLtsGroupId(ltsGroupId: string): ShowWorkFlowResponse {
        this['lts_group_id'] = ltsGroupId;
        return this;
    }
    public set ltsGroupId(ltsGroupId: string  | undefined) {
        this['lts_group_id'] = ltsGroupId;
    }
    public get ltsGroupId(): string | undefined {
        return this['lts_group_id'];
    }
    public withLtsStreamId(ltsStreamId: string): ShowWorkFlowResponse {
        this['lts_stream_id'] = ltsStreamId;
        return this;
    }
    public set ltsStreamId(ltsStreamId: string  | undefined) {
        this['lts_stream_id'] = ltsStreamId;
    }
    public get ltsStreamId(): string | undefined {
        return this['lts_stream_id'];
    }
    public withDefinition(definition: WorkflowCreateBody): ShowWorkFlowResponse {
        this['definition'] = definition;
        return this;
    }
}