import { CommonPoolsWithBorderGroupDict } from './CommonPoolsWithBorderGroupDict';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPublicBorderGroupsResponse extends SdkResponse {
    private 'public_border_groups'?: Array<CommonPoolsWithBorderGroupDict> | undefined;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withPublicBorderGroups(publicBorderGroups: Array<CommonPoolsWithBorderGroupDict>): ListPublicBorderGroupsResponse {
        this['public_border_groups'] = publicBorderGroups;
        return this;
    }
    public set publicBorderGroups(publicBorderGroups: Array<CommonPoolsWithBorderGroupDict> | undefined) {
        this['public_border_groups'] = publicBorderGroups;
    }
    public get publicBorderGroups() {
        return this['public_border_groups'];
    }
    public withRequestId(requestId: string): ListPublicBorderGroupsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
}