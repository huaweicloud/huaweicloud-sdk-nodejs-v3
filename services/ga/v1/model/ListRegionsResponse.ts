import { AreaRegion } from './AreaRegion';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRegionsResponse extends SdkResponse {
    private 'area_regions'?: Array<AreaRegion> | undefined;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withAreaRegions(areaRegions: Array<AreaRegion>): ListRegionsResponse {
        this['area_regions'] = areaRegions;
        return this;
    }
    public set areaRegions(areaRegions: Array<AreaRegion> | undefined) {
        this['area_regions'] = areaRegions;
    }
    public get areaRegions() {
        return this['area_regions'];
    }
    public withRequestId(requestId: string): ListRegionsResponse {
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