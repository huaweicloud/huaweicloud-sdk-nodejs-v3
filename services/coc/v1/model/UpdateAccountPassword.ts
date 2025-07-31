

export class UpdateAccountPassword {
    private 'plan_id'?: string;
    private 'resource_id'?: string;
    private 'account_name'?: string;
    private 'status_code'?: string;
    public detail?: string;
    public constructor(planId?: string, resourceId?: string, accountName?: string, statusCode?: string, detail?: string) { 
        this['plan_id'] = planId;
        this['resource_id'] = resourceId;
        this['account_name'] = accountName;
        this['status_code'] = statusCode;
        this['detail'] = detail;
    }
    public withPlanId(planId: string): UpdateAccountPassword {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
    public withResourceId(resourceId: string): UpdateAccountPassword {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withAccountName(accountName: string): UpdateAccountPassword {
        this['account_name'] = accountName;
        return this;
    }
    public set accountName(accountName: string  | undefined) {
        this['account_name'] = accountName;
    }
    public get accountName(): string | undefined {
        return this['account_name'];
    }
    public withStatusCode(statusCode: string): UpdateAccountPassword {
        this['status_code'] = statusCode;
        return this;
    }
    public set statusCode(statusCode: string  | undefined) {
        this['status_code'] = statusCode;
    }
    public get statusCode(): string | undefined {
        return this['status_code'];
    }
    public withDetail(detail: string): UpdateAccountPassword {
        this['detail'] = detail;
        return this;
    }
}