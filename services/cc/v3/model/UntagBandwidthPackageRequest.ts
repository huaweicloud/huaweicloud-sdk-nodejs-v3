import { UntagBandwidthPackageRequestBody } from './UntagBandwidthPackageRequestBody';


export class UntagBandwidthPackageRequest {
    public id?: string;
    public body?: UntagBandwidthPackageRequestBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UntagBandwidthPackageRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: UntagBandwidthPackageRequestBody): UntagBandwidthPackageRequest {
        this['body'] = body;
        return this;
    }
}