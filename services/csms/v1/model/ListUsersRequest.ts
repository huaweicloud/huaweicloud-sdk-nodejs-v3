

export class ListUsersRequest {
    private 'org_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'user_info'?: string;
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
    public withUserInfo(userInfo: string): ListUsersRequest {
        this['user_info'] = userInfo;
        return this;
    }
    public set userInfo(userInfo: string  | undefined) {
        this['user_info'] = userInfo;
    }
    public get userInfo(): string | undefined {
        return this['user_info'];
    }
}