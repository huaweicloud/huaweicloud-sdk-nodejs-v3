import { StringSet } from './StringSet';


export class BatchDeleteImageServerReq {
    public items?: Array<string>;
    public recursive?: boolean;
    public constructor(items?: Array<string>) { 
        this['items'] = items;
    }
    public withItems(items: Array<string>): BatchDeleteImageServerReq {
        this['items'] = items;
        return this;
    }
    public withRecursive(recursive: boolean): BatchDeleteImageServerReq {
        this['recursive'] = recursive;
        return this;
    }
}