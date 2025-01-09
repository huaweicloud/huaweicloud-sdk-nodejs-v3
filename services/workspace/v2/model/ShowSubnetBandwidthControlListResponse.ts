import { ControlItem } from './ControlItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSubnetBandwidthControlListResponse extends SdkResponse {
    private 'control_mode'?: string;
    private 'control_list'?: Array<ControlItem>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withControlMode(controlMode: string): ShowSubnetBandwidthControlListResponse {
        this['control_mode'] = controlMode;
        return this;
    }
    public set controlMode(controlMode: string  | undefined) {
        this['control_mode'] = controlMode;
    }
    public get controlMode(): string | undefined {
        return this['control_mode'];
    }
    public withControlList(controlList: Array<ControlItem>): ShowSubnetBandwidthControlListResponse {
        this['control_list'] = controlList;
        return this;
    }
    public set controlList(controlList: Array<ControlItem>  | undefined) {
        this['control_list'] = controlList;
    }
    public get controlList(): Array<ControlItem> | undefined {
        return this['control_list'];
    }
    public withTotalCount(totalCount: number): ShowSubnetBandwidthControlListResponse {
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