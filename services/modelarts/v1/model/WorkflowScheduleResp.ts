import { WorkflowSchedulePoliciesResp } from './WorkflowSchedulePoliciesResp';


export class WorkflowScheduleResp {
    public type?: string;
    public content?: { [key: string]: string; };
    public action?: string;
    private 'workflow_id'?: string;
    private 'user_id'?: string;
    public enable?: boolean;
    public uuid?: string;
    public policies?: WorkflowSchedulePoliciesResp;
    private 'created_at'?: string;
    public constructor() { 
    }
    public withType(type: string): WorkflowScheduleResp {
        this['type'] = type;
        return this;
    }
    public withContent(content: { [key: string]: string; }): WorkflowScheduleResp {
        this['content'] = content;
        return this;
    }
    public withAction(action: string): WorkflowScheduleResp {
        this['action'] = action;
        return this;
    }
    public withWorkflowId(workflowId: string): WorkflowScheduleResp {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withUserId(userId: string): WorkflowScheduleResp {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withEnable(enable: boolean): WorkflowScheduleResp {
        this['enable'] = enable;
        return this;
    }
    public withUuid(uuid: string): WorkflowScheduleResp {
        this['uuid'] = uuid;
        return this;
    }
    public withPolicies(policies: WorkflowSchedulePoliciesResp): WorkflowScheduleResp {
        this['policies'] = policies;
        return this;
    }
    public withCreatedAt(createdAt: string): WorkflowScheduleResp {
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