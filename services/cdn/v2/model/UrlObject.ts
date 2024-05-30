

export class UrlObject {
    public id?: string;
    public url?: string;
    public status?: string;
    private 'create_time'?: number;
    private 'task_id'?: string;
    private 'task_type'?: string;
    private 'fail_classify'?: string;
    private 'fail_desc'?: string;
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
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withTaskId(taskId: string): UrlObject {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskType(taskType: string): UrlObject {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withFailClassify(failClassify: string): UrlObject {
        this['fail_classify'] = failClassify;
        return this;
    }
    public set failClassify(failClassify: string  | undefined) {
        this['fail_classify'] = failClassify;
    }
    public get failClassify(): string | undefined {
        return this['fail_classify'];
    }
    public withFailDesc(failDesc: string): UrlObject {
        this['fail_desc'] = failDesc;
        return this;
    }
    public set failDesc(failDesc: string  | undefined) {
        this['fail_desc'] = failDesc;
    }
    public get failDesc(): string | undefined {
        return this['fail_desc'];
    }
}