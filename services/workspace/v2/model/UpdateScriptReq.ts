

export class UpdateScriptReq {
    public name?: string;
    public description?: string;
    public content?: string;
    public version?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateScriptReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateScriptReq {
        this['description'] = description;
        return this;
    }
    public withContent(content: string): UpdateScriptReq {
        this['content'] = content;
        return this;
    }
    public withVersion(version: string): UpdateScriptReq {
        this['version'] = version;
        return this;
    }
}