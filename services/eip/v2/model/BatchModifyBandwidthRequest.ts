import { ModifyBandwidthRequestBody } from './ModifyBandwidthRequestBody';


export class BatchModifyBandwidthRequest {
    public body?: ModifyBandwidthRequestBody;
    public constructor() { 
    }
    public withBody(body: ModifyBandwidthRequestBody): BatchModifyBandwidthRequest {
        this['body'] = body;
        return this;
    }
}