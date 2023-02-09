

export class TasksObject {
    public id?: string;
    private 'task_type'?: TasksObjectTaskTypeEnum | undefined;
    public status?: string;
    public processing?: number;
    public succeed?: number;
    public failed?: number;
    public total?: number;
    private 'create_time'?: number | undefined;
    private 'file_type'?: TasksObjectFileTypeEnum | undefined;
    public constructor() { 
    }
    public withId(id: string): TasksObject {
        this['id'] = id;
        return this;
    }
    public withTaskType(taskType: TasksObjectTaskTypeEnum): TasksObject {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: TasksObjectTaskTypeEnum | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType() {
        return this['task_type'];
    }
    public withStatus(status: string): TasksObject {
        this['status'] = status;
        return this;
    }
    public withProcessing(processing: number): TasksObject {
        this['processing'] = processing;
        return this;
    }
    public withSucceed(succeed: number): TasksObject {
        this['succeed'] = succeed;
        return this;
    }
    public withFailed(failed: number): TasksObject {
        this['failed'] = failed;
        return this;
    }
    public withTotal(total: number): TasksObject {
        this['total'] = total;
        return this;
    }
    public withCreateTime(createTime: number): TasksObject {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withFileType(fileType: TasksObjectFileTypeEnum): TasksObject {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: TasksObjectFileTypeEnum | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType() {
        return this['file_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TasksObjectTaskTypeEnum {
    REFRESH = 'refresh',
    PREHEATING = 'preheating'
}
/**
    * @export
    * @enum {string}
    */
export enum TasksObjectFileTypeEnum {
    FILE = 'file',
    DIRECTORY = 'directory'
}
