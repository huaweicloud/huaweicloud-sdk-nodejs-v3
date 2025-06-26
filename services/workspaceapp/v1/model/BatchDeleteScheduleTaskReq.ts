import { StringSet } from './StringSet';


export class BatchDeleteScheduleTaskReq {
    public items?: Array<string>;
    public constructor(items?: Array<string>) { 
        this['items'] = items;
    }
    public withItems(items: Array<string>): BatchDeleteScheduleTaskReq {
        this['items'] = items;
        return this;
    }
}