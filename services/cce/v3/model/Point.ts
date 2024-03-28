import { TaskType } from './TaskType';


export class Point {
    public taskType?: TaskType;
    public constructor() { 
    }
    public withTaskType(taskType: TaskType): Point {
        this['taskType'] = taskType;
        return this;
    }
}