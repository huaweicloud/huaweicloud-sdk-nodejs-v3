

export class CreateRepositoryMemberDto {
    private 'user_iam_id'?: string;
    private 'user_name'?: string;
    private 'tenant_name'?: string;
    private 'tenant_id'?: string;
    private 'repository_role_Id'?: string;
    public constructor() { 
    }
    public withUserIamId(userIamId: string): CreateRepositoryMemberDto {
        this['user_iam_id'] = userIamId;
        return this;
    }
    public set userIamId(userIamId: string  | undefined) {
        this['user_iam_id'] = userIamId;
    }
    public get userIamId(): string | undefined {
        return this['user_iam_id'];
    }
    public withUserName(userName: string): CreateRepositoryMemberDto {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withTenantName(tenantName: string): CreateRepositoryMemberDto {
        this['tenant_name'] = tenantName;
        return this;
    }
    public set tenantName(tenantName: string  | undefined) {
        this['tenant_name'] = tenantName;
    }
    public get tenantName(): string | undefined {
        return this['tenant_name'];
    }
    public withTenantId(tenantId: string): CreateRepositoryMemberDto {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withRepositoryRoleId(repositoryRoleId: string): CreateRepositoryMemberDto {
        this['repository_role_Id'] = repositoryRoleId;
        return this;
    }
    public set repositoryRoleId(repositoryRoleId: string  | undefined) {
        this['repository_role_Id'] = repositoryRoleId;
    }
    public get repositoryRoleId(): string | undefined {
        return this['repository_role_Id'];
    }
}