import { RtcUser } from './RtcUser';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRtcUserListResponse extends SdkResponse {
    public total?: number;
    public limit?: number;
    public offset?: number;
    public users?: Array<RtcUser>;
    private 'X-request-id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListRtcUserListResponse {
        this['total'] = total;
        return this;
    }
    public withLimit(limit: number): ListRtcUserListResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListRtcUserListResponse {
        this['offset'] = offset;
        return this;
    }
    public withUsers(users: Array<RtcUser>): ListRtcUserListResponse {
        this['users'] = users;
        return this;
    }
    public withXRequestId(xRequestId: string): ListRtcUserListResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-request-id'];
    }
}