

export class StatisticDto {
    public id?: number;
    private 'project_id'?: number;
    public branch?: string;
    private 'user_name'?: string;
    private 'add_lines'?: number;
    private 'delete_lines'?: number;
    private 'commit_count'?: number;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
    }
    public withId(id: number): StatisticDto {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: number): StatisticDto {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: number  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): number | undefined {
        return this['project_id'];
    }
    public withBranch(branch: string): StatisticDto {
        this['branch'] = branch;
        return this;
    }
    public withUserName(userName: string): StatisticDto {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withAddLines(addLines: number): StatisticDto {
        this['add_lines'] = addLines;
        return this;
    }
    public set addLines(addLines: number  | undefined) {
        this['add_lines'] = addLines;
    }
    public get addLines(): number | undefined {
        return this['add_lines'];
    }
    public withDeleteLines(deleteLines: number): StatisticDto {
        this['delete_lines'] = deleteLines;
        return this;
    }
    public set deleteLines(deleteLines: number  | undefined) {
        this['delete_lines'] = deleteLines;
    }
    public get deleteLines(): number | undefined {
        return this['delete_lines'];
    }
    public withCommitCount(commitCount: number): StatisticDto {
        this['commit_count'] = commitCount;
        return this;
    }
    public set commitCount(commitCount: number  | undefined) {
        this['commit_count'] = commitCount;
    }
    public get commitCount(): number | undefined {
        return this['commit_count'];
    }
    public withCreatedAt(createdAt: string): StatisticDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): StatisticDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}