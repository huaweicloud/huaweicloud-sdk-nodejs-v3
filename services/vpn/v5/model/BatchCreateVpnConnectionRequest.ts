import { BatchCreateVpnConnectionRequestBody } from './BatchCreateVpnConnectionRequestBody';


export class BatchCreateVpnConnectionRequest {
    public body?: BatchCreateVpnConnectionRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchCreateVpnConnectionRequestBody): BatchCreateVpnConnectionRequest {
        this['body'] = body;
        return this;
    }
}