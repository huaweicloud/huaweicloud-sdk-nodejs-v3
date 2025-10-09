

export class AgencyUsage {
    public region?: string;
    public resources?: Array<string>;
    public constructor(region?: string, resources?: Array<string>) { 
        this['region'] = region;
        this['resources'] = resources;
    }
    public withRegion(region: string): AgencyUsage {
        this['region'] = region;
        return this;
    }
    public withResources(resources: Array<string>): AgencyUsage {
        this['resources'] = resources;
        return this;
    }
}