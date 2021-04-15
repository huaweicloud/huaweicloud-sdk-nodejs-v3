import { ServerDetail } from './ServerDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowServerResponse extends SdkResponse {
    public server?: ServerDetail;
    public constructor() { 
        super();
    }
    public withServer(server: ServerDetail): ShowServerResponse {
        this['server'] = server;
        return this;
    }
}