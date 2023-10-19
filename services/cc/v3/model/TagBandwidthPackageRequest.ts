import { TagBandwidthPackageRequestBody } from './TagBandwidthPackageRequestBody';


export class TagBandwidthPackageRequest {
    public id?: string;
    public body?: TagBandwidthPackageRequestBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): TagBandwidthPackageRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: TagBandwidthPackageRequestBody): TagBandwidthPackageRequest {
        this['body'] = body;
        return this;
    }
}