

export class RepoStatistics {
    private 'add_lines'?: number;
    public branch?: string;
    private 'commit_count'?: number;
    private 'created_at'?: Date;
    private 'delete_lines'?: number;
    public id?: number;
    private 'project_id'?: number;
    private 'updated_at'?: Date;
    private 'user_name'?: string;
    public constructor() { 
    }
    public withAddLines(addLines: number): RepoStatistics {
        this['add_lines'] = addLines;
        return this;
    }
    public set addLines(addLines: number  | undefined) {
        this['add_lines'] = addLines;
    }
    public get addLines(): number | undefined {
        return this['add_lines'];
    }
    public withBranch(branch: string): RepoStatistics {
        this['branch'] = branch;
        return this;
    }
    public withCommitCount(commitCount: number): RepoStatistics {
        this['commit_count'] = commitCount;
        return this;
    }
    public set commitCount(commitCount: number  | undefined) {
        this['commit_count'] = commitCount;
    }
    public get commitCount(): number | undefined {
        return this['commit_count'];
    }
    public withCreatedAt(createdAt: Date): RepoStatistics {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withDeleteLines(deleteLines: number): RepoStatistics {
        this['delete_lines'] = deleteLines;
        return this;
    }
    public set deleteLines(deleteLines: number  | undefined) {
        this['delete_lines'] = deleteLines;
    }
    public get deleteLines(): number | undefined {
        return this['delete_lines'];
    }
    public withId(id: number): RepoStatistics {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: number): RepoStatistics {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: number  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): number | undefined {
        return this['project_id'];
    }
    public withUpdatedAt(updatedAt: Date): RepoStatistics {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withUserName(userName: string): RepoStatistics {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
}