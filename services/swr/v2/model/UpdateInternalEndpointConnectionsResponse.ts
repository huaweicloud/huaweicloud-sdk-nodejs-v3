import { ConnectionItem } from './ConnectionItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateInternalEndpointConnectionsResponse extends SdkResponse {
    public connections?: Array<ConnectionItem>;
    public constructor() { 
        super();
    }
    public withConnections(connections: Array<ConnectionItem>): UpdateInternalEndpointConnectionsResponse {
        this['connections'] = connections;
        return this;
    }
}