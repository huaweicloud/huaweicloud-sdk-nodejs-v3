
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddTunnelResponse extends SdkResponse {
    private 'tunnel_id'?: string;
    private 'tunnel_access_token'?: string;
    private 'expires_in'?: number;
    private 'tunnel_uri'?: string;
    public constructor() { 
        super();
    }
    public withTunnelId(tunnelId: string): AddTunnelResponse {
        this['tunnel_id'] = tunnelId;
        return this;
    }
    public set tunnelId(tunnelId: string  | undefined) {
        this['tunnel_id'] = tunnelId;
    }
    public get tunnelId(): string | undefined {
        return this['tunnel_id'];
    }
    public withTunnelAccessToken(tunnelAccessToken: string): AddTunnelResponse {
        this['tunnel_access_token'] = tunnelAccessToken;
        return this;
    }
    public set tunnelAccessToken(tunnelAccessToken: string  | undefined) {
        this['tunnel_access_token'] = tunnelAccessToken;
    }
    public get tunnelAccessToken(): string | undefined {
        return this['tunnel_access_token'];
    }
    public withExpiresIn(expiresIn: number): AddTunnelResponse {
        this['expires_in'] = expiresIn;
        return this;
    }
    public set expiresIn(expiresIn: number  | undefined) {
        this['expires_in'] = expiresIn;
    }
    public get expiresIn(): number | undefined {
        return this['expires_in'];
    }
    public withTunnelUri(tunnelUri: string): AddTunnelResponse {
        this['tunnel_uri'] = tunnelUri;
        return this;
    }
    public set tunnelUri(tunnelUri: string  | undefined) {
        this['tunnel_uri'] = tunnelUri;
    }
    public get tunnelUri(): string | undefined {
        return this['tunnel_uri'];
    }
}