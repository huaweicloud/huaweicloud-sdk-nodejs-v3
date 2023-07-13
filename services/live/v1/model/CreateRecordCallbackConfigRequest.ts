import { RecordCallbackConfigRequest } from './RecordCallbackConfigRequest';


export class CreateRecordCallbackConfigRequest {
    public body?: RecordCallbackConfigRequest;
    public constructor() { 
    }
    public withBody(body: RecordCallbackConfigRequest): CreateRecordCallbackConfigRequest {
        this['body'] = body;
        return this;
    }
}