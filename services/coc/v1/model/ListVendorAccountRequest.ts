

export class ListVendorAccountRequest {
    public limit?: number;
    public offset?: string;
    public marker?: string;
    public vendor?: string;
    private 'account_id'?: string;
    private 'account_name'?: string;
    public constructor(limit?: number) { 
        this['limit'] = limit;
    }
    public withLimit(limit: number): ListVendorAccountRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListVendorAccountRequest {
        this['offset'] = offset;
        return this;
    }
    public withMarker(marker: string): ListVendorAccountRequest {
        this['marker'] = marker;
        return this;
    }
    public withVendor(vendor: string): ListVendorAccountRequest {
        this['vendor'] = vendor;
        return this;
    }
    public withAccountId(accountId: string): ListVendorAccountRequest {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withAccountName(accountName: string): ListVendorAccountRequest {
        this['account_name'] = accountName;
        return this;
    }
    public set accountName(accountName: string  | undefined) {
        this['account_name'] = accountName;
    }
    public get accountName(): string | undefined {
        return this['account_name'];
    }
}