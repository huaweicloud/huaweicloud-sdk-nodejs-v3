import { ExtendedAvailabilityZone } from './ExtendedAvailabilityZone';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListExtendedAvailabilityZonesResponse extends SdkResponse {
    private 'availability_zones'?: Array<ExtendedAvailabilityZone>;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withAvailabilityZones(availabilityZones: Array<ExtendedAvailabilityZone>): ListExtendedAvailabilityZonesResponse {
        this['availability_zones'] = availabilityZones;
        return this;
    }
    public set availabilityZones(availabilityZones: Array<ExtendedAvailabilityZone>  | undefined) {
        this['availability_zones'] = availabilityZones;
    }
    public get availabilityZones(): Array<ExtendedAvailabilityZone> | undefined {
        return this['availability_zones'];
    }
    public withRequestId(requestId: string): ListExtendedAvailabilityZonesResponse {
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