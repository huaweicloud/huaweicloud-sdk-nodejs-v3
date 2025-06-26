import { ServerIdSet } from './ServerIdSet';


export class BatchStartServerReq {
    public items?: Array<string>;
    public constructor(items?: Array<string>) { 
        this['items'] = items;
    }
    public withItems(items: Array<string>): BatchStartServerReq {
        this['items'] = items;
        return this;
    }
}