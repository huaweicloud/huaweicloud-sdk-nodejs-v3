

export class ListControlsForAccountRequest {
    private 'managed_account_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(managedAccountId?: string) { 
        this['managed_account_id'] = managedAccountId;
    }
    public withManagedAccountId(managedAccountId: string): ListControlsForAccountRequest {
        this['managed_account_id'] = managedAccountId;
        return this;
    }
    public set managedAccountId(managedAccountId: string  | undefined) {
        this['managed_account_id'] = managedAccountId;
    }
    public get managedAccountId(): string | undefined {
        return this['managed_account_id'];
    }
    public withLimit(limit: number): ListControlsForAccountRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListControlsForAccountRequest {
        this['marker'] = marker;
        return this;
    }
}