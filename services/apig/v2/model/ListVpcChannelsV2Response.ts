import { BasePage } from './BasePage';
import { VpcChannelInfo } from './VpcChannelInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVpcChannelsV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    private 'vpc_channels'?: Array<VpcChannelInfo>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListVpcChannelsV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListVpcChannelsV2Response {
        this['total'] = total;
        return this;
    }
    public withVpcChannels(vpcChannels: Array<VpcChannelInfo>): ListVpcChannelsV2Response {
        this['vpc_channels'] = vpcChannels;
        return this;
    }
    public set vpcChannels(vpcChannels: Array<VpcChannelInfo>  | undefined) {
        this['vpc_channels'] = vpcChannels;
    }
    public get vpcChannels(): Array<VpcChannelInfo> | undefined {
        return this['vpc_channels'];
    }
}