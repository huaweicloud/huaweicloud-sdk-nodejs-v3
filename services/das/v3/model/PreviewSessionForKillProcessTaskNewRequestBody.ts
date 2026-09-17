

export class PreviewSessionForKillProcessTaskNewRequestBody {
    public user?: string;
    public host?: string;
    public db?: string;
    public command?: string;
    public time?: number;
    public info?: string;
    private 'task_duration'?: number;
    private 'task_type'?: string;
    public constructor(time?: number, taskDuration?: number, taskType?: string) { 
        this['time'] = time;
        this['task_duration'] = taskDuration;
        this['task_type'] = taskType;
    }
    public withUser(user: string): PreviewSessionForKillProcessTaskNewRequestBody {
        this['user'] = user;
        return this;
    }
    public withHost(host: string): PreviewSessionForKillProcessTaskNewRequestBody {
        this['host'] = host;
        return this;
    }
    public withDb(db: string): PreviewSessionForKillProcessTaskNewRequestBody {
        this['db'] = db;
        return this;
    }
    public withCommand(command: string): PreviewSessionForKillProcessTaskNewRequestBody {
        this['command'] = command;
        return this;
    }
    public withTime(time: number): PreviewSessionForKillProcessTaskNewRequestBody {
        this['time'] = time;
        return this;
    }
    public withInfo(info: string): PreviewSessionForKillProcessTaskNewRequestBody {
        this['info'] = info;
        return this;
    }
    public withTaskDuration(taskDuration: number): PreviewSessionForKillProcessTaskNewRequestBody {
        this['task_duration'] = taskDuration;
        return this;
    }
    public set taskDuration(taskDuration: number  | undefined) {
        this['task_duration'] = taskDuration;
    }
    public get taskDuration(): number | undefined {
        return this['task_duration'];
    }
    public withTaskType(taskType: string): PreviewSessionForKillProcessTaskNewRequestBody {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
}