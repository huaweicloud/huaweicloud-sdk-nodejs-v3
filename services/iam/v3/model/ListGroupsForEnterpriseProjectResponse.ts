import { ListGroupsForEnterpriseProjectResDetail } from './ListGroupsForEnterpriseProjectResDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGroupsForEnterpriseProjectResponse extends SdkResponse {
    public groups?: Array<ListGroupsForEnterpriseProjectResDetail>;
    public constructor() { 
        super();
    }
    public withGroups(groups: Array<ListGroupsForEnterpriseProjectResDetail>): ListGroupsForEnterpriseProjectResponse {
        this['groups'] = groups;
        return this;
    }
}