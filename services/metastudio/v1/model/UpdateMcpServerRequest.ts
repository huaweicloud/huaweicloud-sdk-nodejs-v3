import { UpdateMcpServerReq } from './UpdateMcpServerReq';


export class UpdateMcpServerRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    private 'mcp_server_id'?: string;
    public body?: UpdateMcpServerReq;
    public constructor(mcpServerId?: string) { 
        this['mcp_server_id'] = mcpServerId;
    }
    public withAuthorization(authorization: string): UpdateMcpServerRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): UpdateMcpServerRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): UpdateMcpServerRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): UpdateMcpServerRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withMcpServerId(mcpServerId: string): UpdateMcpServerRequest {
        this['mcp_server_id'] = mcpServerId;
        return this;
    }
    public set mcpServerId(mcpServerId: string  | undefined) {
        this['mcp_server_id'] = mcpServerId;
    }
    public get mcpServerId(): string | undefined {
        return this['mcp_server_id'];
    }
    public withBody(body: UpdateMcpServerReq): UpdateMcpServerRequest {
        this['body'] = body;
        return this;
    }
}