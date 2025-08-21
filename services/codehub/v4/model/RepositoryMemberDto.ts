

export class RepositoryMemberDto {
    private 'user_id'?: number;
    private 'user_iam_id'?: string;
    private 'user_name'?: string;
    private 'user_nick_name'?: string;
    private 'tenant_name'?: string;
    private 'tenant_id'?: string;
    private 'is_repo_creator'?: number;
    private 'is_group_creator'?: number;
    private 'is_Project_admin'?: number;
    private 'project_role_name'?: string;
    private 'repository_role_name'?: string;
    private 'repository_role_Id'?: string;
    private 'member_source'?: string;
    private 'member_group_source'?: string;
    private 'member_source_id'?: string;
    private 'service_license_status'?: number;
    private 'action_enabled'?: boolean;
    public constructor() { 
    }
    public withUserId(userId: number): RepositoryMemberDto {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: number  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): number | undefined {
        return this['user_id'];
    }
    public withUserIamId(userIamId: string): RepositoryMemberDto {
        this['user_iam_id'] = userIamId;
        return this;
    }
    public set userIamId(userIamId: string  | undefined) {
        this['user_iam_id'] = userIamId;
    }
    public get userIamId(): string | undefined {
        return this['user_iam_id'];
    }
    public withUserName(userName: string): RepositoryMemberDto {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserNickName(userNickName: string): RepositoryMemberDto {
        this['user_nick_name'] = userNickName;
        return this;
    }
    public set userNickName(userNickName: string  | undefined) {
        this['user_nick_name'] = userNickName;
    }
    public get userNickName(): string | undefined {
        return this['user_nick_name'];
    }
    public withTenantName(tenantName: string): RepositoryMemberDto {
        this['tenant_name'] = tenantName;
        return this;
    }
    public set tenantName(tenantName: string  | undefined) {
        this['tenant_name'] = tenantName;
    }
    public get tenantName(): string | undefined {
        return this['tenant_name'];
    }
    public withTenantId(tenantId: string): RepositoryMemberDto {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withIsRepoCreator(isRepoCreator: number): RepositoryMemberDto {
        this['is_repo_creator'] = isRepoCreator;
        return this;
    }
    public set isRepoCreator(isRepoCreator: number  | undefined) {
        this['is_repo_creator'] = isRepoCreator;
    }
    public get isRepoCreator(): number | undefined {
        return this['is_repo_creator'];
    }
    public withIsGroupCreator(isGroupCreator: number): RepositoryMemberDto {
        this['is_group_creator'] = isGroupCreator;
        return this;
    }
    public set isGroupCreator(isGroupCreator: number  | undefined) {
        this['is_group_creator'] = isGroupCreator;
    }
    public get isGroupCreator(): number | undefined {
        return this['is_group_creator'];
    }
    public withIsProjectAdmin(isProjectAdmin: number): RepositoryMemberDto {
        this['is_Project_admin'] = isProjectAdmin;
        return this;
    }
    public set isProjectAdmin(isProjectAdmin: number  | undefined) {
        this['is_Project_admin'] = isProjectAdmin;
    }
    public get isProjectAdmin(): number | undefined {
        return this['is_Project_admin'];
    }
    public withProjectRoleName(projectRoleName: string): RepositoryMemberDto {
        this['project_role_name'] = projectRoleName;
        return this;
    }
    public set projectRoleName(projectRoleName: string  | undefined) {
        this['project_role_name'] = projectRoleName;
    }
    public get projectRoleName(): string | undefined {
        return this['project_role_name'];
    }
    public withRepositoryRoleName(repositoryRoleName: string): RepositoryMemberDto {
        this['repository_role_name'] = repositoryRoleName;
        return this;
    }
    public set repositoryRoleName(repositoryRoleName: string  | undefined) {
        this['repository_role_name'] = repositoryRoleName;
    }
    public get repositoryRoleName(): string | undefined {
        return this['repository_role_name'];
    }
    public withRepositoryRoleId(repositoryRoleId: string): RepositoryMemberDto {
        this['repository_role_Id'] = repositoryRoleId;
        return this;
    }
    public set repositoryRoleId(repositoryRoleId: string  | undefined) {
        this['repository_role_Id'] = repositoryRoleId;
    }
    public get repositoryRoleId(): string | undefined {
        return this['repository_role_Id'];
    }
    public withMemberSource(memberSource: string): RepositoryMemberDto {
        this['member_source'] = memberSource;
        return this;
    }
    public set memberSource(memberSource: string  | undefined) {
        this['member_source'] = memberSource;
    }
    public get memberSource(): string | undefined {
        return this['member_source'];
    }
    public withMemberGroupSource(memberGroupSource: string): RepositoryMemberDto {
        this['member_group_source'] = memberGroupSource;
        return this;
    }
    public set memberGroupSource(memberGroupSource: string  | undefined) {
        this['member_group_source'] = memberGroupSource;
    }
    public get memberGroupSource(): string | undefined {
        return this['member_group_source'];
    }
    public withMemberSourceId(memberSourceId: string): RepositoryMemberDto {
        this['member_source_id'] = memberSourceId;
        return this;
    }
    public set memberSourceId(memberSourceId: string  | undefined) {
        this['member_source_id'] = memberSourceId;
    }
    public get memberSourceId(): string | undefined {
        return this['member_source_id'];
    }
    public withServiceLicenseStatus(serviceLicenseStatus: number): RepositoryMemberDto {
        this['service_license_status'] = serviceLicenseStatus;
        return this;
    }
    public set serviceLicenseStatus(serviceLicenseStatus: number  | undefined) {
        this['service_license_status'] = serviceLicenseStatus;
    }
    public get serviceLicenseStatus(): number | undefined {
        return this['service_license_status'];
    }
    public withActionEnabled(actionEnabled: boolean): RepositoryMemberDto {
        this['action_enabled'] = actionEnabled;
        return this;
    }
    public set actionEnabled(actionEnabled: boolean  | undefined) {
        this['action_enabled'] = actionEnabled;
    }
    public get actionEnabled(): boolean | undefined {
        return this['action_enabled'];
    }
}