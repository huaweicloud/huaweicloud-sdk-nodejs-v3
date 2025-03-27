import { ConnectionsLogConfig } from './ConnectionsLogConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateVpnConnectionsLogConfigResponse extends SdkResponse {
    private 'log_config'?: ConnectionsLogConfig;
    private 'request_id'?: string;
    private 'header-response-token'?: string;
    public constructor() { 
        super();
    }
    public withLogConfig(logConfig: ConnectionsLogConfig): UpdateVpnConnectionsLogConfigResponse {
        this['log_config'] = logConfig;
        return this;
    }
    public set logConfig(logConfig: ConnectionsLogConfig  | undefined) {
        this['log_config'] = logConfig;
    }
    public get logConfig(): ConnectionsLogConfig | undefined {
        return this['log_config'];
    }
    public withRequestId(requestId: string): UpdateVpnConnectionsLogConfigResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withHeaderResponseToken(headerResponseToken: string): UpdateVpnConnectionsLogConfigResponse {
        this['header-response-token'] = headerResponseToken;
        return this;
    }
    public set headerResponseToken(headerResponseToken: string  | undefined) {
        this['header-response-token'] = headerResponseToken;
    }
    public get headerResponseToken(): string | undefined {
        return this['header-response-token'];
    }
}