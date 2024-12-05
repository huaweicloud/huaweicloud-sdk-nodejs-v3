import { ExternalShowGlobalDcGateway } from './ExternalShowGlobalDcGateway';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGlobalDcGatewayResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'global_dc_gateway'?: ExternalShowGlobalDcGateway;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowGlobalDcGatewayResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withGlobalDcGateway(globalDcGateway: ExternalShowGlobalDcGateway): ShowGlobalDcGatewayResponse {
        this['global_dc_gateway'] = globalDcGateway;
        return this;
    }
    public set globalDcGateway(globalDcGateway: ExternalShowGlobalDcGateway  | undefined) {
        this['global_dc_gateway'] = globalDcGateway;
    }
    public get globalDcGateway(): ExternalShowGlobalDcGateway | undefined {
        return this['global_dc_gateway'];
    }
    public withXRequestId(xRequestId: string): ShowGlobalDcGatewayResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}