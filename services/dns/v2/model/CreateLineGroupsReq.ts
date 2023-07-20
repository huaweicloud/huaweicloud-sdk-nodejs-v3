

export class CreateLineGroupsReq {
    public name?: string;
    public description?: string;
    public lines?: Array<string>;
    public constructor(name?: string, lines?: Array<string>) { 
        this['name'] = name;
        this['lines'] = lines;
    }
    public withName(name: string): CreateLineGroupsReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateLineGroupsReq {
        this['description'] = description;
        return this;
    }
    public withLines(lines: Array<string>): CreateLineGroupsReq {
        this['lines'] = lines;
        return this;
    }
}