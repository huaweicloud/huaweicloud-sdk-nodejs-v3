import { StringSet } from './StringSet';


export class BatchOperateAppRulesReq {
    public items?: Array<string>;
    public constructor(items?: Array<string>) { 
        this['items'] = items;
    }
    public withItems(items: Array<string>): BatchOperateAppRulesReq {
        this['items'] = items;
        return this;
    }
}