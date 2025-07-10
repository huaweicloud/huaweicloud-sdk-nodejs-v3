

export class UnEnrollAccountRequest {
    private 'managed_account_id'?: string;
    public constructor(managedAccountId?: string) { 
        this['managed_account_id'] = managedAccountId;
    }
    public withManagedAccountId(managedAccountId: string): UnEnrollAccountRequest {
        this['managed_account_id'] = managedAccountId;
        return this;
    }
    public set managedAccountId(managedAccountId: string  | undefined) {
        this['managed_account_id'] = managedAccountId;
    }
    public get managedAccountId(): string | undefined {
        return this['managed_account_id'];
    }
}