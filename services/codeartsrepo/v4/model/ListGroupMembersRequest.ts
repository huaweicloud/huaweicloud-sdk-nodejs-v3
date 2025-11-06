

export class ListGroupMembersRequest {
    private 'group_id'?: number;
    private 'project_id'?: string;
    public query?: string;
    private 'join_way'?: ListGroupMembersRequestJoinWayEnum | string;
    private 'access_level'?: number;
    public offset?: number;
    public limit?: number;
    public constructor(groupId?: number, projectId?: string) { 
        this['group_id'] = groupId;
        this['project_id'] = projectId;
    }
    public withGroupId(groupId: number): ListGroupMembersRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withProjectId(projectId: string): ListGroupMembersRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withQuery(query: string): ListGroupMembersRequest {
        this['query'] = query;
        return this;
    }
    public withJoinWay(joinWay: ListGroupMembersRequestJoinWayEnum | string): ListGroupMembersRequest {
        this['join_way'] = joinWay;
        return this;
    }
    public set joinWay(joinWay: ListGroupMembersRequestJoinWayEnum | string  | undefined) {
        this['join_way'] = joinWay;
    }
    public get joinWay(): ListGroupMembersRequestJoinWayEnum | string | undefined {
        return this['join_way'];
    }
    public withAccessLevel(accessLevel: number): ListGroupMembersRequest {
        this['access_level'] = accessLevel;
        return this;
    }
    public set accessLevel(accessLevel: number  | undefined) {
        this['access_level'] = accessLevel;
    }
    public get accessLevel(): number | undefined {
        return this['access_level'];
    }
    public withOffset(offset: number): ListGroupMembersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListGroupMembersRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListGroupMembersRequestJoinWayEnum {
    DOMAIN = 'domain',
    NORMAL = 'normal',
    INHERIT = 'inherit'
}
