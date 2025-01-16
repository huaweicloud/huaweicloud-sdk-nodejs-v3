

export class UpdateLineGroupsRequestBody {
    public name?: string;
    public description?: string;
    public lines?: Array<string>;
    public constructor(name?: string, lines?: Array<string>) { 
        this['name'] = name;
        this['lines'] = lines;
    }
    public withName(name: string): UpdateLineGroupsRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateLineGroupsRequestBody {
        this['description'] = description;
        return this;
    }
    public withLines(lines: Array<string>): UpdateLineGroupsRequestBody {
        this['lines'] = lines;
        return this;
    }
}