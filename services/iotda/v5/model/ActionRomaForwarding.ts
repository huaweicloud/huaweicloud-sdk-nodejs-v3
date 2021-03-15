

export class ActionRomaForwarding {
    private 'region_name': string | undefined;
    private 'project_id': string | undefined;
    private 'roma_push_type'?: string | undefined;
    public constructor(regionName: any, projectId: any) { 
        this['region_name'] = regionName;
        this['project_id'] = projectId;
    }
    public withRegionName(regionName: string): ActionRomaForwarding {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName() {
        return this['region_name'];
    }
    public withProjectId(projectId: string): ActionRomaForwarding {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withRomaPushType(romaPushType: string): ActionRomaForwarding {
        this['roma_push_type'] = romaPushType;
        return this;
    }
    public set romaPushType(romaPushType: string | undefined) {
        this['roma_push_type'] = romaPushType;
    }
    public get romaPushType() {
        return this['roma_push_type'];
    }
}