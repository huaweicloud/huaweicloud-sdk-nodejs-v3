import { StringSet } from './StringSet';


export class BatchUpgradeHdaVersionReq {
    public items?: Array<string>;
    public constructor(items?: Array<string>) { 
        this['items'] = items;
    }
    public withItems(items: Array<string>): BatchUpgradeHdaVersionReq {
        this['items'] = items;
        return this;
    }
}