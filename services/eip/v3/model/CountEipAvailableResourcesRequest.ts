import { EipResourcesAvailableV3RequestBody } from './EipResourcesAvailableV3RequestBody';


export class CountEipAvailableResourcesRequest {
    public body?: EipResourcesAvailableV3RequestBody;
    public constructor() { 
    }
    public withBody(body: EipResourcesAvailableV3RequestBody): CountEipAvailableResourcesRequest {
        this['body'] = body;
        return this;
    }
}