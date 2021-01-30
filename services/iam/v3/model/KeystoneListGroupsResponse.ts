import { KeystoneGroupResult } from './KeystoneGroupResult';
import { Links } from './Links';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneListGroupsResponse extends SdkResponse {
    public groups?: Array<KeystoneGroupResult>;
    public links?: Links;
    public constructor() { 
        super();
    }
    public withGroups(groups: Array<KeystoneGroupResult>): KeystoneListGroupsResponse {
        this['groups'] = groups;
        return this;
    }
    public withLinks(links: Links): KeystoneListGroupsResponse {
        this['links'] = links;
        return this;
    }
}