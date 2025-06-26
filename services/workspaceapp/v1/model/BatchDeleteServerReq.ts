import { ServerIdSet } from './ServerIdSet';


export class BatchDeleteServerReq {
    public items?: Array<string>;
    public constructor(items?: Array<string>) { 
        this['items'] = items;
    }
    public withItems(items: Array<string>): BatchDeleteServerReq {
        this['items'] = items;
        return this;
    }
}