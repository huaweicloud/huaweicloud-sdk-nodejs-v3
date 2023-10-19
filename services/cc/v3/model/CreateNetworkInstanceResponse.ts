import { NetworkInstance } from './NetworkInstance';
import { RequestId } from './RequestId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateNetworkInstanceResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'network_instance'?: NetworkInstance;
    public constructor(requestId?: string, networkInstance?: NetworkInstance) { 
        super();
        this['request_id'] = requestId;
        this['network_instance'] = networkInstance;
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
}