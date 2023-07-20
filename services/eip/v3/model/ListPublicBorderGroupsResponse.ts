import { CommonPoolsWithBorderGroupDict } from './CommonPoolsWithBorderGroupDict';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPublicBorderGroupsResponse extends SdkResponse {
    private 'public_border_groups'?: Array<CommonPoolsWithBorderGroupDict>;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withPublicBorderGroups(publicBorderGroups: Array<CommonPoolsWithBorderGroupDict>): ListPublicBorderGroupsResponse {
        this['public_border_groups'] = publicBorderGroups;
        return this;
    }
    public set publicBorderGroups(publicBorderGroups: Array<CommonPoolsWithBorderGroupDict>  | undefined) {
        this['public_border_groups'] = publicBorderGroups;
    }
    public get publicBorderGroups(): Array<CommonPoolsWithBorderGroupDict> | undefined {
        return this['public_border_groups'];
    }
    public withRequestId(requestId: string): ListPublicBorderGroupsResponse {
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