

export class GroupMemberDetailDto {
    public id?: number;
    private 'source_id'?: number;
    private 'user_id'?: number;
    private 'user_from'?: string;
    private 'role_id'?: string;
    private 'role_name'?: string;
    private 'cn_role_name'?: string;
    private 'req_role_id'?: string;
    private 'req_role_name'?: string;
    private 'user_group_id'?: string;
    private 'group_name'?: string;
    private 'user_name'?: string;
    private 'domain_id'?: string;
    private 'domain_name'?: string;
    private 'nick_name'?: string;
    private 'is_group_creator'?: boolean;
    private 'is_project_admin'?: boolean;
    public path?: string;
    private 'role_chinese_name'?: string;
    private 'can_remove'?: boolean;
    private 'access_level'?: number;
    private 'service_license_status'?: number;
    private 'iam_id'?: string;
    private 'current_group_member'?: boolean;
    public constructor() { 
    }
    public withId(id: number): GroupMemberDetailDto {
        this['id'] = id;
        return this;
    }
    public withSourceId(sourceId: number): GroupMemberDetailDto {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: number  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): number | undefined {
        return this['source_id'];
    }
    public withUserId(userId: number): GroupMemberDetailDto {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: number  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): number | undefined {
        return this['user_id'];
    }
    public withUserFrom(userFrom: string): GroupMemberDetailDto {
        this['user_from'] = userFrom;
        return this;
    }
    public set userFrom(userFrom: string  | undefined) {
        this['user_from'] = userFrom;
    }
    public get userFrom(): string | undefined {
        return this['user_from'];
    }
    public withRoleId(roleId: string): GroupMemberDetailDto {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
    public withRoleName(roleName: string): GroupMemberDetailDto {
        this['role_name'] = roleName;
        return this;
    }
    public set roleName(roleName: string  | undefined) {
        this['role_name'] = roleName;
    }
    public get roleName(): string | undefined {
        return this['role_name'];
    }
    public withCnRoleName(cnRoleName: string): GroupMemberDetailDto {
        this['cn_role_name'] = cnRoleName;
        return this;
    }
    public set cnRoleName(cnRoleName: string  | undefined) {
        this['cn_role_name'] = cnRoleName;
    }
    public get cnRoleName(): string | undefined {
        return this['cn_role_name'];
    }
    public withReqRoleId(reqRoleId: string): GroupMemberDetailDto {
        this['req_role_id'] = reqRoleId;
        return this;
    }
    public set reqRoleId(reqRoleId: string  | undefined) {
        this['req_role_id'] = reqRoleId;
    }
    public get reqRoleId(): string | undefined {
        return this['req_role_id'];
    }
    public withReqRoleName(reqRoleName: string): GroupMemberDetailDto {
        this['req_role_name'] = reqRoleName;
        return this;
    }
    public set reqRoleName(reqRoleName: string  | undefined) {
        this['req_role_name'] = reqRoleName;
    }
    public get reqRoleName(): string | undefined {
        return this['req_role_name'];
    }
    public withUserGroupId(userGroupId: string): GroupMemberDetailDto {
        this['user_group_id'] = userGroupId;
        return this;
    }
    public set userGroupId(userGroupId: string  | undefined) {
        this['user_group_id'] = userGroupId;
    }
    public get userGroupId(): string | undefined {
        return this['user_group_id'];
    }
    public withGroupName(groupName: string): GroupMemberDetailDto {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withUserName(userName: string): GroupMemberDetailDto {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withDomainId(domainId: string): GroupMemberDetailDto {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDomainName(domainName: string): GroupMemberDetailDto {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withNickName(nickName: string): GroupMemberDetailDto {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withIsGroupCreator(isGroupCreator: boolean): GroupMemberDetailDto {
        this['is_group_creator'] = isGroupCreator;
        return this;
    }
    public set isGroupCreator(isGroupCreator: boolean  | undefined) {
        this['is_group_creator'] = isGroupCreator;
    }
    public get isGroupCreator(): boolean | undefined {
        return this['is_group_creator'];
    }
    public withIsProjectAdmin(isProjectAdmin: boolean): GroupMemberDetailDto {
        this['is_project_admin'] = isProjectAdmin;
        return this;
    }
    public set isProjectAdmin(isProjectAdmin: boolean  | undefined) {
        this['is_project_admin'] = isProjectAdmin;
    }
    public get isProjectAdmin(): boolean | undefined {
        return this['is_project_admin'];
    }
    public withPath(path: string): GroupMemberDetailDto {
        this['path'] = path;
        return this;
    }
    public withRoleChineseName(roleChineseName: string): GroupMemberDetailDto {
        this['role_chinese_name'] = roleChineseName;
        return this;
    }
    public set roleChineseName(roleChineseName: string  | undefined) {
        this['role_chinese_name'] = roleChineseName;
    }
    public get roleChineseName(): string | undefined {
        return this['role_chinese_name'];
    }
    public withCanRemove(canRemove: boolean): GroupMemberDetailDto {
        this['can_remove'] = canRemove;
        return this;
    }
    public set canRemove(canRemove: boolean  | undefined) {
        this['can_remove'] = canRemove;
    }
    public get canRemove(): boolean | undefined {
        return this['can_remove'];
    }
    public withAccessLevel(accessLevel: number): GroupMemberDetailDto {
        this['access_level'] = accessLevel;
        return this;
    }
    public set accessLevel(accessLevel: number  | undefined) {
        this['access_level'] = accessLevel;
    }
    public get accessLevel(): number | undefined {
        return this['access_level'];
    }
    public withServiceLicenseStatus(serviceLicenseStatus: number): GroupMemberDetailDto {
        this['service_license_status'] = serviceLicenseStatus;
        return this;
    }
    public set serviceLicenseStatus(serviceLicenseStatus: number  | undefined) {
        this['service_license_status'] = serviceLicenseStatus;
    }
    public get serviceLicenseStatus(): number | undefined {
        return this['service_license_status'];
    }
    public withIamId(iamId: string): GroupMemberDetailDto {
        this['iam_id'] = iamId;
        return this;
    }
    public set iamId(iamId: string  | undefined) {
        this['iam_id'] = iamId;
    }
    public get iamId(): string | undefined {
        return this['iam_id'];
    }
    public withCurrentGroupMember(currentGroupMember: boolean): GroupMemberDetailDto {
        this['current_group_member'] = currentGroupMember;
        return this;
    }
    public set currentGroupMember(currentGroupMember: boolean  | undefined) {
        this['current_group_member'] = currentGroupMember;
    }
    public get currentGroupMember(): boolean | undefined {
        return this['current_group_member'];
    }
}