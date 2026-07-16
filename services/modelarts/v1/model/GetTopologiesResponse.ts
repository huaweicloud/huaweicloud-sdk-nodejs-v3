import { ServerPhyInfo } from './ServerPhyInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetTopologiesResponse extends SdkResponse {
    public servers?: Array<ServerPhyInfo>;
    public constructor() { 
        super();
    }
    public withServers(servers: Array<ServerPhyInfo>): GetTopologiesResponse {
        this['servers'] = servers;
        return this;
    }
}