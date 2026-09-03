

export class DeleteTaskParams {
    public planId?: string;
    public taskIds?: Array<string>;
    public constructor() { 
    }
    public withPlanId(planId: string): DeleteTaskParams {
        this['planId'] = planId;
        return this;
    }
    public withTaskIds(taskIds: Array<string>): DeleteTaskParams {
        this['taskIds'] = taskIds;
        return this;
    }
}