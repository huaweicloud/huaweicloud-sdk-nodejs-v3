import { TaskInputData } from './TaskInputData';


export class TaskInput {
    public type: string;
    public data: Array<TaskInputData>;
    public constructor(type?: any, data?: any) { 
        this['type'] = type;
        this['data'] = data;
    }
    public withType(type: string): TaskInput {
        this['type'] = type;
        return this;
    }
    public withData(data: Array<TaskInputData>): TaskInput {
        this['data'] = data;
        return this;
    }
}