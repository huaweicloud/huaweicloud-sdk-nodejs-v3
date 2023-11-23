

export class SlowlogItem {
    public id?: number;
    public command?: string;
    private 'start_time'?: string;
    public duration?: string;
    private 'shard_name'?: string;
    private 'database_id'?: number;
    public username?: string;
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
}