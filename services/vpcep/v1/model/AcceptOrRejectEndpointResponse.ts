import { ConnectionEndpoints } from './ConnectionEndpoints';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AcceptOrRejectEndpointResponse extends SdkResponse {
    public connections?: Array<ConnectionEndpoints>;
    public constructor() { 
        super();
    }
    public withConnections(connections: Array<ConnectionEndpoints>): AcceptOrRejectEndpointResponse {
        this['connections'] = connections;
        return this;
    }
}