import { DesktopImageInfo } from './DesktopImageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckDesktopImagesResponse extends SdkResponse {
    private 'image_infos'?: Array<DesktopImageInfo>;
    public constructor() { 
        super();
    }
    public withImageInfos(imageInfos: Array<DesktopImageInfo>): CheckDesktopImagesResponse {
        this['image_infos'] = imageInfos;
        return this;
    }
    public set imageInfos(imageInfos: Array<DesktopImageInfo>  | undefined) {
        this['image_infos'] = imageInfos;
    }
    public get imageInfos(): Array<DesktopImageInfo> | undefined {
        return this['image_infos'];
    }
}