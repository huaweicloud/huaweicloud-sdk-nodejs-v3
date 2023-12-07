

export class PermissionSetMember {
    public id?: string;
    private 'permission_set_id'?: string;
    private 'project_id'?: string;
    private 'instance_id'?: string;
    private 'member_type'?: PermissionSetMemberMemberTypeEnum | string;
    private 'member_id'?: string;
    private 'member_name'?: string;
    private 'member_status'?: PermissionSetMemberMemberStatusEnum | string;
    public workspace?: string;
    private 'cluster_type'?: PermissionSetMemberClusterTypeEnum | string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'create_time'?: number;
    private 'create_user'?: string;
    public deadline?: number;
    public constructor() { 
    }
    public withId(id: string): PermissionSetMember {
        this['id'] = id;
        return this;
    }
    public withPermissionSetId(permissionSetId: string): PermissionSetMember {
        this['permission_set_id'] = permissionSetId;
        return this;
    }
    public set permissionSetId(permissionSetId: string  | undefined) {
        this['permission_set_id'] = permissionSetId;
    }
    public get permissionSetId(): string | undefined {
        return this['permission_set_id'];
    }
    public withProjectId(projectId: string): PermissionSetMember {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withInstanceId(instanceId: string): PermissionSetMember {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withMemberType(memberType: PermissionSetMemberMemberTypeEnum | string): PermissionSetMember {
        this['member_type'] = memberType;
        return this;
    }
    public set memberType(memberType: PermissionSetMemberMemberTypeEnum | string  | undefined) {
        this['member_type'] = memberType;
    }
    public get memberType(): PermissionSetMemberMemberTypeEnum | string | undefined {
        return this['member_type'];
    }
    public withMemberId(memberId: string): PermissionSetMember {
        this['member_id'] = memberId;
        return this;
    }
    public set memberId(memberId: string  | undefined) {
        this['member_id'] = memberId;
    }
    public get memberId(): string | undefined {
        return this['member_id'];
    }
    public withMemberName(memberName: string): PermissionSetMember {
        this['member_name'] = memberName;
        return this;
    }
    public set memberName(memberName: string  | undefined) {
        this['member_name'] = memberName;
    }
    public get memberName(): string | undefined {
        return this['member_name'];
    }
    public withMemberStatus(memberStatus: PermissionSetMemberMemberStatusEnum | string): PermissionSetMember {
        this['member_status'] = memberStatus;
        return this;
    }
    public set memberStatus(memberStatus: PermissionSetMemberMemberStatusEnum | string  | undefined) {
        this['member_status'] = memberStatus;
    }
    public get memberStatus(): PermissionSetMemberMemberStatusEnum | string | undefined {
        return this['member_status'];
    }
    public withWorkspace(workspace: string): PermissionSetMember {
        this['workspace'] = workspace;
        return this;
    }
    public withClusterType(clusterType: PermissionSetMemberClusterTypeEnum | string): PermissionSetMember {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: PermissionSetMemberClusterTypeEnum | string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): PermissionSetMemberClusterTypeEnum | string | undefined {
        return this['cluster_type'];
    }
    public withClusterId(clusterId: string): PermissionSetMember {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): PermissionSetMember {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withCreateTime(createTime: number): PermissionSetMember {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCreateUser(createUser: string): PermissionSetMember {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withDeadline(deadline: number): PermissionSetMember {
        this['deadline'] = deadline;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PermissionSetMemberMemberTypeEnum {
    USER = 'USER',
    USER_GROUP = 'USER_GROUP',
    WORKSPACE_ROLE = 'WORKSPACE_ROLE',
    CLUSTER_ROLE = 'CLUSTER_ROLE'
}
/**
    * @export
    * @enum {string}
    */
export enum PermissionSetMemberMemberStatusEnum {
    NORMAL = 'NORMAL',
    UNFINISHED = 'UNFINISHED'
}
/**
    * @export
    * @enum {string}
    */
export enum PermissionSetMemberClusterTypeEnum {
    MRS = 'MRS',
    DWS = 'DWS',
    DLI = 'DLI'
}
