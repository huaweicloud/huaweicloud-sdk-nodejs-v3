import { ServerHaltType } from './ServerHaltType';
import { ServerIdSet } from './ServerIdSet';


export class ServerHaltReq {
    public items?: Array<string>;
    public type?: ServerHaltType;
    public constructor(items?: Array<string>, type?: ServerHaltType) { 
        this['items'] = items;
        this['type'] = type;
    }
    public withItems(items: Array<string>): ServerHaltReq {
        this['items'] = items;
        return this;
    }
    public withType(type: ServerHaltType): ServerHaltReq {
        this['type'] = type;
        return this;
    }
}