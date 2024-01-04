

export class UpdateSyncRequest {
    private 'is_all_sync'?: boolean;
    private 'group_names'?: Array<string>;
    private 'user_names'?: Array<string>;
    public constructor() { 
    }
    public withIsAllSync(isAllSync: boolean): UpdateSyncRequest {
        this['is_all_sync'] = isAllSync;
        return this;
    }
    public set isAllSync(isAllSync: boolean  | undefined) {
        this['is_all_sync'] = isAllSync;
    }
    public get isAllSync(): boolean | undefined {
        return this['is_all_sync'];
    }
    public withGroupNames(groupNames: Array<string>): UpdateSyncRequest {
        this['group_names'] = groupNames;
        return this;
    }
    public set groupNames(groupNames: Array<string>  | undefined) {
        this['group_names'] = groupNames;
    }
    public get groupNames(): Array<string> | undefined {
        return this['group_names'];
    }
    public withUserNames(userNames: Array<string>): UpdateSyncRequest {
        this['user_names'] = userNames;
        return this;
    }
    public set userNames(userNames: Array<string>  | undefined) {
        this['user_names'] = userNames;
    }
    public get userNames(): Array<string> | undefined {
        return this['user_names'];
    }
}