import { ListServerAzInfo } from './ListServerAzInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServerAzInfoResponse extends SdkResponse {
    private 'availability_zones'?: Array<ListServerAzInfo>;
    public constructor() { 
        super();
    }
    public withAvailabilityZones(availabilityZones: Array<ListServerAzInfo>): ListServerAzInfoResponse {
        this['availability_zones'] = availabilityZones;
        return this;
    }
    public set availabilityZones(availabilityZones: Array<ListServerAzInfo>  | undefined) {
        this['availability_zones'] = availabilityZones;
    }
    public get availabilityZones(): Array<ListServerAzInfo> | undefined {
        return this['availability_zones'];
    }
}