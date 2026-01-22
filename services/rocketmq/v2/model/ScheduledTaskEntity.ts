

export class ScheduledTaskEntity {
    public id?: string;
    public name?: string;
    private 'user_name'?: string;
    private 'user_id'?: string;
    public params?: string;
    public status?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'schedule_at'?: string;
    public constructor() { 
    }
    public withId(id: string): ScheduledTaskEntity {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ScheduledTaskEntity {
        this['name'] = name;
        return this;
    }
    public withUserName(userName: string): ScheduledTaskEntity {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserId(userId: string): ScheduledTaskEntity {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withParams(params: string): ScheduledTaskEntity {
        this['params'] = params;
        return this;
    }
    public withStatus(status: string): ScheduledTaskEntity {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: string): ScheduledTaskEntity {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ScheduledTaskEntity {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withScheduleAt(scheduleAt: string): ScheduledTaskEntity {
        this['schedule_at'] = scheduleAt;
        return this;
    }
    public set scheduleAt(scheduleAt: string  | undefined) {
        this['schedule_at'] = scheduleAt;
    }
    public get scheduleAt(): string | undefined {
        return this['schedule_at'];
    }
}