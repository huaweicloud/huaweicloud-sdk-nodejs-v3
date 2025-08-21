import { SubgroupAndProjectBaseDto } from './SubgroupAndProjectBaseDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectSubgroupsAndRepositoriesResponse extends SdkResponse {
    public body?: Array<SubgroupAndProjectBaseDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<SubgroupAndProjectBaseDto>): ListProjectSubgroupsAndRepositoriesResponse {
        this['body'] = body;
        return this;
    }
}