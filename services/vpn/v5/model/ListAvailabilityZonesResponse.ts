import { AvailabilityZones } from './AvailabilityZones';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAvailabilityZonesResponse extends SdkResponse {
    private 'availability_zones'?: AvailabilityZones;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withAvailabilityZones(availabilityZones: AvailabilityZones): ListAvailabilityZonesResponse {
        this['availability_zones'] = availabilityZones;
        return this;
    }
    public set availabilityZones(availabilityZones: AvailabilityZones  | undefined) {
        this['availability_zones'] = availabilityZones;
    }
    public get availabilityZones(): AvailabilityZones | undefined {
        return this['availability_zones'];
    }
    public withRequestId(requestId: string): ListAvailabilityZonesResponse {
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