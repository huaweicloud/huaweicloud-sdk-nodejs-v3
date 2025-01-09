import { StringSet } from './StringSet';


export class BatchOperateJobsReq {
    public items?: Array<string>;
    public constructor(items?: Array<string>) { 
        this['items'] = items;
    }
    public withItems(items: Array<string>): BatchOperateJobsReq {
        this['items'] = items;
        return this;
    }
}