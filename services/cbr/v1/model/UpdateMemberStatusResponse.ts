import { Member } from './Member';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateMemberStatusResponse extends SdkResponse {
    public member?: Member;
    public constructor() { 
        super();
    }
    public withMember(member: Member): UpdateMemberStatusResponse {
        this['member'] = member;
        return this;
    }
}