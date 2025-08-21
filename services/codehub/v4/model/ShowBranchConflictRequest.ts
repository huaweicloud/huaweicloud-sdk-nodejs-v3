

export class ShowBranchConflictRequest {
    private 'repository_id'?: number;
    private 'source_repository_id'?: number;
    private 'source_branch'?: string;
    private 'target_branch'?: string;
    private 'target_repository_id'?: number;
    public constructor(repositoryId?: number, sourceRepositoryId?: number, sourceBranch?: string, targetBranch?: string, targetRepositoryId?: number) { 
        this['repository_id'] = repositoryId;
        this['source_repository_id'] = sourceRepositoryId;
        this['source_branch'] = sourceBranch;
        this['target_branch'] = targetBranch;
        this['target_repository_id'] = targetRepositoryId;
    }
    public withRepositoryId(repositoryId: number): ShowBranchConflictRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withSourceRepositoryId(sourceRepositoryId: number): ShowBranchConflictRequest {
        this['source_repository_id'] = sourceRepositoryId;
        return this;
    }
    public set sourceRepositoryId(sourceRepositoryId: number  | undefined) {
        this['source_repository_id'] = sourceRepositoryId;
    }
    public get sourceRepositoryId(): number | undefined {
        return this['source_repository_id'];
    }
    public withSourceBranch(sourceBranch: string): ShowBranchConflictRequest {
        this['source_branch'] = sourceBranch;
        return this;
    }
    public set sourceBranch(sourceBranch: string  | undefined) {
        this['source_branch'] = sourceBranch;
    }
    public get sourceBranch(): string | undefined {
        return this['source_branch'];
    }
    public withTargetBranch(targetBranch: string): ShowBranchConflictRequest {
        this['target_branch'] = targetBranch;
        return this;
    }
    public set targetBranch(targetBranch: string  | undefined) {
        this['target_branch'] = targetBranch;
    }
    public get targetBranch(): string | undefined {
        return this['target_branch'];
    }
    public withTargetRepositoryId(targetRepositoryId: number): ShowBranchConflictRequest {
        this['target_repository_id'] = targetRepositoryId;
        return this;
    }
    public set targetRepositoryId(targetRepositoryId: number  | undefined) {
        this['target_repository_id'] = targetRepositoryId;
    }
    public get targetRepositoryId(): number | undefined {
        return this['target_repository_id'];
    }
}