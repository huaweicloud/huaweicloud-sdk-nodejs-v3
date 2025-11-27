

export class VendorAccountCreateRequest {
    public vendor?: string;
    private 'account_id'?: string;
    private 'account_name'?: string;
    public ak?: string;
    public sk?: string;
    public constructor(vendor?: string, accountId?: string, accountName?: string, ak?: string, sk?: string) { 
        this['vendor'] = vendor;
        this['account_id'] = accountId;
        this['account_name'] = accountName;
        this['ak'] = ak;
        this['sk'] = sk;
    }
    public withVendor(vendor: string): VendorAccountCreateRequest {
        this['vendor'] = vendor;
        return this;
    }
    public withAccountId(accountId: string): VendorAccountCreateRequest {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withAccountName(accountName: string): VendorAccountCreateRequest {
        this['account_name'] = accountName;
        return this;
    }
    public set accountName(accountName: string  | undefined) {
        this['account_name'] = accountName;
    }
    public get accountName(): string | undefined {
        return this['account_name'];
    }
    public withAk(ak: string): VendorAccountCreateRequest {
        this['ak'] = ak;
        return this;
    }
    public withSk(sk: string): VendorAccountCreateRequest {
        this['sk'] = sk;
        return this;
    }
}