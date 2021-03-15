

export class ActionDisForwarding {
    private 'region_name': string | undefined;
    private 'project_id': string | undefined;
    private 'stream_name'?: string | undefined;
    private 'stream_id'?: string | undefined;
    public constructor(regionName: any, projectId: any) { 
        this['region_name'] = regionName;
        this['project_id'] = projectId;
    }
    public withRegionName(regionName: string): ActionDisForwarding {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName() {
        return this['region_name'];
    }
    public withProjectId(projectId: string): ActionDisForwarding {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withStreamName(streamName: string): ActionDisForwarding {
        this['stream_name'] = streamName;
        return this;
    }
    public set streamName(streamName: string | undefined) {
        this['stream_name'] = streamName;
    }
    public get streamName() {
        return this['stream_name'];
    }
    public withStreamId(streamId: string): ActionDisForwarding {
        this['stream_id'] = streamId;
        return this;
    }
    public set streamId(streamId: string | undefined) {
        this['stream_id'] = streamId;
    }
    public get streamId() {
        return this['stream_id'];
    }
}