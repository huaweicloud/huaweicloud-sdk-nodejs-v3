

export class ListModulesDetailRequest {
    private 'project_uuid'?: string;
    private 'region_name'?: string;
    public name?: string;
    public productLine?: string;
    public tags?: Array<string>;
    public offset?: number;
    public limit?: number;
    public locations?: Array<string>;
    public constructor(locations?: Array<string>) { 
        this['locations'] = locations;
    }
    public withProjectUuid(projectUuid: string): ListModulesDetailRequest {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withRegionName(regionName: string): ListModulesDetailRequest {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string  | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName(): string | undefined {
        return this['region_name'];
    }
    public withName(name: string): ListModulesDetailRequest {
        this['name'] = name;
        return this;
    }
    public withProductLine(productLine: string): ListModulesDetailRequest {
        this['productLine'] = productLine;
        return this;
    }
    public withTags(tags: Array<string>): ListModulesDetailRequest {
        this['tags'] = tags;
        return this;
    }
    public withOffset(offset: number): ListModulesDetailRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListModulesDetailRequest {
        this['limit'] = limit;
        return this;
    }
    public withLocations(locations: Array<string>): ListModulesDetailRequest {
        this['locations'] = locations;
        return this;
    }
}