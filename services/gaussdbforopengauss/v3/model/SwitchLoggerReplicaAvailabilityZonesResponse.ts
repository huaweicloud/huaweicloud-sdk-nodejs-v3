import { AzInformationResult } from './AzInformationResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SwitchLoggerReplicaAvailabilityZonesResponse extends SdkResponse {
    private 'availability_zone_infos'?: Array<AzInformationResult>;
    public constructor() { 
        super();
    }
    public withAvailabilityZoneInfos(availabilityZoneInfos: Array<AzInformationResult>): SwitchLoggerReplicaAvailabilityZonesResponse {
        this['availability_zone_infos'] = availabilityZoneInfos;
        return this;
    }
    public set availabilityZoneInfos(availabilityZoneInfos: Array<AzInformationResult>  | undefined) {
        this['availability_zone_infos'] = availabilityZoneInfos;
    }
    public get availabilityZoneInfos(): Array<AzInformationResult> | undefined {
        return this['availability_zone_infos'];
    }
}