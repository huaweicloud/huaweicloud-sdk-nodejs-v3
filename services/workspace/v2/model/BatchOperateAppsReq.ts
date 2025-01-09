import { StringSet } from './StringSet';


export class BatchOperateAppsReq {
    public items?: Array<string>;
    public constructor(items?: Array<string>) { 
        this['items'] = items;
    }
    public withItems(items: Array<string>): BatchOperateAppsReq {
        this['items'] = items;
        return this;
    }
}