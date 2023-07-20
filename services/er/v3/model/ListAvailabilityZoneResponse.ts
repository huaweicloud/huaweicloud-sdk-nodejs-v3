import { AvailableZone } from './AvailableZone';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAvailabilityZoneResponse extends SdkResponse {
    private 'availability_zones'?: Array<AvailableZone>;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withAvailabilityZones(availabilityZones: Array<AvailableZone>): ListAvailabilityZoneResponse {
        this['availability_zones'] = availabilityZones;
        return this;
    }
    public set availabilityZones(availabilityZones: Array<AvailableZone>  | undefined) {
        this['availability_zones'] = availabilityZones;
    }
    public get availabilityZones(): Array<AvailableZone> | undefined {
        return this['availability_zones'];
    }
    public withRequestId(requestId: string): ListAvailabilityZoneResponse {
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