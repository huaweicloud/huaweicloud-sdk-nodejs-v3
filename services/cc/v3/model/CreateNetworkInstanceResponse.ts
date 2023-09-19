import { NetworkInstance } from './NetworkInstance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateNetworkInstanceResponse extends SdkResponse {
    private 'network_instance'?: NetworkInstance;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withNetworkInstance(networkInstance: NetworkInstance): CreateNetworkInstanceResponse {
        this['network_instance'] = networkInstance;
        return this;
    }
    public set networkInstance(networkInstance: NetworkInstance  | undefined) {
        this['network_instance'] = networkInstance;
    }
    public get networkInstance(): NetworkInstance | undefined {
        return this['network_instance'];
    }
    public withRequestId(requestId: string): CreateNetworkInstanceResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}