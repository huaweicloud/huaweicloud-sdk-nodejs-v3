

export class CancelSyncRequest {
    private 'group_names'?: Array<string>;
    private 'user_names'?: Array<string>;
    public constructor() { 
    }
    public withGroupNames(groupNames: Array<string>): CancelSyncRequest {
        this['group_names'] = groupNames;
        return this;
    }
    public set groupNames(groupNames: Array<string>  | undefined) {
        this['group_names'] = groupNames;
    }
    public get groupNames(): Array<string> | undefined {
        return this['group_names'];
    }
    public withUserNames(userNames: Array<string>): CancelSyncRequest {
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