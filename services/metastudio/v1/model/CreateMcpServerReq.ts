

export class CreateMcpServerReq {
    public name?: string;
    private 'mcp_server_url'?: string;
    private 'auth_header_name'?: string;
    public constructor(name?: string, mcpServerUrl?: string) { 
        this['name'] = name;
        this['mcp_server_url'] = mcpServerUrl;
    }
    public withName(name: string): CreateMcpServerReq {
        this['name'] = name;
        return this;
    }
    public withMcpServerUrl(mcpServerUrl: string): CreateMcpServerReq {
        this['mcp_server_url'] = mcpServerUrl;
        return this;
    }
    public set mcpServerUrl(mcpServerUrl: string  | undefined) {
        this['mcp_server_url'] = mcpServerUrl;
    }
    public get mcpServerUrl(): string | undefined {
        return this['mcp_server_url'];
    }
    public withAuthHeaderName(authHeaderName: string): CreateMcpServerReq {
        this['auth_header_name'] = authHeaderName;
        return this;
    }
    public set authHeaderName(authHeaderName: string  | undefined) {
        this['auth_header_name'] = authHeaderName;
    }
    public get authHeaderName(): string | undefined {
        return this['auth_header_name'];
    }
}