import { ChannelConfigBody } from './ChannelConfigBody';
import { SelectorConfigBody } from './SelectorConfigBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTrackerConfigResponse extends SdkResponse {
    public channel?: ChannelConfigBody;
    public selector?: SelectorConfigBody;
    private 'retention_period_in_days'?: number;
    private 'agency_name'?: string;
    public constructor() { 
        super();
    }
    public withChannel(channel: ChannelConfigBody): ShowTrackerConfigResponse {
        this['channel'] = channel;
        return this;
    }
    public withSelector(selector: SelectorConfigBody): ShowTrackerConfigResponse {
        this['selector'] = selector;
        return this;
    }
    public withRetentionPeriodInDays(retentionPeriodInDays: number): ShowTrackerConfigResponse {
        this['retention_period_in_days'] = retentionPeriodInDays;
        return this;
    }
    public set retentionPeriodInDays(retentionPeriodInDays: number  | undefined) {
        this['retention_period_in_days'] = retentionPeriodInDays;
    }
    public get retentionPeriodInDays(): number | undefined {
        return this['retention_period_in_days'];
    }
    public withAgencyName(agencyName: string): ShowTrackerConfigResponse {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
}