import { GroupInfoSimple } from './GroupInfoSimple';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceConsumerGroupsResponse extends SdkResponse {
    public groups?: Array<GroupInfoSimple>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withGroups(groups: Array<GroupInfoSimple>): ListInstanceConsumerGroupsResponse {
        this['groups'] = groups;
        return this;
    }
    public withTotal(total: number): ListInstanceConsumerGroupsResponse {
        this['total'] = total;
        return this;
    }
}