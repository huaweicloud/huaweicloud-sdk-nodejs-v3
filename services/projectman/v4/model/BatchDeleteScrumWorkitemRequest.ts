import { BatchDeleteModuleRequestBody } from './BatchDeleteModuleRequestBody';


export class BatchDeleteScrumWorkitemRequest {
    public body?: BatchDeleteModuleRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchDeleteModuleRequestBody): BatchDeleteScrumWorkitemRequest {
        this['body'] = body;
        return this;
    }
}