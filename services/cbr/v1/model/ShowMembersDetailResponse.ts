import { Member } from './Member';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMembersDetailResponse extends SdkResponse {
    public members?: Array<Member>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withMembers(members: Array<Member>): ShowMembersDetailResponse {
        this['members'] = members;
        return this;
    }
    public withCount(count: number): ShowMembersDetailResponse {
        this['count'] = count;
        return this;
    }
}