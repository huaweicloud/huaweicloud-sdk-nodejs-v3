

export class DeleteWorkflowScheduleIdRequest {
    private 'workflow_id'?: string;
    private 'schedule_id'?: string;
    public constructor(workflowId?: string, scheduleId?: string) { 
        this['workflow_id'] = workflowId;
        this['schedule_id'] = scheduleId;
    }
    public withWorkflowId(workflowId: string): DeleteWorkflowScheduleIdRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withScheduleId(scheduleId: string): DeleteWorkflowScheduleIdRequest {
        this['schedule_id'] = scheduleId;
        return this;
    }
    public set scheduleId(scheduleId: string  | undefined) {
        this['schedule_id'] = scheduleId;
    }
    public get scheduleId(): string | undefined {
        return this['schedule_id'];
    }
}