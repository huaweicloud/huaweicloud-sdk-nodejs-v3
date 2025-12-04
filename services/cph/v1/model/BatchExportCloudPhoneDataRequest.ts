import { BatchExportCloudPhoneDataRequestBody } from './BatchExportCloudPhoneDataRequestBody';


export class BatchExportCloudPhoneDataRequest {
    public body?: BatchExportCloudPhoneDataRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchExportCloudPhoneDataRequestBody): BatchExportCloudPhoneDataRequest {
        this['body'] = body;
        return this;
    }
}