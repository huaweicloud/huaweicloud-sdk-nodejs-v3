import { Links } from './Links';
import { Service } from './Service';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneListServicesResponse extends SdkResponse {
    public services?: Array<Service>;
    public links?: Links;
    public constructor() { 
        super();
    }
    public withServices(services: Array<Service>): KeystoneListServicesResponse {
        this['services'] = services;
        return this;
    }
    public withLinks(links: Links): KeystoneListServicesResponse {
        this['links'] = links;
        return this;
    }
}