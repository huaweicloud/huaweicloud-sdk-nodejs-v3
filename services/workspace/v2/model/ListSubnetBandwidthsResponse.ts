import { SubnetBandwidthDetail } from './SubnetBandwidthDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSubnetBandwidthsResponse extends SdkResponse {
    public bandwidths?: Array<SubnetBandwidthDetail>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withBandwidths(bandwidths: Array<SubnetBandwidthDetail>): ListSubnetBandwidthsResponse {
        this['bandwidths'] = bandwidths;
        return this;
    }
    public withTotalCount(totalCount: number): ListSubnetBandwidthsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}