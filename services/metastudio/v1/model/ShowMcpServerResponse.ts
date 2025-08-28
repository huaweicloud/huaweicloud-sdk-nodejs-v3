
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMcpServerResponse extends SdkResponse {
    private 'mcp_server_id'?: string;
    public name?: string;
    private 'mcp_server_url'?: string;
    private 'auth_header_name'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withMcpServerId(mcpServerId: string): ShowMcpServerResponse {
        this['mcp_server_id'] = mcpServerId;
        return this;
    }
    public set mcpServerId(mcpServerId: string  | undefined) {
        this['mcp_server_id'] = mcpServerId;
    }
    public get mcpServerId(): string | undefined {
        return this['mcp_server_id'];
    }
    public withName(name: string): ShowMcpServerResponse {
        this['name'] = name;
        return this;
    }
    public withMcpServerUrl(mcpServerUrl: string): ShowMcpServerResponse {
        this['mcp_server_url'] = mcpServerUrl;
        return this;
    }
    public set mcpServerUrl(mcpServerUrl: string  | undefined) {
        this['mcp_server_url'] = mcpServerUrl;
    }
    public get mcpServerUrl(): string | undefined {
        return this['mcp_server_url'];
    }
    public withAuthHeaderName(authHeaderName: string): ShowMcpServerResponse {
        this['auth_header_name'] = authHeaderName;
        return this;
    }
    public set authHeaderName(authHeaderName: string  | undefined) {
        this['auth_header_name'] = authHeaderName;
    }
    public get authHeaderName(): string | undefined {
        return this['auth_header_name'];
    }
    public withCreateTime(createTime: string): ShowMcpServerResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowMcpServerResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withXRequestId(xRequestId: string): ShowMcpServerResponse {
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