import { RecordIndexRequestBody } from './RecordIndexRequestBody';


export class CreateRecordIndexRequest {
    public body?: RecordIndexRequestBody;
    public constructor() { 
    }
    public withBody(body: RecordIndexRequestBody): CreateRecordIndexRequest {
        this['body'] = body;
        return this;
    }
}