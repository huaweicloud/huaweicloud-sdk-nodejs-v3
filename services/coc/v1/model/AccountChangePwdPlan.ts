

export class AccountChangePwdPlan {
    private 'plan_id'?: string;
    private 'resource_id'?: string;
    private 'account_name'?: string;
    public password?: string;
    private 'project_id'?: string;
    private 'create_time'?: number;
    public constructor(planId?: string, resourceId?: string, accountName?: string, password?: string, projectId?: string, createTime?: number) { 
        this['plan_id'] = planId;
        this['resource_id'] = resourceId;
        this['account_name'] = accountName;
        this['password'] = password;
        this['project_id'] = projectId;
        this['create_time'] = createTime;
    }
    public withPlanId(planId: string): AccountChangePwdPlan {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
    public withResourceId(resourceId: string): AccountChangePwdPlan {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withAccountName(accountName: string): AccountChangePwdPlan {
        this['account_name'] = accountName;
        return this;
    }
    public set accountName(accountName: string  | undefined) {
        this['account_name'] = accountName;
    }
    public get accountName(): string | undefined {
        return this['account_name'];
    }
    public withPassword(password: string): AccountChangePwdPlan {
        this['password'] = password;
        return this;
    }
    public withProjectId(projectId: string): AccountChangePwdPlan {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreateTime(createTime: number): AccountChangePwdPlan {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}