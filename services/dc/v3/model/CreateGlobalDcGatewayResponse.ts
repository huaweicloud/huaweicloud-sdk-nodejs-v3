import { CreateGlobalDcGatewayEntry } from './CreateGlobalDcGatewayEntry';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateGlobalDcGatewayResponse extends SdkResponse {
    private 'global_dc_gateway'?: CreateGlobalDcGatewayEntry;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withGlobalDcGateway(globalDcGateway: CreateGlobalDcGatewayEntry): CreateGlobalDcGatewayResponse {
        this['global_dc_gateway'] = globalDcGateway;
        return this;
    }
    public set globalDcGateway(globalDcGateway: CreateGlobalDcGatewayEntry  | undefined) {
        this['global_dc_gateway'] = globalDcGateway;
    }
    public get globalDcGateway(): CreateGlobalDcGatewayEntry | undefined {
        return this['global_dc_gateway'];
    }
    public withRequestId(requestId: string): CreateGlobalDcGatewayResponse {
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