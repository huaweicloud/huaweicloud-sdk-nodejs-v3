import { ChannelConfigBody } from './ChannelConfigBody';
import { SelectorConfigBody } from './SelectorConfigBody';


export class TrackerConfigBody {
    public channel: ChannelConfigBody;
    public selector: SelectorConfigBody;
    private 'agency_name': string | undefined;
    public constructor(channel?: any, selector?: any, agencyName?: any) { 
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
    public withAgencyName(agencyName: string): TrackerConfigBody {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName() {
        return this['agency_name'];
    }
}