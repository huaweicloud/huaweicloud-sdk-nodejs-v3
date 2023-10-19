import { CentralNetworkConnection } from './CentralNetworkConnection';
import { RequestId } from './RequestId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateCentralNetworkConnectionResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'central_network_connection'?: CentralNetworkConnection;
    public constructor(requestId?: string, centralNetworkConnection?: CentralNetworkConnection) { 
        super();
        this['request_id'] = requestId;
        this['central_network_connection'] = centralNetworkConnection;
    }
    public withRequestId(requestId: string): UpdateCentralNetworkConnectionResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withCentralNetworkConnection(centralNetworkConnection: CentralNetworkConnection): UpdateCentralNetworkConnectionResponse {
        this['central_network_connection'] = centralNetworkConnection;
        return this;
    }
    public set centralNetworkConnection(centralNetworkConnection: CentralNetworkConnection  | undefined) {
        this['central_network_connection'] = centralNetworkConnection;
    }
    public get centralNetworkConnection(): CentralNetworkConnection | undefined {
        return this['central_network_connection'];
    }
}