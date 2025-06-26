import { StringSet } from './StringSet';


export class BatchRejoinDomainReq {
    public items?: Array<string>;
    public constructor(items?: Array<string>) { 
        this['items'] = items;
    }
    public withItems(items: Array<string>): BatchRejoinDomainReq {
        this['items'] = items;
        return this;
    }
}