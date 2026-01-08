import { ListServersRspServers } from './ListServersRspServers';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServersByHostIdResponse extends SdkResponse {
    public servers?: Array<ListServersRspServers>;
    public constructor() { 
        super();
    }
    public withServers(servers: Array<ListServersRspServers>): ListServersByHostIdResponse {
        this['servers'] = servers;
        return this;
    }
}