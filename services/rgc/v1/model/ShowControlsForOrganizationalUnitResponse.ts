import { EnabledControl } from './EnabledControl';
import { RegionConfigurationList } from './RegionConfigurationList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowControlsForOrganizationalUnitResponse extends SdkResponse {
    public control?: EnabledControl;
    public regions?: Array<RegionConfigurationList>;
    public state?: string;
    public message?: string;
    public version?: string;
    public constructor() { 
        super();
    }
    public withControl(control: EnabledControl): ShowControlsForOrganizationalUnitResponse {
        this['control'] = control;
        return this;
    }
    public withRegions(regions: Array<RegionConfigurationList>): ShowControlsForOrganizationalUnitResponse {
        this['regions'] = regions;
        return this;
    }
    public withState(state: string): ShowControlsForOrganizationalUnitResponse {
        this['state'] = state;
        return this;
    }
    public withMessage(message: string): ShowControlsForOrganizationalUnitResponse {
        this['message'] = message;
        return this;
    }
    public withVersion(version: string): ShowControlsForOrganizationalUnitResponse {
        this['version'] = version;
        return this;
    }
}