import { EnabledControl } from './EnabledControl';
import { RegionConfigurationList } from './RegionConfigurationList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowControlsForAccountResponse extends SdkResponse {
    public control?: EnabledControl;
    public regions?: Array<RegionConfigurationList>;
    public state?: string;
    public message?: string;
    public version?: string;
    public constructor() { 
        super();
    }
    public withControl(control: EnabledControl): ShowControlsForAccountResponse {
        this['control'] = control;
        return this;
    }
    public withRegions(regions: Array<RegionConfigurationList>): ShowControlsForAccountResponse {
        this['regions'] = regions;
        return this;
    }
    public withState(state: string): ShowControlsForAccountResponse {
        this['state'] = state;
        return this;
    }
    public withMessage(message: string): ShowControlsForAccountResponse {
        this['message'] = message;
        return this;
    }
    public withVersion(version: string): ShowControlsForAccountResponse {
        this['version'] = version;
        return this;
    }
}