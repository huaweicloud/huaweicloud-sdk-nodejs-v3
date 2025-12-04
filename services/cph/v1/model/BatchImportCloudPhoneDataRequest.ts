import { BatchImportCloudPhoneDataRequestBody } from './BatchImportCloudPhoneDataRequestBody';


export class BatchImportCloudPhoneDataRequest {
    public body?: BatchImportCloudPhoneDataRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchImportCloudPhoneDataRequestBody): BatchImportCloudPhoneDataRequest {
        this['body'] = body;
        return this;
    }
}