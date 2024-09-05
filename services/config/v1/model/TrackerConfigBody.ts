import { ChannelConfigBody } from './ChannelConfigBody';
import { FrozenStatus } from './FrozenStatus';
import { SelectorConfigBody } from './SelectorConfigBody';


export class TrackerConfigBody {
    public channel?: ChannelConfigBody;
    public selector?: SelectorConfigBody;
    private 'retention_period_in_days'?: number;
    private 'agency_name'?: string;
    private 'domain_id'?: string;
    private 'frozen_status'?: FrozenStatus;
    public constructor(channel?: ChannelConfigBody, selector?: SelectorConfigBody, agencyName?: string) { 
        this['channel'] = channel;
        this['selector'] = selector;
        this['agency_name'] = agencyName;
    }
    public withChannel(channel: ChannelConfigBody): TrackerConfigBody {
        this['channel'] = channel;
        return this;
    }
    public withSelector(selector: SelectorConfigBody): TrackerConfigBody {
        this['selector'] = selector;
        return this;
    }
    public withRetentionPeriodInDays(retentionPeriodInDays: number): TrackerConfigBody {
        this['retention_period_in_days'] = retentionPeriodInDays;
        return this;
    }
    public set retentionPeriodInDays(retentionPeriodInDays: number  | undefined) {
        this['retention_period_in_days'] = retentionPeriodInDays;
    }
    public get retentionPeriodInDays(): number | undefined {
        return this['retention_period_in_days'];
    }
    public withAgencyName(agencyName: string): TrackerConfigBody {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
    public withDomainId(domainId: string): TrackerConfigBody {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withFrozenStatus(frozenStatus: FrozenStatus): TrackerConfigBody {
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