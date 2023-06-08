import { CreateLineGroupsResp } from './CreateLineGroupsResp';
import { Metadata } from './Metadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLineGroupsResponse extends SdkResponse {
    public linegroups?: Array<CreateLineGroupsResp>;
    public metadata?: Metadata;
    public constructor() { 
        super();
    }
    public withLinegroups(linegroups: Array<CreateLineGroupsResp>): ListLineGroupsResponse {
        this['linegroups'] = linegroups;
        return this;
    }
    public withMetadata(metadata: Metadata): ListLineGroupsResponse {
        this['metadata'] = metadata;
        return this;
    }
}