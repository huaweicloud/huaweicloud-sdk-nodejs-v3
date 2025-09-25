import { Setting } from './Setting';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGetConfDetailResponse extends SdkResponse {
    public name?: string;
    public status?: string;
    public confContent?: string;
    public setting?: Setting;
    public updateAt?: string;
    public constructor() { 
        super();
    }
    public withName(name: string): ShowGetConfDetailResponse {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ShowGetConfDetailResponse {
        this['status'] = status;
        return this;
    }
    public withConfContent(confContent: string): ShowGetConfDetailResponse {
        this['confContent'] = confContent;
        return this;
    }
    public withSetting(setting: Setting): ShowGetConfDetailResponse {
        this['setting'] = setting;
        return this;
    }
    public withUpdateAt(updateAt: string): ShowGetConfDetailResponse {
        this['updateAt'] = updateAt;
        return this;
    }
}