import { MemberCheckJobInfo } from './MemberCheckJobInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMemberHealthCheckJobResponse extends SdkResponse {
    private 'member_check'?: MemberCheckJobInfo;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withMemberCheck(memberCheck: MemberCheckJobInfo): ShowMemberHealthCheckJobResponse {
        this['member_check'] = memberCheck;
        return this;
    }
    public set memberCheck(memberCheck: MemberCheckJobInfo  | undefined) {
        this['member_check'] = memberCheck;
    }
    public get memberCheck(): MemberCheckJobInfo | undefined {
        return this['member_check'];
    }
    public withRequestId(requestId: string): ShowMemberHealthCheckJobResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}