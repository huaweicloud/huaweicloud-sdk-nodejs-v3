

export class ListGroupProtectedBranchesRequest {
    private 'group_id'?: number;
    public offset?: number;
    public limit?: number;
    public search?: string;
    private 'user_actions'?: boolean;
    public constructor(groupId?: number, userActions?: boolean) { 
        this['group_id'] = groupId;
        this['user_actions'] = userActions;
    }
    public withGroupId(groupId: number): ListGroupProtectedBranchesRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withOffset(offset: number): ListGroupProtectedBranchesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListGroupProtectedBranchesRequest {
        this['limit'] = limit;
        return this;
    }
    public withSearch(search: string): ListGroupProtectedBranchesRequest {
        this['search'] = search;
        return this;
    }
    public withUserActions(userActions: boolean): ListGroupProtectedBranchesRequest {
        this['user_actions'] = userActions;
        return this;
    }
    public set userActions(userActions: boolean  | undefined) {
        this['user_actions'] = userActions;
    }
    public get userActions(): boolean | undefined {
        return this['user_actions'];
    }
}