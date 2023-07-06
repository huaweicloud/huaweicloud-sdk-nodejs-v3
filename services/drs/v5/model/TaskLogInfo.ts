

export class TaskLogInfo {
    public level?: string;
    public message?: string;
    private 'create_time'?: string | undefined;
    public constructor() { 
    }
    public withLevel(level: string): TaskLogInfo {
        this['level'] = level;
        return this;
    }
    public withMessage(message: string): TaskLogInfo {
        this['message'] = message;
        return this;
    }
    public withCreateTime(createTime: string): TaskLogInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
}