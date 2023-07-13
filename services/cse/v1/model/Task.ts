import { TaskExecutorBrief } from './TaskExecutorBrief';


export class Task {
    private 'job_id'?: number | undefined;
    public id?: number;
    public type?: TaskTypeEnum;
    public assigned?: string;
    private 'task_name'?: string | undefined;
    private 'engine_name'?: string | undefined;
    private 'task_order'?: number | undefined;
    public status?: TaskStatusEnum;
    private 'start_time'?: number | undefined;
    private 'end_time'?: number | undefined;
    private 'create_time'?: number | undefined;
    private 'update_time'?: number | undefined;
    public timeout?: number;
    public log?: string;
    public output?: string;
    private 'task_executor_brief'?: TaskExecutorBrief | undefined;
    public constructor() { 
    }
    public withJobId(jobId: number): Task {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: number | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withId(id: number): Task {
        this['id'] = id;
        return this;
    }
    public withType(type: TaskTypeEnum): Task {
        this['type'] = type;
        return this;
    }
    public withAssigned(assigned: string): Task {
        this['assigned'] = assigned;
        return this;
    }
    public withTaskName(taskName: string): Task {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName() {
        return this['task_name'];
    }
    public withEngineName(engineName: string): Task {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName() {
        return this['engine_name'];
    }
    public withTaskOrder(taskOrder: number): Task {
        this['task_order'] = taskOrder;
        return this;
    }
    public set taskOrder(taskOrder: number | undefined) {
        this['task_order'] = taskOrder;
    }
    public get taskOrder() {
        return this['task_order'];
    }
    public withStatus(status: TaskStatusEnum): Task {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: number): Task {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: number): Task {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withCreateTime(createTime: number): Task {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): Task {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
    public withTimeout(timeout: number): Task {
        this['timeout'] = timeout;
        return this;
    }
    public withLog(log: string): Task {
        this['log'] = log;
        return this;
    }
    public withOutput(output: string): Task {
        this['output'] = output;
        return this;
    }
    public withTaskExecutorBrief(taskExecutorBrief: TaskExecutorBrief): Task {
        this['task_executor_brief'] = taskExecutorBrief;
        return this;
    }
    public set taskExecutorBrief(taskExecutorBrief: TaskExecutorBrief | undefined) {
        this['task_executor_brief'] = taskExecutorBrief;
    }
    public get taskExecutorBrief() {
        return this['task_executor_brief'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TaskTypeEnum {
    CREATE = 'Create',
    DELETE = 'Delete',
    UPGRADE = 'Upgrade',
    MODIFY = 'Modify'
}
/**
    * @export
    * @enum {string}
    */
export enum TaskStatusEnum {
    INIT = 'Init',
    EXECUTING = 'Executing',
    ERROR = 'Error',
    TIMEOUT = 'Timeout',
    FINISHED = 'Finished'
}
