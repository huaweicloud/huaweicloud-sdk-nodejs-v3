import { RecordInfoReq } from './RecordInfoReq';


export class ShowRecordInfoRequest {
    public body?: RecordInfoReq;
    public constructor() { 
    }
    public withBody(body: RecordInfoReq): ShowRecordInfoRequest {
        this['body'] = body;
        return this;
    }
}