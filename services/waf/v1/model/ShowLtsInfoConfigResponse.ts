import { LtsIdInfo } from './LtsIdInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLtsInfoConfigResponse extends SdkResponse {
    public id?: string;
    public enabale?: boolean;
    public ltsIdInfo?: LtsIdInfo;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowLtsInfoConfigResponse {
        this['id'] = id;
        return this;
    }
    public withEnabale(enabale: boolean): ShowLtsInfoConfigResponse {
        this['enabale'] = enabale;
        return this;
    }
    public withLtsIdInfo(ltsIdInfo: LtsIdInfo): ShowLtsInfoConfigResponse {
        this['ltsIdInfo'] = ltsIdInfo;
        return this;
    }
}