

export class ListGroupAddableUserGroupsRequest {
    private 'group_id'?: number;
    private 'project_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(groupId?: number, projectId?: string) { 
        this['group_id'] = groupId;
        this['project_id'] = projectId;
    }
    public withGroupId(groupId: number): ListGroupAddableUserGroupsRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withProjectId(projectId: string): ListGroupAddableUserGroupsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withOffset(offset: number): ListGroupAddableUserGroupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListGroupAddableUserGroupsRequest {
        this['limit'] = limit;
        return this;
    }
}