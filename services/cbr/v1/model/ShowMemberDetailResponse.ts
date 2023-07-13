import { Member } from './Member';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMemberDetailResponse extends SdkResponse {
    public member?: Member;
    public constructor() { 
        super();
    }
    public withMember(member: Member): ShowMemberDetailResponse {
        this['member'] = member;
        return this;
    }
}