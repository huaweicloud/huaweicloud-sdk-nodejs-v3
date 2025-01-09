import { DesktopDetailInfo } from './DesktopDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDesktopDetailResponse extends SdkResponse {
    public desktop?: DesktopDetailInfo;
    public constructor() { 
        super();
    }
    public withDesktop(desktop: DesktopDetailInfo): ShowDesktopDetailResponse {
        this['desktop'] = desktop;
        return this;
    }
}