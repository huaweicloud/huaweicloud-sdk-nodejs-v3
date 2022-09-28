import { ConnectionEndpoints } from './ConnectionEndpoints';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateEndpointConnectionsDescResponse extends SdkResponse {
    public connections?: Array<ConnectionEndpoints>;
    public constructor() { 
        super();
    }
    public withConnections(connections: Array<ConnectionEndpoints>): UpdateEndpointConnectionsDescResponse {
        this['connections'] = connections;
        return this;
    }
}