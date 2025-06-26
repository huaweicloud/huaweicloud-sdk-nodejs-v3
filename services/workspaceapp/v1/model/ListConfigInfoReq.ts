import { ConfigKeyStringSet } from './ConfigKeyStringSet';


export class ListConfigInfoReq {
    public items?: Array<string>;
    public constructor(items?: Array<string>) { 
        this['items'] = items;
    }
    public withItems(items: Array<string>): ListConfigInfoReq {
        this['items'] = items;
        return this;
    }
}