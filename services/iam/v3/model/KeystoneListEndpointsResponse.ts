import { Endpoint } from './Endpoint';
import { Links } from './Links';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneListEndpointsResponse extends SdkResponse {
    public links?: Links;
    public endpoints?: Array<Endpoint>;
    public constructor() { 
        super();
    }
    public withLinks(links: Links): KeystoneListEndpointsResponse {
        this['links'] = links;
        return this;
    }
    public withEndpoints(endpoints: Array<Endpoint>): KeystoneListEndpointsResponse {
        this['endpoints'] = endpoints;
        return this;
    }
}