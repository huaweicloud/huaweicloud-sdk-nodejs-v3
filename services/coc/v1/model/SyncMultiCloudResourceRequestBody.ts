

export class SyncMultiCloudResourceRequestBody {
    public vendor?: string;
    private 'account_id'?: string;
    public constructor(vendor?: string) { 
        this['vendor'] = vendor;
    }
    public withVendor(vendor: string): SyncMultiCloudResourceRequestBody {
        this['vendor'] = vendor;
        return this;
    }
    public withAccountId(accountId: string): SyncMultiCloudResourceRequestBody {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
}