import { MaintainWindowsEntity } from './MaintainWindowsEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMaintainWindowsResponse extends SdkResponse {
    private 'maintain_windows'?: Array<MaintainWindowsEntity>;
    public constructor() { 
        super();
    }
    public withMaintainWindows(maintainWindows: Array<MaintainWindowsEntity>): ShowMaintainWindowsResponse {
        this['maintain_windows'] = maintainWindows;
        return this;
    }
    public set maintainWindows(maintainWindows: Array<MaintainWindowsEntity>  | undefined) {
        this['maintain_windows'] = maintainWindows;
    }
    public get maintainWindows(): Array<MaintainWindowsEntity> | undefined {
        return this['maintain_windows'];
    }
}