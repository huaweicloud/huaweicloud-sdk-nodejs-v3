import { ServerDetail } from './ServerDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRecycleBinServersResponse extends SdkResponse {
    public servers?: Array<ServerDetail>;
    public constructor() { 
        super();
    }
    public withServers(servers: Array<ServerDetail>): ListRecycleBinServersResponse {
        this['servers'] = servers;
        return this;
    }
}