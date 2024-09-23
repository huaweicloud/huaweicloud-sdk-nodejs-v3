

export class ListAccountsRequest {
    private 'X-Security-Token'?: string;
    private 'parent_id'?: string;
    private 'with_register_contact_info'?: boolean;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): ListAccountsRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withParentId(parentId: string): ListAccountsRequest {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withWithRegisterContactInfo(withRegisterContactInfo: boolean): ListAccountsRequest {
        this['with_register_contact_info'] = withRegisterContactInfo;
        return this;
    }
    public set withRegisterContactInfo(withRegisterContactInfo: boolean  | undefined) {
        this['with_register_contact_info'] = withRegisterContactInfo;
    }
    public get withRegisterContactInfo(): boolean | undefined {
        return this['with_register_contact_info'];
    }
    public withLimit(limit: number): ListAccountsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAccountsRequest {
        this['marker'] = marker;
        return this;
    }
}