

export class McpServerBaseInfo {
    private 'mcp_server_id'?: string;
    public name?: string;
    public constructor(mcpServerId?: string) { 
        this['mcp_server_id'] = mcpServerId;
    }
    public withMcpServerId(mcpServerId: string): McpServerBaseInfo {
        this['mcp_server_id'] = mcpServerId;
        return this;
    }
    public set mcpServerId(mcpServerId: string  | undefined) {
        this['mcp_server_id'] = mcpServerId;
    }
    public get mcpServerId(): string | undefined {
        return this['mcp_server_id'];
    }
    public withName(name: string): McpServerBaseInfo {
        this['name'] = name;
        return this;
    }
}