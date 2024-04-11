
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchAutoEnlargePolicyResponse extends SdkResponse {
    private 'switch_option'?: boolean;
    private 'limit_volume_size'?: number;
    private 'min_volume_size'?: number;
    private 'max_volume_size'?: number;
    private 'trigger_available_percent'?: number;
    public percents?: Array<number>;
    public constructor() { 
        super();
    }
    public withSwitchOption(switchOption: boolean): SearchAutoEnlargePolicyResponse {
        this['switch_option'] = switchOption;
        return this;
    }
    public set switchOption(switchOption: boolean  | undefined) {
        this['switch_option'] = switchOption;
    }
    public get switchOption(): boolean | undefined {
        return this['switch_option'];
    }
    public withLimitVolumeSize(limitVolumeSize: number): SearchAutoEnlargePolicyResponse {
        this['limit_volume_size'] = limitVolumeSize;
        return this;
    }
    public set limitVolumeSize(limitVolumeSize: number  | undefined) {
        this['limit_volume_size'] = limitVolumeSize;
    }
    public get limitVolumeSize(): number | undefined {
        return this['limit_volume_size'];
    }
    public withMinVolumeSize(minVolumeSize: number): SearchAutoEnlargePolicyResponse {
        this['min_volume_size'] = minVolumeSize;
        return this;
    }
    public set minVolumeSize(minVolumeSize: number  | undefined) {
        this['min_volume_size'] = minVolumeSize;
    }
    public get minVolumeSize(): number | undefined {
        return this['min_volume_size'];
    }
    public withMaxVolumeSize(maxVolumeSize: number): SearchAutoEnlargePolicyResponse {
        this['max_volume_size'] = maxVolumeSize;
        return this;
    }
    public set maxVolumeSize(maxVolumeSize: number  | undefined) {
        this['max_volume_size'] = maxVolumeSize;
    }
    public get maxVolumeSize(): number | undefined {
        return this['max_volume_size'];
    }
    public withTriggerAvailablePercent(triggerAvailablePercent: number): SearchAutoEnlargePolicyResponse {
        this['trigger_available_percent'] = triggerAvailablePercent;
        return this;
    }
    public set triggerAvailablePercent(triggerAvailablePercent: number  | undefined) {
        this['trigger_available_percent'] = triggerAvailablePercent;
    }
    public get triggerAvailablePercent(): number | undefined {
        return this['trigger_available_percent'];
    }
    public withPercents(percents: Array<number>): SearchAutoEnlargePolicyResponse {
        this['percents'] = percents;
        return this;
    }
}