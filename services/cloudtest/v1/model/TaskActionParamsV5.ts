

export class TaskActionParamsV5 {
    private 'action_id'?: number;
    private 'environment_group_id'?: string;
    private 'plan_id'?: string;
    public taskIds?: Array<string>;
    public constructor() { 
    }
    public withActionId(actionId: number): TaskActionParamsV5 {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: number  | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId(): number | undefined {
        return this['action_id'];
    }
    public withEnvironmentGroupId(environmentGroupId: string): TaskActionParamsV5 {
        this['environment_group_id'] = environmentGroupId;
        return this;
    }
    public set environmentGroupId(environmentGroupId: string  | undefined) {
        this['environment_group_id'] = environmentGroupId;
    }
    public get environmentGroupId(): string | undefined {
        return this['environment_group_id'];
    }
    public withPlanId(planId: string): TaskActionParamsV5 {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
    public withTaskIds(taskIds: Array<string>): TaskActionParamsV5 {
        this['taskIds'] = taskIds;
        return this;
    }
}