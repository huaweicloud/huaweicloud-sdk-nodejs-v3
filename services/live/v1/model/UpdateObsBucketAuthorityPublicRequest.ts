import { ObsAuthorityConfigV2 } from './ObsAuthorityConfigV2';


export class UpdateObsBucketAuthorityPublicRequest {
    public body?: ObsAuthorityConfigV2;
    public constructor() { 
    }
    public withBody(body: ObsAuthorityConfigV2): UpdateObsBucketAuthorityPublicRequest {
        this['body'] = body;
        return this;
    }
}