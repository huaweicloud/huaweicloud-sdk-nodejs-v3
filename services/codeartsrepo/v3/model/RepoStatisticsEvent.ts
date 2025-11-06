

export class RepoStatisticsEvent {
    public branch?: string;
    private 'created_at'?: Date;
    public date?: string;
    public id?: number;
    private 'project_id'?: number;
    public status?: string;
    private 'updated_at'?: Date;
    private 'user_id'?: number;
    public constructor() { 
    }
    public withBranch(branch: string): RepoStatisticsEvent {
        this['branch'] = branch;
        return this;
    }
    public withCreatedAt(createdAt: Date): RepoStatisticsEvent {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withDate(date: string): RepoStatisticsEvent {
        this['date'] = date;
        return this;
    }
    public withId(id: number): RepoStatisticsEvent {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: number): RepoStatisticsEvent {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: number  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): number | undefined {
        return this['project_id'];
    }
    public withStatus(status: string): RepoStatisticsEvent {
        this['status'] = status;
        return this;
    }
    public withUpdatedAt(updatedAt: Date): RepoStatisticsEvent {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withUserId(userId: number): RepoStatisticsEvent {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: number  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): number | undefined {
        return this['user_id'];
    }
}