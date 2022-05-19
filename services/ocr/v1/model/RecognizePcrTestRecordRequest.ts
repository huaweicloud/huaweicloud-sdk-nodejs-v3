import { PcrTestRecordRequestBody } from './PcrTestRecordRequestBody';


export class RecognizePcrTestRecordRequest {
    public body?: PcrTestRecordRequestBody;
    public constructor() { 
    }
    public withBody(body: PcrTestRecordRequestBody): RecognizePcrTestRecordRequest {
        this['body'] = body;
        return this;
    }
}