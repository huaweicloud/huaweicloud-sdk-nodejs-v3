import { BatchCreateSubNetworkInterfaceRequestBody } from './BatchCreateSubNetworkInterfaceRequestBody';


export class BatchCreateSubNetworkInterfaceRequest {
    public body?: BatchCreateSubNetworkInterfaceRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchCreateSubNetworkInterfaceRequestBody): BatchCreateSubNetworkInterfaceRequest {
        this['body'] = body;
        return this;
    }
}