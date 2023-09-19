import { AssociateBandwidthPackageRequestBody } from './AssociateBandwidthPackageRequestBody';


export class AssociateBandwidthPackageRequest {
    public id?: string;
    public body?: AssociateBandwidthPackageRequestBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): AssociateBandwidthPackageRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: AssociateBandwidthPackageRequestBody): AssociateBandwidthPackageRequest {
        this['body'] = body;
        return this;
    }
}