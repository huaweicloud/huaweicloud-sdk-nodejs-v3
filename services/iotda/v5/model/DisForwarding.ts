

export class DisForwarding {
    private 'region_name'?: string;
    private 'project_id'?: string;
    private 'stream_name'?: string;
    private 'stream_id'?: string;
    public constructor(regionName?: string, projectId?: string) { 
        this['region_name'] = regionName;
        this['project_id'] = projectId;
    }
    public withRegionName(regionName: string): DisForwarding {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string  | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName(): string | undefined {
        return this['region_name'];
    }
    public withProjectId(projectId: string): DisForwarding {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withStreamName(streamName: string): DisForwarding {
        this['stream_name'] = streamName;
        return this;
    }
    public set streamName(streamName: string  | undefined) {
        this['stream_name'] = streamName;
    }
    public get streamName(): string | undefined {
        return this['stream_name'];
    }
    public withStreamId(streamId: string): DisForwarding {
        this['stream_id'] = streamId;
        return this;
    }
    public set streamId(streamId: string  | undefined) {
        this['stream_id'] = streamId;
    }
    public get streamId(): string | undefined {
        return this['stream_id'];
    }
}