import { Member } from './Member';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMemberResponse extends SdkResponse {
    private 'request_id'?: string;
    public member?: Member;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowMemberResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withMember(member: Member): ShowMemberResponse {
        this['member'] = member;
        return this;
    }
}