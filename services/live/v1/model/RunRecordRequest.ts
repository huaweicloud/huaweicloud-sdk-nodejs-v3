import { RecordControlInfo } from './RecordControlInfo';


export class RunRecordRequest {
    public action: RunRecordRequestActionEnum;
    public body?: RecordControlInfo;
    public constructor(action?: any) { 
        this['action'] = action;
    }
    public withAction(action: RunRecordRequestActionEnum): RunRecordRequest {
        this['action'] = action;
        return this;
    }
    public withBody(body: RecordControlInfo): RunRecordRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RunRecordRequestActionEnum {
    START = 'START',
    STOP = 'STOP'
}
