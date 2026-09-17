import { TaskInfo } from './TaskInfo';


export class OperationalTaskRequest {
    private 'task_info'?: TaskInfo;
    public constructor() { 
    }
    public withTaskInfo(taskInfo: TaskInfo): OperationalTaskRequest {
        this['task_info'] = taskInfo;
        return this;
    }
    public set taskInfo(taskInfo: TaskInfo  | undefined) {
        this['task_info'] = taskInfo;
    }
    public get taskInfo(): TaskInfo | undefined {
        return this['task_info'];
    }
}