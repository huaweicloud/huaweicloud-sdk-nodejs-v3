

export class ListEndpointsDetailsRequest {
    private 'project_uuid'?: string;
    private 'region_name'?: string;
    private 'module_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(projectUuid?: string, regionName?: string) { 
        this['project_uuid'] = projectUuid;
        this['region_name'] = regionName;
    }
    public withProjectUuid(projectUuid: string): ListEndpointsDetailsRequest {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withRegionName(regionName: string): ListEndpointsDetailsRequest {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string  | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName(): string | undefined {
        return this['region_name'];
    }
    public withModuleId(moduleId: string): ListEndpointsDetailsRequest {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withOffset(offset: number): ListEndpointsDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListEndpointsDetailsRequest {
        this['limit'] = limit;
        return this;
    }
}