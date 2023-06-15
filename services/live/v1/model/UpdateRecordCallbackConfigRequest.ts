import { RecordCallbackConfigRequest } from './RecordCallbackConfigRequest';


export class UpdateRecordCallbackConfigRequest {
    public id: string;
    public body?: RecordCallbackConfigRequest;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateRecordCallbackConfigRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: RecordCallbackConfigRequest): UpdateRecordCallbackConfigRequest {
        this['body'] = body;
        return this;
    }
}