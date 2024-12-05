import { ExternalUpdateGlobalDcGateway } from './ExternalUpdateGlobalDcGateway';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateGlobalDcGatewayResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'global_dc_gateway'?: ExternalUpdateGlobalDcGateway;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
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
    public withGlobalDcGateway(globalDcGateway: ExternalUpdateGlobalDcGateway): UpdateGlobalDcGatewayResponse {
        this['global_dc_gateway'] = globalDcGateway;
        return this;
    }
    public set globalDcGateway(globalDcGateway: ExternalUpdateGlobalDcGateway  | undefined) {
        this['global_dc_gateway'] = globalDcGateway;
    }
    public get globalDcGateway(): ExternalUpdateGlobalDcGateway | undefined {
        return this['global_dc_gateway'];
    }
    public withXRequestId(xRequestId: string): UpdateGlobalDcGatewayResponse {
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