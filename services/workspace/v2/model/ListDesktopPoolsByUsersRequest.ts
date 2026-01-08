

export class ListDesktopPoolsByUsersRequest {
    private 'user_ids'?: Array<string>;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withUserIds(userIds: Array<string>): ListDesktopPoolsByUsersRequest {
        this['user_ids'] = userIds;
        return this;
    }
    public set userIds(userIds: Array<string>  | undefined) {
        this['user_ids'] = userIds;
    }
    public get userIds(): Array<string> | undefined {
        return this['user_ids'];
    }
    public withOffset(offset: number): ListDesktopPoolsByUsersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDesktopPoolsByUsersRequest {
        this['limit'] = limit;
        return this;
    }
}