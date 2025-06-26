import { EnabledControl } from './EnabledControl';
import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEnabledControlsResponse extends SdkResponse {
    private 'enabled_controls'?: Array<EnabledControl>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withEnabledControls(enabledControls: Array<EnabledControl>): ListEnabledControlsResponse {
        this['enabled_controls'] = enabledControls;
        return this;
    }
    public set enabledControls(enabledControls: Array<EnabledControl>  | undefined) {
        this['enabled_controls'] = enabledControls;
    }
    public get enabledControls(): Array<EnabledControl> | undefined {
        return this['enabled_controls'];
    }
    public withPageInfo(pageInfo: PageInfoDto): ListEnabledControlsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDto  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDto | undefined {
        return this['page_info'];
    }
}