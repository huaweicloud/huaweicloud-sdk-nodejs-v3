

export class BatchDeleteGroupReq {
    private 'group_ids'?: Array<string>;
    public constructor() { 
    }
    public withGroupIds(groupIds: Array<string>): BatchDeleteGroupReq {
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