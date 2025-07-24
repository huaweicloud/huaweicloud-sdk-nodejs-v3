import { WorkItemVo } from './WorkItemVo';


export class ResultValueListWorkItemVo {
    public value?: Array<WorkItemVo>;
    public constructor() { 
    }
    public withValue(value: Array<WorkItemVo>): ResultValueListWorkItemVo {
        this['value'] = value;
        return this;
    }
}