import { Task } from './Task';


export class JobSpec {
    public progress?: number;
    public status?: string;
    public tasks?: Array<Task>;
    public constructor() { 
    }
    public withProgress(progress: number): JobSpec {
        this['progress'] = progress;
        return this;
    }
    public withStatus(status: string): JobSpec {
        this['status'] = status;
        return this;
    }
    public withTasks(tasks: Array<Task>): JobSpec {
        this['tasks'] = tasks;
        return this;
    }
}