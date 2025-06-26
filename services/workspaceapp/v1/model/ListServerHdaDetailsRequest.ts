

export class ListServerHdaDetailsRequest {
    public offset?: number;
    public limit?: number;
    private 'server_group_id'?: string;
    private 'server_name'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListServerHdaDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListServerHdaDetailsRequest {
        this['limit'] = limit;
        return this;
    }
    public withServerGroupId(serverGroupId: string): ListServerHdaDetailsRequest {
        this['server_group_id'] = serverGroupId;
        return this;
    }
    public set serverGroupId(serverGroupId: string  | undefined) {
        this['server_group_id'] = serverGroupId;
    }
    public get serverGroupId(): string | undefined {
        return this['server_group_id'];
    }
    public withServerName(serverName: string): ListServerHdaDetailsRequest {
        this['server_name'] = serverName;
        return this;
    }
    public set serverName(serverName: string  | undefined) {
        this['server_name'] = serverName;
    }
    public get serverName(): string | undefined {
        return this['server_name'];
    }
}