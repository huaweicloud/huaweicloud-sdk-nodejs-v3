import { LtsIdInfo } from './LtsIdInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLtsInfoConfigResponse extends SdkResponse {
    public id?: string;
    public enabled?: boolean;
    public ltsIdInfo?: LtsIdInfo;
    public enabale?: boolean;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowLtsInfoConfigResponse {
        this['id'] = id;
        return this;
    }
    public withEnabled(enabled: boolean): ShowLtsInfoConfigResponse {
        this['enabled'] = enabled;
        return this;
    }
    public withLtsIdInfo(ltsIdInfo: LtsIdInfo): ShowLtsInfoConfigResponse {
        this['ltsIdInfo'] = ltsIdInfo;
        return this;
    }
    public withEnabale(enabale: boolean): ShowLtsInfoConfigResponse {
        this['enabale'] = enabale;
        return this;
    }
}