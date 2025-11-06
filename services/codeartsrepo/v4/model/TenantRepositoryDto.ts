

export class TenantRepositoryDto {
    public owner?: string;
    public capacity?: number;
    public status?: number;
    private 'moderation_result'?: boolean;
    private 'create_time'?: string;
    private 'member_number'?: number;
    private 'repository_id'?: number;
    private 'repository_name'?: string;
    private 'project_name'?: string;
    private 'project_id'?: string;
    public constructor() { 
    }
    public withOwner(owner: string): TenantRepositoryDto {
        this['owner'] = owner;
        return this;
    }
    public withCapacity(capacity: number): TenantRepositoryDto {
        this['capacity'] = capacity;
        return this;
    }
    public withStatus(status: number): TenantRepositoryDto {
        this['status'] = status;
        return this;
    }
    public withModerationResult(moderationResult: boolean): TenantRepositoryDto {
        this['moderation_result'] = moderationResult;
        return this;
    }
    public set moderationResult(moderationResult: boolean  | undefined) {
        this['moderation_result'] = moderationResult;
    }
    public get moderationResult(): boolean | undefined {
        return this['moderation_result'];
    }
    public withCreateTime(createTime: string): TenantRepositoryDto {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withMemberNumber(memberNumber: number): TenantRepositoryDto {
        this['member_number'] = memberNumber;
        return this;
    }
    public set memberNumber(memberNumber: number  | undefined) {
        this['member_number'] = memberNumber;
    }
    public get memberNumber(): number | undefined {
        return this['member_number'];
    }
    public withRepositoryId(repositoryId: number): TenantRepositoryDto {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withRepositoryName(repositoryName: string): TenantRepositoryDto {
        this['repository_name'] = repositoryName;
        return this;
    }
    public set repositoryName(repositoryName: string  | undefined) {
        this['repository_name'] = repositoryName;
    }
    public get repositoryName(): string | undefined {
        return this['repository_name'];
    }
    public withProjectName(projectName: string): TenantRepositoryDto {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withProjectId(projectId: string): TenantRepositoryDto {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}