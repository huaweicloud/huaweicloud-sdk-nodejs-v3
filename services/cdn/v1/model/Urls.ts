

export class Urls {
    public id?: number;
    public url?: string;
    public status?: string;
    public type?: string;
    private 'task_id'?: number | undefined;
    private 'modify_time'?: number | undefined;
    private 'create_time'?: number | undefined;
    private 'file_type'?: string | undefined;
    public constructor() { 
    }
    public withId(id: number): Urls {
        this['id'] = id;
        return this;
    }
    public withUrl(url: string): Urls {
        this['url'] = url;
        return this;
    }
    public withStatus(status: string): Urls {
        this['status'] = status;
        return this;
    }
    public withType(type: string): Urls {
        this['type'] = type;
        return this;
    }
    public withTaskId(taskId: number): Urls {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: number | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withModifyTime(modifyTime: number): Urls {
        this['modify_time'] = modifyTime;
        return this;
    }
    public set modifyTime(modifyTime: number | undefined) {
        this['modify_time'] = modifyTime;
    }
    public get modifyTime() {
        return this['modify_time'];
    }
    public withCreateTime(createTime: number): Urls {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withFileType(fileType: string): Urls {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType() {
        return this['file_type'];
    }
}