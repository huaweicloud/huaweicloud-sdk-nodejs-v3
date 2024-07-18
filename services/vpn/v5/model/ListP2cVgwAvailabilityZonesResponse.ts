
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListP2cVgwAvailabilityZonesResponse extends SdkResponse {
    private 'availability_zones'?: Array<string>;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withAvailabilityZones(availabilityZones: Array<string>): ListP2cVgwAvailabilityZonesResponse {
        this['availability_zones'] = availabilityZones;
        return this;
    }
    public set availabilityZones(availabilityZones: Array<string>  | undefined) {
        this['availability_zones'] = availabilityZones;
    }
    public get availabilityZones(): Array<string> | undefined {
        return this['availability_zones'];
    }
    public withRequestId(requestId: string): ListP2cVgwAvailabilityZonesResponse {
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