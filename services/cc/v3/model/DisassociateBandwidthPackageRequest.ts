import { DisassociateBandwidthPackageRequestBody } from './DisassociateBandwidthPackageRequestBody';


export class DisassociateBandwidthPackageRequest {
    public id?: string;
    public body?: DisassociateBandwidthPackageRequestBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DisassociateBandwidthPackageRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: DisassociateBandwidthPackageRequestBody): DisassociateBandwidthPackageRequest {
        this['body'] = body;
        return this;
    }
}