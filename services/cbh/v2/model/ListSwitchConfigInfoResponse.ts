import { SwitchInfo } from './SwitchInfo';
import { VersionInfo } from './VersionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSwitchConfigInfoResponse extends SdkResponse {
    private 'switch_info'?: SwitchInfo;
    private 'version_info'?: VersionInfo;
    public constructor() { 
        super();
    }
    public withSwitchInfo(switchInfo: SwitchInfo): ListSwitchConfigInfoResponse {
        this['switch_info'] = switchInfo;
        return this;
    }
    public set switchInfo(switchInfo: SwitchInfo  | undefined) {
        this['switch_info'] = switchInfo;
    }
    public get switchInfo(): SwitchInfo | undefined {
        return this['switch_info'];
    }
    public withVersionInfo(versionInfo: VersionInfo): ListSwitchConfigInfoResponse {
        this['version_info'] = versionInfo;
        return this;
    }
    public set versionInfo(versionInfo: VersionInfo  | undefined) {
        this['version_info'] = versionInfo;
    }
    public get versionInfo(): VersionInfo | undefined {
        return this['version_info'];
    }
}