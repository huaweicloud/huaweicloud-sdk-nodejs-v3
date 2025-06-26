

export class BatchMigrateServerReq {
    private 'server_ids'?: Array<string>;
    private 'host_id'?: string;
    public constructor(serverIds?: Array<string>, hostId?: string) { 
        this['server_ids'] = serverIds;
        this['host_id'] = hostId;
    }
    public withServerIds(serverIds: Array<string>): BatchMigrateServerReq {
        this['server_ids'] = serverIds;
        return this;
    }
    public set serverIds(serverIds: Array<string>  | undefined) {
        this['server_ids'] = serverIds;
    }
    public get serverIds(): Array<string> | undefined {
        return this['server_ids'];
    }
    public withHostId(hostId: string): BatchMigrateServerReq {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
}