import { ObsAuthorityConfig } from './ObsAuthorityConfig';


export class UpdateObsBucketAuthorityRequest {
    public body?: ObsAuthorityConfig;
    public constructor() { 
    }
    public withBody(body: ObsAuthorityConfig): UpdateObsBucketAuthorityRequest {
        this['body'] = body;
        return this;
    }
}