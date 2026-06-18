

export class RepoEncryptionDto {
    private 'repo_id'?: number;
    private 'repo_name'?: string;
    private 'full_path'?: string;
    private 'project_id'?: string;
    private 'project_name'?: string;
    private 'owner_id'?: number;
    private 'owner_iam_id'?: string;
    private 'owner_tenant_name'?: string;
    private 'owner_nick_name'?: string;
    private 'owner_name'?: string;
    public constructor() { 
    }
    public withRepoId(repoId: number): RepoEncryptionDto {
        this['repo_id'] = repoId;
        return this;
    }
    public set repoId(repoId: number  | undefined) {
        this['repo_id'] = repoId;
    }
    public get repoId(): number | undefined {
        return this['repo_id'];
    }
    public withRepoName(repoName: string): RepoEncryptionDto {
        this['repo_name'] = repoName;
        return this;
    }
    public set repoName(repoName: string  | undefined) {
        this['repo_name'] = repoName;
    }
    public get repoName(): string | undefined {
        return this['repo_name'];
    }
    public withFullPath(fullPath: string): RepoEncryptionDto {
        this['full_path'] = fullPath;
        return this;
    }
    public set fullPath(fullPath: string  | undefined) {
        this['full_path'] = fullPath;
    }
    public get fullPath(): string | undefined {
        return this['full_path'];
    }
    public withProjectId(projectId: string): RepoEncryptionDto {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): RepoEncryptionDto {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withOwnerId(ownerId: number): RepoEncryptionDto {
        this['owner_id'] = ownerId;
        return this;
    }
    public set ownerId(ownerId: number  | undefined) {
        this['owner_id'] = ownerId;
    }
    public get ownerId(): number | undefined {
        return this['owner_id'];
    }
    public withOwnerIamId(ownerIamId: string): RepoEncryptionDto {
        this['owner_iam_id'] = ownerIamId;
        return this;
    }
    public set ownerIamId(ownerIamId: string  | undefined) {
        this['owner_iam_id'] = ownerIamId;
    }
    public get ownerIamId(): string | undefined {
        return this['owner_iam_id'];
    }
    public withOwnerTenantName(ownerTenantName: string): RepoEncryptionDto {
        this['owner_tenant_name'] = ownerTenantName;
        return this;
    }
    public set ownerTenantName(ownerTenantName: string  | undefined) {
        this['owner_tenant_name'] = ownerTenantName;
    }
    public get ownerTenantName(): string | undefined {
        return this['owner_tenant_name'];
    }
    public withOwnerNickName(ownerNickName: string): RepoEncryptionDto {
        this['owner_nick_name'] = ownerNickName;
        return this;
    }
    public set ownerNickName(ownerNickName: string  | undefined) {
        this['owner_nick_name'] = ownerNickName;
    }
    public get ownerNickName(): string | undefined {
        return this['owner_nick_name'];
    }
    public withOwnerName(ownerName: string): RepoEncryptionDto {
        this['owner_name'] = ownerName;
        return this;
    }
    public set ownerName(ownerName: string  | undefined) {
        this['owner_name'] = ownerName;
    }
    public get ownerName(): string | undefined {
        return this['owner_name'];
    }
}