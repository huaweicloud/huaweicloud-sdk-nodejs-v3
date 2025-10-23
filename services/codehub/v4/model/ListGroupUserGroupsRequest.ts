

export class ListGroupUserGroupsRequest {
    private 'group_id'?: number;
    public search?: string;
    public offset?: number;
    public limit?: number;
    public constructor(groupId?: number) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: number): ListGroupUserGroupsRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withSearch(search: string): ListGroupUserGroupsRequest {
        this['search'] = search;
        return this;
    }
    public withOffset(offset: number): ListGroupUserGroupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListGroupUserGroupsRequest {
        this['limit'] = limit;
        return this;
    }
}