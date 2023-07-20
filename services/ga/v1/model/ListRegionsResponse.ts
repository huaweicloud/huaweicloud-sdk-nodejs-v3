import { AreaRegion } from './AreaRegion';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRegionsResponse extends SdkResponse {
    private 'area_regions'?: Array<AreaRegion>;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withAreaRegions(areaRegions: Array<AreaRegion>): ListRegionsResponse {
        this['area_regions'] = areaRegions;
        return this;
    }
    public set areaRegions(areaRegions: Array<AreaRegion>  | undefined) {
        this['area_regions'] = areaRegions;
    }
    public get areaRegions(): Array<AreaRegion> | undefined {
        return this['area_regions'];
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