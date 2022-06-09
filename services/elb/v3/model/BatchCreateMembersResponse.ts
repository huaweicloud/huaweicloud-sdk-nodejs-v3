import { BatchMember } from './BatchMember';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateMembersResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    public members?: Array<BatchMember>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): BatchCreateMembersResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withMembers(members: Array<BatchMember>): BatchCreateMembersResponse {
        this['members'] = members;
        return this;
    }
}