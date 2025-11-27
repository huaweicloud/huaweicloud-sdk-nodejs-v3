

export class VendorAccountUpdateRequest {
    private 'account_name'?: string;
    public ak?: string;
    public sk?: string;
    public constructor() { 
    }
    public withAccountName(accountName: string): VendorAccountUpdateRequest {
        this['account_name'] = accountName;
        return this;
    }
    public set accountName(accountName: string  | undefined) {
        this['account_name'] = accountName;
    }
    public get accountName(): string | undefined {
        return this['account_name'];
    }
    public withAk(ak: string): VendorAccountUpdateRequest {
        this['ak'] = ak;
        return this;
    }
    public withSk(sk: string): VendorAccountUpdateRequest {
        this['sk'] = sk;
        return this;
    }
}