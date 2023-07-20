import { BatchDeleteMembersState } from './BatchDeleteMembersState';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteMembersResponse extends SdkResponse {
    private 'request_id'?: string;
    public members?: Array<BatchDeleteMembersState>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): BatchDeleteMembersResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withMembers(members: Array<BatchDeleteMembersState>): BatchDeleteMembersResponse {
        this['members'] = members;
        return this;
    }
}