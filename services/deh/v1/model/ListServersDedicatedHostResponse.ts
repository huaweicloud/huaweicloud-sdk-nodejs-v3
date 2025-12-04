import { RespServer } from './RespServer';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServersDedicatedHostResponse extends SdkResponse {
    public servers?: Array<RespServer>;
    public constructor() { 
        super();
    }
    public withServers(servers: Array<RespServer>): ListServersDedicatedHostResponse {
        this['servers'] = servers;
        return this;
    }
}