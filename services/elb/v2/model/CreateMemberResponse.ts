import { MemberResp } from './MemberResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateMemberResponse extends SdkResponse {
    public member?: MemberResp;
    public constructor() { 
        super();
    }
    public withMember(member: MemberResp): CreateMemberResponse {
        this['member'] = member;
        return this;
    }
}