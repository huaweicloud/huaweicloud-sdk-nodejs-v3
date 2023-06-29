import { ChannelConfigBody } from './ChannelConfigBody';
import { SelectorConfigBody } from './SelectorConfigBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTrackerConfigResponse extends SdkResponse {
    public channel?: ChannelConfigBody;
    public selector?: SelectorConfigBody;
    private 'agency_name'?: string | undefined;
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
    public withAgencyName(agencyName: string): ShowTrackerConfigResponse {
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