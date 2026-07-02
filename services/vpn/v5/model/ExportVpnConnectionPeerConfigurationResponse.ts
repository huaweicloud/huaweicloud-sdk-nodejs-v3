
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportVpnConnectionPeerConfigurationResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'peer_config'?: string;
    private 'header-response-token'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ExportVpnConnectionPeerConfigurationResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPeerConfig(peerConfig: string): ExportVpnConnectionPeerConfigurationResponse {
        this['peer_config'] = peerConfig;
        return this;
    }
    public set peerConfig(peerConfig: string  | undefined) {
        this['peer_config'] = peerConfig;
    }
    public get peerConfig(): string | undefined {
        return this['peer_config'];
    }
    public withHeaderResponseToken(headerResponseToken: string): ExportVpnConnectionPeerConfigurationResponse {
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