import { TaskVo } from './TaskVo';


export class TaskListVo {
    public tasks?: Array<TaskVo>;
    private 'running_count'?: number;
    public constructor() { 
    }
    public withTasks(tasks: Array<TaskVo>): TaskListVo {
        this['tasks'] = tasks;
        return this;
    }
    public withRunningCount(runningCount: number): TaskListVo {
        this['running_count'] = runningCount;
        return this;
    }
    public set runningCount(runningCount: number  | undefined) {
        this['running_count'] = runningCount;
    }
    public get runningCount(): number | undefined {
        return this['running_count'];
    }
}