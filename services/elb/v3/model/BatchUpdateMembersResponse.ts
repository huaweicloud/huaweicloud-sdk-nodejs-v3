import { BatchUpdateMember } from './BatchUpdateMember';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpdateMembersResponse extends SdkResponse {
    private 'request_id'?: string;
    public members?: Array<BatchUpdateMember>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): BatchUpdateMembersResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withMembers(members: Array<BatchUpdateMember>): BatchUpdateMembersResponse {
        this['members'] = members;
        return this;
    }
}