

export class ShowComplianceStatusForAccountRequest {
    private 'managed_account_id'?: string;
    private 'control_id'?: string;
    public constructor(managedAccountId?: string) { 
        this['managed_account_id'] = managedAccountId;
    }
    public withManagedAccountId(managedAccountId: string): ShowComplianceStatusForAccountRequest {
        this['managed_account_id'] = managedAccountId;
        return this;
    }
    public set managedAccountId(managedAccountId: string  | undefined) {
        this['managed_account_id'] = managedAccountId;
    }
    public get managedAccountId(): string | undefined {
        return this['managed_account_id'];
    }
    public withControlId(controlId: string): ShowComplianceStatusForAccountRequest {
        this['control_id'] = controlId;
        return this;
    }
    public set controlId(controlId: string  | undefined) {
        this['control_id'] = controlId;
    }
    public get controlId(): string | undefined {
        return this['control_id'];
    }
}