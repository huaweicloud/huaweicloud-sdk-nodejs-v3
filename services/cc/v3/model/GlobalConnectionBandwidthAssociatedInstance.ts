

export class GlobalConnectionBandwidthAssociatedInstance {
    public id?: string;
    public type?: string;
    private 'region_id'?: string;
    private 'project_id'?: string;
    public constructor(id?: string, type?: string) { 
        this['id'] = id;
        this['type'] = type;
    }
    public withId(id: string): GlobalConnectionBandwidthAssociatedInstance {
        this['id'] = id;
        return this;
    }
    public withType(type: string): GlobalConnectionBandwidthAssociatedInstance {
        this['type'] = type;
        return this;
    }
    public withRegionId(regionId: string): GlobalConnectionBandwidthAssociatedInstance {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withProjectId(projectId: string): GlobalConnectionBandwidthAssociatedInstance {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}