import { MemberResp } from './MemberResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMembersResponse extends SdkResponse {
    public members?: Array<MemberResp>;
    public constructor() { 
        super();
    }
    public withMembers(members: Array<MemberResp>): ListMembersResponse {
        this['members'] = members;
        return this;
    }
}