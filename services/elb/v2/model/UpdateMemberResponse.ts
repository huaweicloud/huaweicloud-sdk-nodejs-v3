import { MemberResp } from './MemberResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateMemberResponse extends SdkResponse {
    public member?: MemberResp;
    public constructor() { 
        super();
    }
    public withMember(member: MemberResp): UpdateMemberResponse {
        this['member'] = member;
        return this;
    }
}