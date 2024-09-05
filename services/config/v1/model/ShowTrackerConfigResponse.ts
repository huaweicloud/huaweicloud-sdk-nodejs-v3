import { ChannelConfigBody } from './ChannelConfigBody';
import { FrozenStatus } from './FrozenStatus';
import { SelectorConfigBody } from './SelectorConfigBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTrackerConfigResponse extends SdkResponse {
    public channel?: ChannelConfigBody;
    public selector?: SelectorConfigBody;
    private 'retention_period_in_days'?: number;
    private 'agency_name'?: string;
    private 'domain_id'?: string;
    private 'frozen_status'?: FrozenStatus;
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
    public withDomainId(domainId: string): ShowTrackerConfigResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withFrozenStatus(frozenStatus: FrozenStatus): ShowTrackerConfigResponse {
        this['frozen_status'] = frozenStatus;
        return this;
    }
    public set frozenStatus(frozenStatus: FrozenStatus  | undefined) {
        this['frozen_status'] = frozenStatus;
    }
    public get frozenStatus(): FrozenStatus | undefined {
        return this['frozen_status'];
    }
}