import { Task } from './Task';
import { TaskExecutorBrief } from './TaskExecutorBrief';


export class TaskSteps {
    public taskName?: string;
    public taskNames?: Array<string>;
    public status?: TaskStepsStatusEnum | string;
    public startTime?: number;
    public endTime?: number;
    public taskExecutorBrief?: TaskExecutorBrief;
    public tasks?: Array<Task>;
    public constructor() { 
    }
    public withTaskName(taskName: string): TaskSteps {
        this['taskName'] = taskName;
        return this;
    }
    public withTaskNames(taskNames: Array<string>): TaskSteps {
        this['taskNames'] = taskNames;
        return this;
    }
    public withStatus(status: TaskStepsStatusEnum | string): TaskSteps {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: number): TaskSteps {
        this['startTime'] = startTime;
        return this;
    }
    public withEndTime(endTime: number): TaskSteps {
        this['endTime'] = endTime;
        return this;
    }
    public withTaskExecutorBrief(taskExecutorBrief: TaskExecutorBrief): TaskSteps {
        this['taskExecutorBrief'] = taskExecutorBrief;
        return this;
    }
    public withTasks(tasks: Array<Task>): TaskSteps {
        this['tasks'] = tasks;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TaskStepsStatusEnum {
    INIT = 'Init',
    EXECUTING = 'Executing',
    ERROR = 'Error',
    TIMEOUT = 'Timeout',
    FINISHED = 'Finished'
}
