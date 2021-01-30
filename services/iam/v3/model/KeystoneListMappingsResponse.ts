import { Links } from './Links';
import { MappingResult } from './MappingResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneListMappingsResponse extends SdkResponse {
    public links?: Links;
    public mappings?: Array<MappingResult>;
    public constructor() { 
        super();
    }
    public withLinks(links: Links): KeystoneListMappingsResponse {
        this['links'] = links;
        return this;
    }
    public withMappings(mappings: Array<MappingResult>): KeystoneListMappingsResponse {
        this['mappings'] = mappings;
        return this;
    }
}