import { UpdateLtsConfigRequestBodyLtsIdInfo } from './UpdateLtsConfigRequestBodyLtsIdInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLtsConfigResponse extends SdkResponse {
    public enabled?: boolean;
    private 'lts_id_info'?: UpdateLtsConfigRequestBodyLtsIdInfo;
    public constructor() { 
        super();
    }
    public withEnabled(enabled: boolean): ShowLtsConfigResponse {
        this['enabled'] = enabled;
        return this;
    }
    public withLtsIdInfo(ltsIdInfo: UpdateLtsConfigRequestBodyLtsIdInfo): ShowLtsConfigResponse {
        this['lts_id_info'] = ltsIdInfo;
        return this;
    }
    public set ltsIdInfo(ltsIdInfo: UpdateLtsConfigRequestBodyLtsIdInfo  | undefined) {
        this['lts_id_info'] = ltsIdInfo;
    }
    public get ltsIdInfo(): UpdateLtsConfigRequestBodyLtsIdInfo | undefined {
        return this['lts_id_info'];
    }
}