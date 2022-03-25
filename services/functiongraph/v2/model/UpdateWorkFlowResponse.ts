
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateWorkFlowResponse extends SdkResponse {
    public id?: string;
    private 'workflow_urn'?: string | undefined;
    public name?: string;
    public description?: string;
    private 'created_time'?: string | undefined;
    private 'updated_time'?: string | undefined;
    private 'created_by'?: string | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateWorkFlowResponse {
        this['id'] = id;
        return this;
    }
    public withWorkflowUrn(workflowUrn: string): UpdateWorkFlowResponse {
        this['workflow_urn'] = workflowUrn;
        return this;
    }
    public set workflowUrn(workflowUrn: string | undefined) {
        this['workflow_urn'] = workflowUrn;
    }
    public get workflowUrn() {
        return this['workflow_urn'];
    }
    public withName(name: string): UpdateWorkFlowResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateWorkFlowResponse {
        this['description'] = description;
        return this;
    }
    public withCreatedTime(createdTime: string): UpdateWorkFlowResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime() {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): UpdateWorkFlowResponse {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime() {
        return this['updated_time'];
    }
    public withCreatedBy(createdBy: string): UpdateWorkFlowResponse {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy() {
        return this['created_by'];
    }
}