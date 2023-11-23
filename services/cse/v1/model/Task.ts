import { TaskExecutorBrief } from './TaskExecutorBrief';


export class Task {
    public jobId?: number;
    public id?: number;
    public type?: TaskTypeEnum | string;
    public assigned?: string;
    public taskName?: string;
    public engineName?: string;
    public taskOrder?: number;
    public status?: TaskStatusEnum | string;
    public startTime?: number;
    public endTime?: number;
    public createTime?: number;
    public updateTime?: number;
    public timeout?: number;
    public log?: string;
    public output?: string;
    public taskExecutorBrief?: TaskExecutorBrief;
    public constructor() { 
    }
    public withJobId(jobId: number): Task {
        this['jobId'] = jobId;
        return this;
    }
    public withId(id: number): Task {
        this['id'] = id;
        return this;
    }
    public withType(type: TaskTypeEnum | string): Task {
        this['type'] = type;
        return this;
    }
    public withAssigned(assigned: string): Task {
        this['assigned'] = assigned;
        return this;
    }
    public withTaskName(taskName: string): Task {
        this['taskName'] = taskName;
        return this;
    }
    public withEngineName(engineName: string): Task {
        this['engineName'] = engineName;
        return this;
    }
    public withTaskOrder(taskOrder: number): Task {
        this['taskOrder'] = taskOrder;
        return this;
    }
    public withStatus(status: TaskStatusEnum | string): Task {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: number): Task {
        this['startTime'] = startTime;
        return this;
    }
    public withEndTime(endTime: number): Task {
        this['endTime'] = endTime;
        return this;
    }
    public withCreateTime(createTime: number): Task {
        this['createTime'] = createTime;
        return this;
    }
    public withUpdateTime(updateTime: number): Task {
        this['updateTime'] = updateTime;
        return this;
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
        this['taskExecutorBrief'] = taskExecutorBrief;
        return this;
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
