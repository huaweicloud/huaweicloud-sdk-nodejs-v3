

export class CopyImageCrossRegionRequestBody {
    private 'agency_name': string | undefined;
    public description?: string;
    public name: string;
    private 'project_name': string | undefined;
    public region: string;
    public constructor(agencyName?: any, name?: any, projectName?: any, region?: any) { 
        this['agency_name'] = agencyName;
        this['name'] = name;
        this['project_name'] = projectName;
        this['region'] = region;
    }
    public withAgencyName(agencyName: string): CopyImageCrossRegionRequestBody {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName() {
        return this['agency_name'];
    }
    public withDescription(description: string): CopyImageCrossRegionRequestBody {
        this['description'] = description;
        return this;
    }
    public withName(name: string): CopyImageCrossRegionRequestBody {
        this['name'] = name;
        return this;
    }
    public withProjectName(projectName: string): CopyImageCrossRegionRequestBody {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName() {
        return this['project_name'];
    }
    public withRegion(region: string): CopyImageCrossRegionRequestBody {
        this['region'] = region;
        return this;
    }
}