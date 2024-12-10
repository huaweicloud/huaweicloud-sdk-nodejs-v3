

export class ListUsersRequest {
    private 'org_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'user_name'?: string;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withOrgId(orgId: string): ListUsersRequest {
        this['org_id'] = orgId;
        return this;
    }
    public set orgId(orgId: string  | undefined) {
        this['org_id'] = orgId;
    }
    public get orgId(): string | undefined {
        return this['org_id'];
    }
    public withOffset(offset: number): ListUsersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListUsersRequest {
        this['limit'] = limit;
        return this;
    }
    public withUserName(userName: string): ListUsersRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
}