import { LtsIdInfo } from './LtsIdInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateLtsInfoConfigResponse extends SdkResponse {
    public id?: string;
    public enabled?: boolean;
    public ltsIdInfo?: LtsIdInfo;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateLtsInfoConfigResponse {
        this['id'] = id;
        return this;
    }
    public withEnabled(enabled: boolean): UpdateLtsInfoConfigResponse {
        this['enabled'] = enabled;
        return this;
    }
    public withLtsIdInfo(ltsIdInfo: LtsIdInfo): UpdateLtsInfoConfigResponse {
        this['ltsIdInfo'] = ltsIdInfo;
        return this;
    }
}