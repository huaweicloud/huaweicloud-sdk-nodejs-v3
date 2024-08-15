import { AvailabilityZone } from './AvailabilityZone';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAvailabilityZonesResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'availability_zones'?: Array<Array<AvailabilityZone>>;
    private 'spec_code'?: string;
    public constructor() { 
        super();
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
    public withAvailabilityZones(availabilityZones: Array<Array<AvailabilityZone>>): ListAvailabilityZonesResponse {
        this['availability_zones'] = availabilityZones;
        return this;
    }
    public set availabilityZones(availabilityZones: Array<Array<AvailabilityZone>>  | undefined) {
        this['availability_zones'] = availabilityZones;
    }
    public get availabilityZones(): Array<Array<AvailabilityZone>> | undefined {
        return this['availability_zones'];
    }
    public withSpecCode(specCode: string): ListAvailabilityZonesResponse {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
}