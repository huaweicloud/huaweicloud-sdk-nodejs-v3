

export class SlowlogItem {
    public id?: number;
    public command?: string;
    private 'start_time'?: string;
    public duration?: string;
    private 'shard_name'?: string;
    private 'database_id'?: number;
    public username?: string;
    private 'node_role'?: string;
    private 'client_ip'?: string;
    public constructor() { 
    }
    public withId(id: number): SlowlogItem {
        this['id'] = id;
        return this;
    }
    public withCommand(command: string): SlowlogItem {
        this['command'] = command;
        return this;
    }
    public withStartTime(startTime: string): SlowlogItem {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withDuration(duration: string): SlowlogItem {
        this['duration'] = duration;
        return this;
    }
    public withShardName(shardName: string): SlowlogItem {
        this['shard_name'] = shardName;
        return this;
    }
    public set shardName(shardName: string  | undefined) {
        this['shard_name'] = shardName;
    }
    public get shardName(): string | undefined {
        return this['shard_name'];
    }
    public withDatabaseId(databaseId: number): SlowlogItem {
        this['database_id'] = databaseId;
        return this;
    }
    public set databaseId(databaseId: number  | undefined) {
        this['database_id'] = databaseId;
    }
    public get databaseId(): number | undefined {
        return this['database_id'];
    }
    public withUsername(username: string): SlowlogItem {
        this['username'] = username;
        return this;
    }
    public withNodeRole(nodeRole: string): SlowlogItem {
        this['node_role'] = nodeRole;
        return this;
    }
    public set nodeRole(nodeRole: string  | undefined) {
        this['node_role'] = nodeRole;
    }
    public get nodeRole(): string | undefined {
        return this['node_role'];
    }
    public withClientIp(clientIp: string): SlowlogItem {
        this['client_ip'] = clientIp;
        return this;
    }
    public set clientIp(clientIp: string  | undefined) {
        this['client_ip'] = clientIp;
    }
    public get clientIp(): string | undefined {
        return this['client_ip'];
    }
}