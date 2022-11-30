

export class SlowlogItem {
    public id?: number;
    public command?: string;
    private 'start_time'?: string | undefined;
    public duration?: string;
    private 'shard_name'?: string | undefined;
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
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
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
    public set shardName(shardName: string | undefined) {
        this['shard_name'] = shardName;
    }
    public get shardName() {
        return this['shard_name'];
    }
}