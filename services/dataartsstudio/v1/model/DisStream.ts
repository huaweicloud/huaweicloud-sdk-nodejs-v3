

export class DisStream {
    private 'stream_name'?: string;
    private 'stream_guid'?: string;
    private 'stream_qualified_name'?: string;
    private 'partition_count'?: number;
    private 'app_count'?: number;
    private 'task_count'?: number;
    public constructor() { 
    }
    public withStreamName(streamName: string): DisStream {
        this['stream_name'] = streamName;
        return this;
    }
    public set streamName(streamName: string  | undefined) {
        this['stream_name'] = streamName;
    }
    public get streamName(): string | undefined {
        return this['stream_name'];
    }
    public withStreamGuid(streamGuid: string): DisStream {
        this['stream_guid'] = streamGuid;
        return this;
    }
    public set streamGuid(streamGuid: string  | undefined) {
        this['stream_guid'] = streamGuid;
    }
    public get streamGuid(): string | undefined {
        return this['stream_guid'];
    }
    public withStreamQualifiedName(streamQualifiedName: string): DisStream {
        this['stream_qualified_name'] = streamQualifiedName;
        return this;
    }
    public set streamQualifiedName(streamQualifiedName: string  | undefined) {
        this['stream_qualified_name'] = streamQualifiedName;
    }
    public get streamQualifiedName(): string | undefined {
        return this['stream_qualified_name'];
    }
    public withPartitionCount(partitionCount: number): DisStream {
        this['partition_count'] = partitionCount;
        return this;
    }
    public set partitionCount(partitionCount: number  | undefined) {
        this['partition_count'] = partitionCount;
    }
    public get partitionCount(): number | undefined {
        return this['partition_count'];
    }
    public withAppCount(appCount: number): DisStream {
        this['app_count'] = appCount;
        return this;
    }
    public set appCount(appCount: number  | undefined) {
        this['app_count'] = appCount;
    }
    public get appCount(): number | undefined {
        return this['app_count'];
    }
    public withTaskCount(taskCount: number): DisStream {
        this['task_count'] = taskCount;
        return this;
    }
    public set taskCount(taskCount: number  | undefined) {
        this['task_count'] = taskCount;
    }
    public get taskCount(): number | undefined {
        return this['task_count'];
    }
}