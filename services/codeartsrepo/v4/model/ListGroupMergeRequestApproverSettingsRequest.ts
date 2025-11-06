

export class ListGroupMergeRequestApproverSettingsRequest {
    private 'group_id'?: number;
    public offset?: number;
    public limit?: number;
    public constructor(groupId?: number) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: number): ListGroupMergeRequestApproverSettingsRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withOffset(offset: number): ListGroupMergeRequestApproverSettingsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListGroupMergeRequestApproverSettingsRequest {
        this['limit'] = limit;
        return this;
    }
}