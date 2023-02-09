

export class UrlObject {
    public id?: string;
    public url?: string;
    public status?: string;
    private 'create_time'?: number | undefined;
    private 'task_id'?: string | undefined;
    private 'task_type'?: string | undefined;
    public constructor() { 
    }
    public withId(id: string): UrlObject {
        this['id'] = id;
        return this;
    }
    public withUrl(url: string): UrlObject {
        this['url'] = url;
        return this;
    }
    public withStatus(status: string): UrlObject {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: number): UrlObject {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withTaskId(taskId: string): UrlObject {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withTaskType(taskType: string): UrlObject {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType() {
        return this['task_type'];
    }
}