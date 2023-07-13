

export class CheckDisasterNameRequest {
    private 'dr_name': string | undefined;
    public type?: string;
    private 'standby_region'?: string | undefined;
    private 'standby_project_id'?: string | undefined;
    public constructor(drName?: any) { 
        this['dr_name'] = drName;
    }
    public withDrName(drName: string): CheckDisasterNameRequest {
        this['dr_name'] = drName;
        return this;
    }
    public set drName(drName: string | undefined) {
        this['dr_name'] = drName;
    }
    public get drName() {
        return this['dr_name'];
    }
    public withType(type: string): CheckDisasterNameRequest {
        this['type'] = type;
        return this;
    }
    public withStandbyRegion(standbyRegion: string): CheckDisasterNameRequest {
        this['standby_region'] = standbyRegion;
        return this;
    }
    public set standbyRegion(standbyRegion: string | undefined) {
        this['standby_region'] = standbyRegion;
    }
    public get standbyRegion() {
        return this['standby_region'];
    }
    public withStandbyProjectId(standbyProjectId: string): CheckDisasterNameRequest {
        this['standby_project_id'] = standbyProjectId;
        return this;
    }
    public set standbyProjectId(standbyProjectId: string | undefined) {
        this['standby_project_id'] = standbyProjectId;
    }
    public get standbyProjectId() {
        return this['standby_project_id'];
    }
}