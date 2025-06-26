import { StringSet } from './StringSet';


export class BatchDeleteSubJobsReq {
    public items?: Array<string>;
    public constructor(items?: Array<string>) { 
        this['items'] = items;
    }
    public withItems(items: Array<string>): BatchDeleteSubJobsReq {
        this['items'] = items;
        return this;
    }
}