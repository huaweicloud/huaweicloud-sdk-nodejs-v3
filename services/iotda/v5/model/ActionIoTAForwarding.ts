

export class ActionIoTAForwarding {
    private 'region_name': string | undefined;
    private 'project_id': string | undefined;
    public constructor(regionName?: any, projectId?: any) { 
        this['region_name'] = regionName;
        this['project_id'] = projectId;
    }
    public withRegionName(regionName: string): ActionIoTAForwarding {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName() {
        return this['region_name'];
    }
    public withProjectId(projectId: string): ActionIoTAForwarding {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
}