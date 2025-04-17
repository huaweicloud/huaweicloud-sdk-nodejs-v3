import { LtsConfigRequestAndResponseLtsIdInfo } from './LtsConfigRequestAndResponseLtsIdInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLogConfigResponse extends SdkResponse {
    public enabled?: boolean;
    private 'lts_id_info'?: LtsConfigRequestAndResponseLtsIdInfo;
    public constructor() { 
        super();
    }
    public withEnabled(enabled: boolean): ShowLogConfigResponse {
        this['enabled'] = enabled;
        return this;
    }
    public withLtsIdInfo(ltsIdInfo: LtsConfigRequestAndResponseLtsIdInfo): ShowLogConfigResponse {
        this['lts_id_info'] = ltsIdInfo;
        return this;
    }
    public set ltsIdInfo(ltsIdInfo: LtsConfigRequestAndResponseLtsIdInfo  | undefined) {
        this['lts_id_info'] = ltsIdInfo;
    }
    public get ltsIdInfo(): LtsConfigRequestAndResponseLtsIdInfo | undefined {
        return this['lts_id_info'];
    }
}