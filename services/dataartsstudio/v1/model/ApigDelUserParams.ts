

export class ApigDelUserParams {
    private 'user_ids'?: object;
    public constructor(userIds?: object) { 
        this['user_ids'] = userIds;
    }
    public withUserIds(userIds: object): ApigDelUserParams {
        this['user_ids'] = userIds;
        return this;
    }
    public set userIds(userIds: object  | undefined) {
        this['user_ids'] = userIds;
    }
    public get userIds(): object | undefined {
        return this['user_ids'];
    }
}