import { WorkflowScheduleUpdate } from './WorkflowScheduleUpdate';


export class UpdateWorkflowScheduleRequest {
    private 'workflow_id'?: string;
    private 'schedule_id'?: string;
    public body?: WorkflowScheduleUpdate;
    public constructor(workflowId?: string, scheduleId?: string) { 
        this['workflow_id'] = workflowId;
        this['schedule_id'] = scheduleId;
    }
    public withWorkflowId(workflowId: string): UpdateWorkflowScheduleRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withScheduleId(scheduleId: string): UpdateWorkflowScheduleRequest {
        this['schedule_id'] = scheduleId;
        return this;
    }
    public set scheduleId(scheduleId: string  | undefined) {
        this['schedule_id'] = scheduleId;
    }
    public get scheduleId(): string | undefined {
        return this['schedule_id'];
    }
    public withBody(body: WorkflowScheduleUpdate): UpdateWorkflowScheduleRequest {
        this['body'] = body;
        return this;
    }
}