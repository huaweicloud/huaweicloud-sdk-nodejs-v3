import { CdmClusterAvailabilityZone } from './CdmClusterAvailabilityZone';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAvailabilityZonesResponse extends SdkResponse {
    public regionId?: string;
    public defaultAZ?: string;
    public availableZones?: Array<CdmClusterAvailabilityZone>;
    public constructor() { 
        super();
    }
    public withRegionId(regionId: string): ShowAvailabilityZonesResponse {
        this['regionId'] = regionId;
        return this;
    }
    public withDefaultAZ(defaultAZ: string): ShowAvailabilityZonesResponse {
        this['defaultAZ'] = defaultAZ;
        return this;
    }
    public withAvailableZones(availableZones: Array<CdmClusterAvailabilityZone>): ShowAvailabilityZonesResponse {
        this['availableZones'] = availableZones;
        return this;
    }
}