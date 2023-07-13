import { MemberResp } from './MemberResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMemberResponse extends SdkResponse {
    public member?: MemberResp;
    public constructor() { 
        super();
    }
    public withMember(member: MemberResp): ShowMemberResponse {
        this['member'] = member;
        return this;
    }
}