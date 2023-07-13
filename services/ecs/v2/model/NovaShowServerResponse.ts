import { NovaServer } from './NovaServer';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NovaShowServerResponse extends SdkResponse {
    public server?: NovaServer;
    public constructor() { 
        super();
    }
    public withServer(server: NovaServer): NovaShowServerResponse {
        this['server'] = server;
        return this;
    }
}