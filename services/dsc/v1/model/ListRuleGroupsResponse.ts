import { ResponseGroup } from './ResponseGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRuleGroupsResponse extends SdkResponse {
    public total?: number;
    public groups?: Array<ResponseGroup>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListRuleGroupsResponse {
        this['total'] = total;
        return this;
    }
    public withGroups(groups: Array<ResponseGroup>): ListRuleGroupsResponse {
        this['groups'] = groups;
        return this;
    }
}