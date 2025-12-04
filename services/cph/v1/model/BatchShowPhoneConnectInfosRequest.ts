import { ConnectionRequestBody } from './ConnectionRequestBody';


export class BatchShowPhoneConnectInfosRequest {
    public body?: ConnectionRequestBody;
    public constructor() { 
    }
    public withBody(body: ConnectionRequestBody): BatchShowPhoneConnectInfosRequest {
        this['body'] = body;
        return this;
    }
}