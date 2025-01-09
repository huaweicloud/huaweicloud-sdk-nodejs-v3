

export class BatchDeleteUserGroupsReq {
    private 'group_ids'?: Array<string>;
    public constructor(groupIds?: Array<string>) { 
        this['group_ids'] = groupIds;
    }
    public withGroupIds(groupIds: Array<string>): BatchDeleteUserGroupsReq {
        this['group_ids'] = groupIds;
        return this;
    }
    public set groupIds(groupIds: Array<string>  | undefined) {
        this['group_ids'] = groupIds;
    }
    public get groupIds(): Array<string> | undefined {
        return this['group_ids'];
    }
}