import { EnvRespParams } from './EnvRespParams';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFactoryEnvResponse extends SdkResponse {
    public params?: Array<EnvRespParams>;
    public constructor() { 
        super();
    }
    public withParams(params: Array<EnvRespParams>): ShowFactoryEnvResponse {
        this['params'] = params;
        return this;
    }
}