import { ServerDetails } from './ServerDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBareMetalServersResponse extends SdkResponse {
    public servers?: Array<ServerDetails>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withServers(servers: Array<ServerDetails>): ListBareMetalServersResponse {
        this['servers'] = servers;
        return this;
    }
    public withCount(count: number): ListBareMetalServersResponse {
        this['count'] = count;
        return this;
    }
}