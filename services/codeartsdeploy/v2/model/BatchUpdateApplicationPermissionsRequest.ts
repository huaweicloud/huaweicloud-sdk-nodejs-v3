import { BatchUpdateApplicationPermissionsRequestBody } from './BatchUpdateApplicationPermissionsRequestBody';


export class BatchUpdateApplicationPermissionsRequest {
    public body?: BatchUpdateApplicationPermissionsRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchUpdateApplicationPermissionsRequestBody): BatchUpdateApplicationPermissionsRequest {
        this['body'] = body;
        return this;
    }
}