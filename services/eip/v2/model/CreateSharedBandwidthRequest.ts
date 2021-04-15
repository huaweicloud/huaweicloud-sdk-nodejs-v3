import { CreateSharedBandwidhRequestBody } from './CreateSharedBandwidhRequestBody';


export class CreateSharedBandwidthRequest {
    public body?: CreateSharedBandwidhRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateSharedBandwidhRequestBody): CreateSharedBandwidthRequest {
        this['body'] = body;
        return this;
    }
}