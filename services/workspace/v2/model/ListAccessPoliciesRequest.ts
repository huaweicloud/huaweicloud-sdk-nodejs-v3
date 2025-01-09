

export class ListAccessPoliciesRequest {
    private 'access_control_type'?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withAccessControlType(accessControlType: string): ListAccessPoliciesRequest {
        this['access_control_type'] = accessControlType;
        return this;
    }
    public set accessControlType(accessControlType: string  | undefined) {
        this['access_control_type'] = accessControlType;
    }
    public get accessControlType(): string | undefined {
        return this['access_control_type'];
    }
    public withLimit(limit: number): ListAccessPoliciesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAccessPoliciesRequest {
        this['offset'] = offset;
        return this;
    }
}