import { ConfigsGetBody } from './ConfigsGetBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainFullConfigResponse extends SdkResponse {
    public configs?: ConfigsGetBody;
    public constructor() { 
        super();
    }
    public withConfigs(configs: ConfigsGetBody): ShowDomainFullConfigResponse {
        this['configs'] = configs;
        return this;
    }
}