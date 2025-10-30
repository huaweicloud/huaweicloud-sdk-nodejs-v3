import { Server } from './Server';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowServerResponse extends SdkResponse {
    public server?: Server;
    public constructor() { 
        super();
    }
    public withServer(server: Server): ShowServerResponse {
        this['server'] = server;
        return this;
    }
}