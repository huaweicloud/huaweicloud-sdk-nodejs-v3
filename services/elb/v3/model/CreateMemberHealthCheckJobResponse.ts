import { MemberCheckJob } from './MemberCheckJob';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateMemberHealthCheckJobResponse extends SdkResponse {
    private 'member_check'?: MemberCheckJob;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withMemberCheck(memberCheck: MemberCheckJob): CreateMemberHealthCheckJobResponse {
        this['member_check'] = memberCheck;
        return this;
    }
    public set memberCheck(memberCheck: MemberCheckJob  | undefined) {
        this['member_check'] = memberCheck;
    }
    public get memberCheck(): MemberCheckJob | undefined {
        return this['member_check'];
    }
    public withRequestId(requestId: string): CreateMemberHealthCheckJobResponse {
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