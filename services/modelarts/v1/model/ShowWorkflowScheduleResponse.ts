import { WorkflowSchedulePolicies } from './WorkflowSchedulePolicies';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWorkflowScheduleResponse extends SdkResponse {
    public type?: string;
    public content?: { [key: string]: object; };
    public action?: string;
    private 'workflow_id'?: string;
    private 'user_id'?: string;
    public enable?: boolean;
    public uuid?: string;
    public policies?: WorkflowSchedulePolicies;
    private 'created_at'?: string;
    public constructor() { 
        super();
    }
    public withType(type: string): ShowWorkflowScheduleResponse {
        this['type'] = type;
        return this;
    }
    public withContent(content: { [key: string]: object; }): ShowWorkflowScheduleResponse {
        this['content'] = content;
        return this;
    }
    public withAction(action: string): ShowWorkflowScheduleResponse {
        this['action'] = action;
        return this;
    }
    public withWorkflowId(workflowId: string): ShowWorkflowScheduleResponse {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withUserId(userId: string): ShowWorkflowScheduleResponse {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withEnable(enable: boolean): ShowWorkflowScheduleResponse {
        this['enable'] = enable;
        return this;
    }
    public withUuid(uuid: string): ShowWorkflowScheduleResponse {
        this['uuid'] = uuid;
        return this;
    }
    public withPolicies(policies: WorkflowSchedulePolicies): ShowWorkflowScheduleResponse {
        this['policies'] = policies;
        return this;
    }
    public withCreatedAt(createdAt: string): ShowWorkflowScheduleResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
}