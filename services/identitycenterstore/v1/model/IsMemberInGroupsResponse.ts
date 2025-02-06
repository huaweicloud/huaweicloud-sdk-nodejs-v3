import { GroupMembershipExistenceResultDto } from './GroupMembershipExistenceResultDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class IsMemberInGroupsResponse extends SdkResponse {
    public results?: Array<GroupMembershipExistenceResultDto>;
    public constructor() { 
        super();
    }
    public withResults(results: Array<GroupMembershipExistenceResultDto>): IsMemberInGroupsResponse {
        this['results'] = results;
        return this;
    }
}