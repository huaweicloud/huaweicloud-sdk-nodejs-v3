import { ServerDetail } from './ServerDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServersDetailsResponse extends SdkResponse {
    public count?: number;
    public servers?: Array<ServerDetail>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListServersDetailsResponse {
        this['count'] = count;
        return this;
    }
    public withServers(servers: Array<ServerDetail>): ListServersDetailsResponse {
        this['servers'] = servers;
        return this;
    }
}