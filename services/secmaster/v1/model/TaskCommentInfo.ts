

export class TaskCommentInfo {
    public id?: string;
    public message?: string;
    private 'user_id'?: string;
    private 'user_name'?: string;
    public time?: number;
    public constructor(message?: string) { 
        this['message'] = message;
    }
    public withId(id: string): TaskCommentInfo {
        this['id'] = id;
        return this;
    }
    public withMessage(message: string): TaskCommentInfo {
        this['message'] = message;
        return this;
    }
    public withUserId(userId: string): TaskCommentInfo {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): TaskCommentInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withTime(time: number): TaskCommentInfo {
        this['time'] = time;
        return this;
    }
}