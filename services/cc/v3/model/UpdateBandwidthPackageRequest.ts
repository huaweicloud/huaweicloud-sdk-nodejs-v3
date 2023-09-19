import { UpdateBandwidthPackageRequestBody } from './UpdateBandwidthPackageRequestBody';


export class UpdateBandwidthPackageRequest {
    public id?: string;
    public body?: UpdateBandwidthPackageRequestBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateBandwidthPackageRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: UpdateBandwidthPackageRequestBody): UpdateBandwidthPackageRequest {
        this['body'] = body;
        return this;
    }
}