import { NovaCreateServersResult } from './NovaCreateServersResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NovaCreateServersResponse extends SdkResponse {
    public server?: NovaCreateServersResult;
    public constructor() { 
        super();
    }
    public withServer(server: NovaCreateServersResult): NovaCreateServersResponse {
        this['server'] = server;
        return this;
    }
}