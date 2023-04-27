import { ProtectableReplicationCapabilitiesRespRegion } from './ProtectableReplicationCapabilitiesRespRegion';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowReplicationCapabilitiesResponse extends SdkResponse {
    public regions?: Array<ProtectableReplicationCapabilitiesRespRegion>;
    public constructor() { 
        super();
    }
    public withRegions(regions: Array<ProtectableReplicationCapabilitiesRespRegion>): ShowReplicationCapabilitiesResponse {
        this['regions'] = regions;
        return this;
    }
}