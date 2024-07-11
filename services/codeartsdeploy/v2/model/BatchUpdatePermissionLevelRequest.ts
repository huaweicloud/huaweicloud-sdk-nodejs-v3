import { BatchUpdatePermissionLevelRequestBody } from './BatchUpdatePermissionLevelRequestBody';


export class BatchUpdatePermissionLevelRequest {
    public body?: BatchUpdatePermissionLevelRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchUpdatePermissionLevelRequestBody): BatchUpdatePermissionLevelRequest {
        this['body'] = body;
        return this;
    }
}