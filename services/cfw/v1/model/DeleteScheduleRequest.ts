

export class DeleteScheduleRequest {
    private 'project_id'?: string;
    private 'schedule_id'?: string;
    public constructor(projectId?: string, scheduleId?: string) { 
        this['project_id'] = projectId;
        this['schedule_id'] = scheduleId;
    }
    public withProjectId(projectId: string): DeleteScheduleRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withScheduleId(scheduleId: string): DeleteScheduleRequest {
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