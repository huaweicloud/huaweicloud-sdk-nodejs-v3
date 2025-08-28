
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateMcpServerResponse extends SdkResponse {
    private 'mcp_server_id'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withMcpServerId(mcpServerId: string): CreateMcpServerResponse {
        this['mcp_server_id'] = mcpServerId;
        return this;
    }
    public set mcpServerId(mcpServerId: string  | undefined) {
        this['mcp_server_id'] = mcpServerId;
    }
    public get mcpServerId(): string | undefined {
        return this['mcp_server_id'];
    }
    public withXRequestId(xRequestId: string): CreateMcpServerResponse {
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