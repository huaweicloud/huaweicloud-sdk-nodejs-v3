import { CentralNetwork } from './CentralNetwork';
import { RequestId } from './RequestId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCentralNetworkResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'central_network'?: CentralNetwork;
    public constructor(requestId?: string, centralNetwork?: CentralNetwork) { 
        super();
        this['request_id'] = requestId;
        this['central_network'] = centralNetwork;
    }
    public withRequestId(requestId: string): CreateCentralNetworkResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withCentralNetwork(centralNetwork: CentralNetwork): CreateCentralNetworkResponse {
        this['central_network'] = centralNetwork;
        return this;
    }
    public set centralNetwork(centralNetwork: CentralNetwork  | undefined) {
        this['central_network'] = centralNetwork;
    }
    public get centralNetwork(): CentralNetwork | undefined {
        return this['central_network'];
    }
}