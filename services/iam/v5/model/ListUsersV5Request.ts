

export class ListUsersV5Request {
    public limit?: number;
    public marker?: string;
    private 'group_id'?: string;
    private 'access_key_id'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListUsersV5Request {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListUsersV5Request {
        this['marker'] = marker;
        return this;
    }
    public withGroupId(groupId: string): ListUsersV5Request {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withAccessKeyId(accessKeyId: string): ListUsersV5Request {
        this['access_key_id'] = accessKeyId;
        return this;
    }
    public set accessKeyId(accessKeyId: string  | undefined) {
        this['access_key_id'] = accessKeyId;
    }
    public get accessKeyId(): string | undefined {
        return this['access_key_id'];
    }
}