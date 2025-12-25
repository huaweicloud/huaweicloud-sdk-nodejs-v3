

export class SearchCompliancePackagesRequestBody {
    public limit?: number;
    public offset?: number;
    public name?: string;
    public description?: string;
    public type?: number;
    public state?: number;
    public constructor() { 
    }
    public withLimit(limit: number): SearchCompliancePackagesRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): SearchCompliancePackagesRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withName(name: string): SearchCompliancePackagesRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): SearchCompliancePackagesRequestBody {
        this['description'] = description;
        return this;
    }
    public withType(type: number): SearchCompliancePackagesRequestBody {
        this['type'] = type;
        return this;
    }
    public withState(state: number): SearchCompliancePackagesRequestBody {
        this['state'] = state;
        return this;
    }
}