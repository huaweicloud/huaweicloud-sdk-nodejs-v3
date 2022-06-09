import { Member } from './Member';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateMemberResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    public member?: Member;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CreateMemberResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withMember(member: Member): CreateMemberResponse {
        this['member'] = member;
        return this;
    }
}