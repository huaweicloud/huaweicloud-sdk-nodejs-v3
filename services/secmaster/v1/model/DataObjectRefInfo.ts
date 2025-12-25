import { DataClassRef } from './DataClassRef';


export class DataObjectRefInfo {
    public content?: { [key: string]: object; };
    public dataclass?: DataClassRef;
    public constructor() { 
    }
    public withContent(content: { [key: string]: object; }): DataObjectRefInfo {
        this['content'] = content;
        return this;
    }
    public withDataclass(dataclass: DataClassRef): DataObjectRefInfo {
        this['dataclass'] = dataclass;
        return this;
    }
}