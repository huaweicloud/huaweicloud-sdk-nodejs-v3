import { BatchCreateRecordSetWithLine } from './BatchCreateRecordSetWithLine';


export class CreateRSetBatchLinesReq {
    public name: string;
    public description?: string;
    public type: string;
    public lines: Array<BatchCreateRecordSetWithLine>;
    public constructor(name?: any, type?: any, lines?: any) { 
        this['name'] = name;
        this['type'] = type;
        this['lines'] = lines;
    }
    public withName(name: string): CreateRSetBatchLinesReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateRSetBatchLinesReq {
        this['description'] = description;
        return this;
    }
    public withType(type: string): CreateRSetBatchLinesReq {
        this['type'] = type;
        return this;
    }
    public withLines(lines: Array<BatchCreateRecordSetWithLine>): CreateRSetBatchLinesReq {
        this['lines'] = lines;
        return this;
    }
}