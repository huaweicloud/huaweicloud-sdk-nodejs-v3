import { TaskBasicInfo } from './TaskBasicInfo';


export class ShowTasksListResult {
    public info?: Array<TaskBasicInfo>;
    public total?: number;
    public constructor() { 
    }
    public withInfo(info: Array<TaskBasicInfo>): ShowTasksListResult {
        this['info'] = info;
        return this;
    }
    public withTotal(total: number): ShowTasksListResult {
        this['total'] = total;
        return this;
    }
}