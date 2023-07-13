

export class ListSinkTasksRespTasks {
    private 'task_id'?: string | undefined;
    private 'task_name'?: string | undefined;
    private 'destination_type'?: string | undefined;
    private 'create_time'?: number | undefined;
    public status?: string;
    public topics?: string;
    public constructor() { 
    }
    public withTaskId(taskId: string): ListSinkTasksRespTasks {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withTaskName(taskName: string): ListSinkTasksRespTasks {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName() {
        return this['task_name'];
    }
    public withDestinationType(destinationType: string): ListSinkTasksRespTasks {
        this['destination_type'] = destinationType;
        return this;
    }
    public set destinationType(destinationType: string | undefined) {
        this['destination_type'] = destinationType;
    }
    public get destinationType() {
        return this['destination_type'];
    }
    public withCreateTime(createTime: number): ListSinkTasksRespTasks {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withStatus(status: string): ListSinkTasksRespTasks {
        this['status'] = status;
        return this;
    }
    public withTopics(topics: string): ListSinkTasksRespTasks {
        this['topics'] = topics;
        return this;
    }
}