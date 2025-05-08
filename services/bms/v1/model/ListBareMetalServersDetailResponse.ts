import { ServerListDetails } from './ServerListDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBareMetalServersDetailResponse extends SdkResponse {
    public servers?: Array<ServerListDetails>;
    public constructor() { 
        super();
    }
    public withServers(servers: Array<ServerListDetails>): ListBareMetalServersDetailResponse {
        this['servers'] = servers;
        return this;
    }
}