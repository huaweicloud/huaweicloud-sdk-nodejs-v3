

export class StatisticEventsDto {
    public id?: number;
    private 'user_id'?: number;
    private 'project_id'?: number;
    public branch?: string;
    public status?: string;
    private 'stat_date'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
    }
    public withId(id: number): StatisticEventsDto {
        this['id'] = id;
        return this;
    }
    public withUserId(userId: number): StatisticEventsDto {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: number  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): number | undefined {
        return this['user_id'];
    }
    public withProjectId(projectId: number): StatisticEventsDto {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: number  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): number | undefined {
        return this['project_id'];
    }
    public withBranch(branch: string): StatisticEventsDto {
        this['branch'] = branch;
        return this;
    }
    public withStatus(status: string): StatisticEventsDto {
        this['status'] = status;
        return this;
    }
    public withStatDate(statDate: string): StatisticEventsDto {
        this['stat_date'] = statDate;
        return this;
    }
    public set statDate(statDate: string  | undefined) {
        this['stat_date'] = statDate;
    }
    public get statDate(): string | undefined {
        return this['stat_date'];
    }
    public withCreatedAt(createdAt: string): StatisticEventsDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): StatisticEventsDto {
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