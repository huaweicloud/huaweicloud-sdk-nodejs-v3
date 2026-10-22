import { AiGuardLtsIdInfo } from './AiGuardLtsIdInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAiGuardLtsConfigResponse extends SdkResponse {
    public enabled?: boolean;
    private 'lts_id_info'?: AiGuardLtsIdInfo;
    public constructor() { 
        super();
    }
    public withEnabled(enabled: boolean): ShowAiGuardLtsConfigResponse {
        this['enabled'] = enabled;
        return this;
    }
    public withLtsIdInfo(ltsIdInfo: AiGuardLtsIdInfo): ShowAiGuardLtsConfigResponse {
        this['lts_id_info'] = ltsIdInfo;
        return this;
    }
    public set ltsIdInfo(ltsIdInfo: AiGuardLtsIdInfo  | undefined) {
        this['lts_id_info'] = ltsIdInfo;
    }
    public get ltsIdInfo(): AiGuardLtsIdInfo | undefined {
        return this['lts_id_info'];
    }
}