import { ApiInfo } from './ApiInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetAiAppSettingResponse extends SdkResponse {
    private 'api_sign'?: ApiInfo;
    public constructor() { 
        super();
    }
    public withApiSign(apiSign: ApiInfo): SetAiAppSettingResponse {
        this['api_sign'] = apiSign;
        return this;
    }
    public set apiSign(apiSign: ApiInfo  | undefined) {
        this['api_sign'] = apiSign;
    }
    public get apiSign(): ApiInfo | undefined {
        return this['api_sign'];
    }
}