import { WorkflowSchedule } from './WorkflowSchedule';


export class CreateWorkflowScheduleRequest {
    private 'workflow_id'?: string;
    public body?: WorkflowSchedule;
    public constructor(workflowId?: string) { 
        this['workflow_id'] = workflowId;
    }
    public withWorkflowId(workflowId: string): CreateWorkflowScheduleRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withBody(body: WorkflowSchedule): CreateWorkflowScheduleRequest {
        this['body'] = body;
        return this;
    }
}