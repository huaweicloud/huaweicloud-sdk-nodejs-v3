

export class ListControlViolationsRequest {
    private 'account_id'?: string;
    private 'organizational_unit_id'?: string;
    public constructor() { 
    }
    public withAccountId(accountId: string): ListControlViolationsRequest {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withOrganizationalUnitId(organizationalUnitId: string): ListControlViolationsRequest {
        this['organizational_unit_id'] = organizationalUnitId;
        return this;
    }
    public set organizationalUnitId(organizationalUnitId: string  | undefined) {
        this['organizational_unit_id'] = organizationalUnitId;
    }
    public get organizationalUnitId(): string | undefined {
        return this['organizational_unit_id'];
    }
}