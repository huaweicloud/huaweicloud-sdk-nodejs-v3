import { CreateBandwidthPackageRequestBody } from './CreateBandwidthPackageRequestBody';


export class CreateBandwidthPackageRequest {
    public body?: CreateBandwidthPackageRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateBandwidthPackageRequestBody): CreateBandwidthPackageRequest {
        this['body'] = body;
        return this;
    }
}