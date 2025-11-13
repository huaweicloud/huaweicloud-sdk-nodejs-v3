

export class BatchCreatePublicZonesTaskRequestBody {
    private 'zone_names'?: Array<string>;
    private 'enterprise_project_id'?: string;
    public constructor(zoneNames?: Array<string>) { 
        this['zone_names'] = zoneNames;
    }
    public withZoneNames(zoneNames: Array<string>): BatchCreatePublicZonesTaskRequestBody {
        this['zone_names'] = zoneNames;
        return this;
    }
    public set zoneNames(zoneNames: Array<string>  | undefined) {
        this['zone_names'] = zoneNames;
    }
    public get zoneNames(): Array<string> | undefined {
        return this['zone_names'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BatchCreatePublicZonesTaskRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}