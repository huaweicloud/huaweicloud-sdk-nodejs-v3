import { KeystoneGroupResult } from './KeystoneGroupResult';
import { Links } from './Links';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneListGroupsResponse extends SdkResponse {
    public groups?: Array<KeystoneGroupResult>;
    public links?: Links;
    private 'total_number'?: number;
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
    public withTotalNumber(totalNumber: number): KeystoneListGroupsResponse {
        this['total_number'] = totalNumber;
        return this;
    }
    public set totalNumber(totalNumber: number  | undefined) {
        this['total_number'] = totalNumber;
    }
    public get totalNumber(): number | undefined {
        return this['total_number'];
    }
}