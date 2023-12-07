

export class ListSecurityPermissionSetMembersRequest {
    private 'permission_set_id'?: string;
    public workspace?: string;
    public limit?: number;
    public offset?: number;
    private 'member_name'?: string;
    private 'member_type'?: ListSecurityPermissionSetMembersRequestMemberTypeEnum | string;
    private 'order_by_asc'?: boolean;
    private 'order_by'?: ListSecurityPermissionSetMembersRequestOrderByEnum | string;
    public constructor(permissionSetId?: string, workspace?: string) { 
        this['permission_set_id'] = permissionSetId;
        this['workspace'] = workspace;
    }
    public withPermissionSetId(permissionSetId: string): ListSecurityPermissionSetMembersRequest {
        this['permission_set_id'] = permissionSetId;
        return this;
    }
    public set permissionSetId(permissionSetId: string  | undefined) {
        this['permission_set_id'] = permissionSetId;
    }
    public get permissionSetId(): string | undefined {
        return this['permission_set_id'];
    }
    public withWorkspace(workspace: string): ListSecurityPermissionSetMembersRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withLimit(limit: number): ListSecurityPermissionSetMembersRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSecurityPermissionSetMembersRequest {
        this['offset'] = offset;
        return this;
    }
    public withMemberName(memberName: string): ListSecurityPermissionSetMembersRequest {
        this['member_name'] = memberName;
        return this;
    }
    public set memberName(memberName: string  | undefined) {
        this['member_name'] = memberName;
    }
    public get memberName(): string | undefined {
        return this['member_name'];
    }
    public withMemberType(memberType: ListSecurityPermissionSetMembersRequestMemberTypeEnum | string): ListSecurityPermissionSetMembersRequest {
        this['member_type'] = memberType;
        return this;
    }
    public set memberType(memberType: ListSecurityPermissionSetMembersRequestMemberTypeEnum | string  | undefined) {
        this['member_type'] = memberType;
    }
    public get memberType(): ListSecurityPermissionSetMembersRequestMemberTypeEnum | string | undefined {
        return this['member_type'];
    }
    public withOrderByAsc(orderByAsc: boolean): ListSecurityPermissionSetMembersRequest {
        this['order_by_asc'] = orderByAsc;
        return this;
    }
    public set orderByAsc(orderByAsc: boolean  | undefined) {
        this['order_by_asc'] = orderByAsc;
    }
    public get orderByAsc(): boolean | undefined {
        return this['order_by_asc'];
    }
    public withOrderBy(orderBy: ListSecurityPermissionSetMembersRequestOrderByEnum | string): ListSecurityPermissionSetMembersRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListSecurityPermissionSetMembersRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListSecurityPermissionSetMembersRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSecurityPermissionSetMembersRequestMemberTypeEnum {
    USER = 'USER',
    USER_GROUP = 'USER_GROUP',
    WORKSPACE_ROLE = 'WORKSPACE_ROLE'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSecurityPermissionSetMembersRequestOrderByEnum {
    CREATE_TIME = 'CREATE_TIME',
    MEMBER_NAME = 'MEMBER_NAME'
}
