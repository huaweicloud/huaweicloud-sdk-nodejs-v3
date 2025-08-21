import { SubgroupAndProjectBaseDto } from './SubgroupAndProjectBaseDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGroupSubgroupsAndRepositoriesResponse extends SdkResponse {
    public body?: Array<SubgroupAndProjectBaseDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<SubgroupAndProjectBaseDto>): ListGroupSubgroupsAndRepositoriesResponse {
        this['body'] = body;
        return this;
    }
}