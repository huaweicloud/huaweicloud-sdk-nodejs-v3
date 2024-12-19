import { GlobalDcGatewayEntry } from './GlobalDcGatewayEntry';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateGlobalDcGatewayResponse extends SdkResponse {
    private 'global_dc_gateway'?: GlobalDcGatewayEntry;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withGlobalDcGateway(globalDcGateway: GlobalDcGatewayEntry): UpdateGlobalDcGatewayResponse {
        this['global_dc_gateway'] = globalDcGateway;
        return this;
    }
    public set globalDcGateway(globalDcGateway: GlobalDcGatewayEntry  | undefined) {
        this['global_dc_gateway'] = globalDcGateway;
    }
    public get globalDcGateway(): GlobalDcGatewayEntry | undefined {
        return this['global_dc_gateway'];
    }
    public withRequestId(requestId: string): UpdateGlobalDcGatewayResponse {
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