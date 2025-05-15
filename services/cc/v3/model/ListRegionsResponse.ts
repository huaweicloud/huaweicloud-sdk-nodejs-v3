import { Region } from './Region';
import { RequestId } from './RequestId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRegionsResponse extends SdkResponse {
    private 'request_id'?: string;
    public regions?: Array<Region>;
    public constructor(requestId?: string, regions?: Array<Region>) { 
        super();
        this['request_id'] = requestId;
        this['regions'] = regions;
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
    public withRegions(regions: Array<Region>): ListRegionsResponse {
        this['regions'] = regions;
        return this;
    }
}