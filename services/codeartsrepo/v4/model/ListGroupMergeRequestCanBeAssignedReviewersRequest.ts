

export class ListGroupMergeRequestCanBeAssignedReviewersRequest {
    private 'group_id'?: number;
    public offset?: number;
    public limit?: number;
    public constructor(groupId?: number) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: number): ListGroupMergeRequestCanBeAssignedReviewersRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withOffset(offset: number): ListGroupMergeRequestCanBeAssignedReviewersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListGroupMergeRequestCanBeAssignedReviewersRequest {
        this['limit'] = limit;
        return this;
    }
}