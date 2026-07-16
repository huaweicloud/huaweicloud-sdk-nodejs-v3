import { WorkflowSchedulePolicies } from './WorkflowSchedulePolicies';


export class WorkflowSchedule {
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
    }
    public withType(type: string): WorkflowSchedule {
        this['type'] = type;
        return this;
    }
    public withContent(content: { [key: string]: object; }): WorkflowSchedule {
        this['content'] = content;
        return this;
    }
    public withAction(action: string): WorkflowSchedule {
        this['action'] = action;
        return this;
    }
    public withWorkflowId(workflowId: string): WorkflowSchedule {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withUserId(userId: string): WorkflowSchedule {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withEnable(enable: boolean): WorkflowSchedule {
        this['enable'] = enable;
        return this;
    }
    public withUuid(uuid: string): WorkflowSchedule {
        this['uuid'] = uuid;
        return this;
    }
    public withPolicies(policies: WorkflowSchedulePolicies): WorkflowSchedule {
        this['policies'] = policies;
        return this;
    }
    public withCreatedAt(createdAt: string): WorkflowSchedule {
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