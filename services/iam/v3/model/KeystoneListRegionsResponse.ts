import { Links } from './Links';
import { Region } from './Region';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneListRegionsResponse extends SdkResponse {
    public links?: Links;
    public regions?: Array<Region>;
    public constructor() { 
        super();
    }
    public withLinks(links: Links): KeystoneListRegionsResponse {
        this['links'] = links;
        return this;
    }
    public withRegions(regions: Array<Region>): KeystoneListRegionsResponse {
        this['regions'] = regions;
        return this;
    }
}