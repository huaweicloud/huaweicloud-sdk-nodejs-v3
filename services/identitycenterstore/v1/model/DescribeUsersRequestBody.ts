

export class DescribeUsersRequestBody {
    private 'user_ids'?: Array<string>;
    public constructor(userIds?: Array<string>) { 
        this['user_ids'] = userIds;
    }
    public withUserIds(userIds: Array<string>): DescribeUsersRequestBody {
        this['user_ids'] = userIds;
        return this;
    }
    public set userIds(userIds: Array<string>  | undefined) {
        this['user_ids'] = userIds;
    }
    public get userIds(): Array<string> | undefined {
        return this['user_ids'];
    }
}