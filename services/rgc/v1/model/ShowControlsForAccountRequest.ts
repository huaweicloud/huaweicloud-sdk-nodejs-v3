

export class ShowControlsForAccountRequest {
    private 'managed_account_id'?: string;
    private 'control_id'?: string;
    public constructor(managedAccountId?: string, controlId?: string) { 
        this['managed_account_id'] = managedAccountId;
        this['control_id'] = controlId;
    }
    public withManagedAccountId(managedAccountId: string): ShowControlsForAccountRequest {
        this['managed_account_id'] = managedAccountId;
        return this;
    }
    public set managedAccountId(managedAccountId: string  | undefined) {
        this['managed_account_id'] = managedAccountId;
    }
    public get managedAccountId(): string | undefined {
        return this['managed_account_id'];
    }
    public withControlId(controlId: string): ShowControlsForAccountRequest {
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