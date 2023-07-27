import { Region } from './Region';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRegionsResponse extends SdkResponse {
    public regions?: Array<Region>;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withRegions(regions: Array<Region>): ListRegionsResponse {
        this['regions'] = regions;
        return this;
    }
    public withRequestId(requestId: string): ListRegionsResponse {
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