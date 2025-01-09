

export class ListDesktopPoolsRequest {
    public name?: string;
    public type?: string;
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'in_maintenance_mode'?: boolean;
    public constructor() { 
    }
    public withName(name: string): ListDesktopPoolsRequest {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ListDesktopPoolsRequest {
        this['type'] = type;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListDesktopPoolsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListDesktopPoolsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDesktopPoolsRequest {
        this['limit'] = limit;
        return this;
    }
    public withInMaintenanceMode(inMaintenanceMode: boolean): ListDesktopPoolsRequest {
        this['in_maintenance_mode'] = inMaintenanceMode;
        return this;
    }
    public set inMaintenanceMode(inMaintenanceMode: boolean  | undefined) {
        this['in_maintenance_mode'] = inMaintenanceMode;
    }
    public get inMaintenanceMode(): boolean | undefined {
        return this['in_maintenance_mode'];
    }
}