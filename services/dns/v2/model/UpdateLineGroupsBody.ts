

export class UpdateLineGroupsBody {
    public name: string;
    public description?: string;
    public lines: Array<string>;
    public constructor(name?: any, lines?: any) { 
        this['name'] = name;
        this['lines'] = lines;
    }
    public withName(name: string): UpdateLineGroupsBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateLineGroupsBody {
        this['description'] = description;
        return this;
    }
    public withLines(lines: Array<string>): UpdateLineGroupsBody {
        this['lines'] = lines;
        return this;
    }
}