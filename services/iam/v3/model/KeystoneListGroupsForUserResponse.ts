import { KeystoneGroupResult } from './KeystoneGroupResult';
import { Links } from './Links';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneListGroupsForUserResponse extends SdkResponse {
    public groups?: Array<KeystoneGroupResult>;
    public links?: Links;
    public constructor() { 
        super();
    }
    public withGroups(groups: Array<KeystoneGroupResult>): KeystoneListGroupsForUserResponse {
        this['groups'] = groups;
        return this;
    }
    public withLinks(links: Links): KeystoneListGroupsForUserResponse {
        this['links'] = links;
        return this;
    }
}