import { ServerDetail } from './ServerDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRecycleBinServerResponse extends SdkResponse {
    public server?: ServerDetail;
    public constructor() { 
        super();
    }
    public withServer(server: ServerDetail): ShowRecycleBinServerResponse {
        this['server'] = server;
        return this;
    }
}