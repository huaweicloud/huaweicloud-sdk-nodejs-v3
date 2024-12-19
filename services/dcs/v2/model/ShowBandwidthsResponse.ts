import { GroupBandwidthInfo } from './GroupBandwidthInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBandwidthsResponse extends SdkResponse {
    public bandwidth?: number;
    private 'max_bandwidth'?: number;
    private 'allow_modify'?: boolean;
    private 'group_bandwidths'?: Array<GroupBandwidthInfo>;
    public constructor() { 
        super();
    }
    public withBandwidth(bandwidth: number): ShowBandwidthsResponse {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withMaxBandwidth(maxBandwidth: number): ShowBandwidthsResponse {
        this['max_bandwidth'] = maxBandwidth;
        return this;
    }
    public set maxBandwidth(maxBandwidth: number  | undefined) {
        this['max_bandwidth'] = maxBandwidth;
    }
    public get maxBandwidth(): number | undefined {
        return this['max_bandwidth'];
    }
    public withAllowModify(allowModify: boolean): ShowBandwidthsResponse {
        this['allow_modify'] = allowModify;
        return this;
    }
    public set allowModify(allowModify: boolean  | undefined) {
        this['allow_modify'] = allowModify;
    }
    public get allowModify(): boolean | undefined {
        return this['allow_modify'];
    }
    public withGroupBandwidths(groupBandwidths: Array<GroupBandwidthInfo>): ShowBandwidthsResponse {
        this['group_bandwidths'] = groupBandwidths;
        return this;
    }
    public set groupBandwidths(groupBandwidths: Array<GroupBandwidthInfo>  | undefined) {
        this['group_bandwidths'] = groupBandwidths;
    }
    public get groupBandwidths(): Array<GroupBandwidthInfo> | undefined {
        return this['group_bandwidths'];
    }
}