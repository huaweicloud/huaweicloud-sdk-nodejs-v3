import { ConfigsGetBody } from './ConfigsGetBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainFullConfigResponse extends SdkResponse {
    public configs?: ConfigsGetBody;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withConfigs(configs: ConfigsGetBody): ShowDomainFullConfigResponse {
        this['configs'] = configs;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowDomainFullConfigResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}