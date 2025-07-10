

export class RepoInfoV2 {
    private 'created_at'?: string;
    private 'creator_name'?: string;
    private 'domain_name'?: string;
    private 'group_name'?: string;
    private 'https_url'?: string;
    private 'iam_user_uuid'?: string;
    private 'is_owner'?: number;
    private 'lfs_size'?: string;
    private 'project_is_deleted'?: string;
    private 'project_uuid'?: string;
    private 'repository_id'?: number;
    private 'repository_name'?: string;
    private 'repository_size'?: string;
    private 'repository_uuid'?: string;
    private 'ssh_url'?: string;
    public star?: boolean;
    public status?: number;
    private 'updated_at'?: string;
    public userRole?: number;
    private 'visibility_level'?: number;
    private 'web_url'?: string;
    public constructor() { 
    }
    public withCreatedAt(createdAt: string): RepoInfoV2 {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withCreatorName(creatorName: string): RepoInfoV2 {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withDomainName(domainName: string): RepoInfoV2 {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withGroupName(groupName: string): RepoInfoV2 {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withHttpsUrl(httpsUrl: string): RepoInfoV2 {
        this['https_url'] = httpsUrl;
        return this;
    }
    public set httpsUrl(httpsUrl: string  | undefined) {
        this['https_url'] = httpsUrl;
    }
    public get httpsUrl(): string | undefined {
        return this['https_url'];
    }
    public withIamUserUuid(iamUserUuid: string): RepoInfoV2 {
        this['iam_user_uuid'] = iamUserUuid;
        return this;
    }
    public set iamUserUuid(iamUserUuid: string  | undefined) {
        this['iam_user_uuid'] = iamUserUuid;
    }
    public get iamUserUuid(): string | undefined {
        return this['iam_user_uuid'];
    }
    public withIsOwner(isOwner: number): RepoInfoV2 {
        this['is_owner'] = isOwner;
        return this;
    }
    public set isOwner(isOwner: number  | undefined) {
        this['is_owner'] = isOwner;
    }
    public get isOwner(): number | undefined {
        return this['is_owner'];
    }
    public withLfsSize(lfsSize: string): RepoInfoV2 {
        this['lfs_size'] = lfsSize;
        return this;
    }
    public set lfsSize(lfsSize: string  | undefined) {
        this['lfs_size'] = lfsSize;
    }
    public get lfsSize(): string | undefined {
        return this['lfs_size'];
    }
    public withProjectIsDeleted(projectIsDeleted: string): RepoInfoV2 {
        this['project_is_deleted'] = projectIsDeleted;
        return this;
    }
    public set projectIsDeleted(projectIsDeleted: string  | undefined) {
        this['project_is_deleted'] = projectIsDeleted;
    }
    public get projectIsDeleted(): string | undefined {
        return this['project_is_deleted'];
    }
    public withProjectUuid(projectUuid: string): RepoInfoV2 {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withRepositoryId(repositoryId: number): RepoInfoV2 {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withRepositoryName(repositoryName: string): RepoInfoV2 {
        this['repository_name'] = repositoryName;
        return this;
    }
    public set repositoryName(repositoryName: string  | undefined) {
        this['repository_name'] = repositoryName;
    }
    public get repositoryName(): string | undefined {
        return this['repository_name'];
    }
    public withRepositorySize(repositorySize: string): RepoInfoV2 {
        this['repository_size'] = repositorySize;
        return this;
    }
    public set repositorySize(repositorySize: string  | undefined) {
        this['repository_size'] = repositorySize;
    }
    public get repositorySize(): string | undefined {
        return this['repository_size'];
    }
    public withRepositoryUuid(repositoryUuid: string): RepoInfoV2 {
        this['repository_uuid'] = repositoryUuid;
        return this;
    }
    public set repositoryUuid(repositoryUuid: string  | undefined) {
        this['repository_uuid'] = repositoryUuid;
    }
    public get repositoryUuid(): string | undefined {
        return this['repository_uuid'];
    }
    public withSshUrl(sshUrl: string): RepoInfoV2 {
        this['ssh_url'] = sshUrl;
        return this;
    }
    public set sshUrl(sshUrl: string  | undefined) {
        this['ssh_url'] = sshUrl;
    }
    public get sshUrl(): string | undefined {
        return this['ssh_url'];
    }
    public withStar(star: boolean): RepoInfoV2 {
        this['star'] = star;
        return this;
    }
    public withStatus(status: number): RepoInfoV2 {
        this['status'] = status;
        return this;
    }
    public withUpdatedAt(updatedAt: string): RepoInfoV2 {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withUserRole(userRole: number): RepoInfoV2 {
        this['userRole'] = userRole;
        return this;
    }
    public withVisibilityLevel(visibilityLevel: number): RepoInfoV2 {
        this['visibility_level'] = visibilityLevel;
        return this;
    }
    public set visibilityLevel(visibilityLevel: number  | undefined) {
        this['visibility_level'] = visibilityLevel;
    }
    public get visibilityLevel(): number | undefined {
        return this['visibility_level'];
    }
    public withWebUrl(webUrl: string): RepoInfoV2 {
        this['web_url'] = webUrl;
        return this;
    }
    public set webUrl(webUrl: string  | undefined) {
        this['web_url'] = webUrl;
    }
    public get webUrl(): string | undefined {
        return this['web_url'];
    }
}