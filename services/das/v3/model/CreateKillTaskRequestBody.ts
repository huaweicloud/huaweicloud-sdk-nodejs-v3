

export class CreateKillTaskRequestBody {
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
    public withUser(user: string): CreateKillTaskRequestBody {
        this['user'] = user;
        return this;
    }
    public withHost(host: string): CreateKillTaskRequestBody {
        this['host'] = host;
        return this;
    }
    public withDb(db: string): CreateKillTaskRequestBody {
        this['db'] = db;
        return this;
    }
    public withCommand(command: string): CreateKillTaskRequestBody {
        this['command'] = command;
        return this;
    }
    public withTime(time: number): CreateKillTaskRequestBody {
        this['time'] = time;
        return this;
    }
    public withInfo(info: string): CreateKillTaskRequestBody {
        this['info'] = info;
        return this;
    }
    public withTaskDuration(taskDuration: number): CreateKillTaskRequestBody {
        this['task_duration'] = taskDuration;
        return this;
    }
    public set taskDuration(taskDuration: number  | undefined) {
        this['task_duration'] = taskDuration;
    }
    public get taskDuration(): number | undefined {
        return this['task_duration'];
    }
    public withTaskType(taskType: string): CreateKillTaskRequestBody {
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