

export class ListGroupProtectedRefsUserGroupsRequest {
    private 'group_id'?: number;
    public offset?: number;
    public limit?: number;
    public search?: string;
    public constructor(groupId?: number) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: number): ListGroupProtectedRefsUserGroupsRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withOffset(offset: number): ListGroupProtectedRefsUserGroupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListGroupProtectedRefsUserGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSearch(search: string): ListGroupProtectedRefsUserGroupsRequest {
        this['search'] = search;
        return this;
    }
}