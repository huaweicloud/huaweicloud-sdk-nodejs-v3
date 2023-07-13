import { MaintainWindowsEntity } from './MaintainWindowsEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMaintainWindowsResponse extends SdkResponse {
    private 'maintain_windows'?: Array<MaintainWindowsEntity> | undefined;
    public constructor() { 
        super();
    }
    public withMaintainWindows(maintainWindows: Array<MaintainWindowsEntity>): ShowMaintainWindowsResponse {
        this['maintain_windows'] = maintainWindows;
        return this;
    }
    public set maintainWindows(maintainWindows: Array<MaintainWindowsEntity> | undefined) {
        this['maintain_windows'] = maintainWindows;
    }
    public get maintainWindows() {
        return this['maintain_windows'];
    }
}