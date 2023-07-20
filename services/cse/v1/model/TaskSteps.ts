import { Task } from './Task';
import { TaskExecutorBrief } from './TaskExecutorBrief';


export class TaskSteps {
    private 'task_name'?: string;
    private 'task_names'?: Array<string>;
    public status?: TaskStepsStatusEnum | string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'task_executor_brief'?: TaskExecutorBrief;
    public tasks?: Array<Task>;
    public constructor() { 
    }
    public withTaskName(taskName: string): TaskSteps {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withTaskNames(taskNames: Array<string>): TaskSteps {
        this['task_names'] = taskNames;
        return this;
    }
    public set taskNames(taskNames: Array<string>  | undefined) {
        this['task_names'] = taskNames;
    }
    public get taskNames(): Array<string> | undefined {
        return this['task_names'];
    }
    public withStatus(status: TaskStepsStatusEnum | string): TaskSteps {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: number): TaskSteps {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): TaskSteps {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withTaskExecutorBrief(taskExecutorBrief: TaskExecutorBrief): TaskSteps {
        this['task_executor_brief'] = taskExecutorBrief;
        return this;
    }
    public set taskExecutorBrief(taskExecutorBrief: TaskExecutorBrief  | undefined) {
        this['task_executor_brief'] = taskExecutorBrief;
    }
    public get taskExecutorBrief(): TaskExecutorBrief | undefined {
        return this['task_executor_brief'];
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
