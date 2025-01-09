

export class CreateScriptReq {
    public name?: string;
    public type?: string;
    public description?: string;
    public content?: string;
    public version?: string;
    public constructor() { 
    }
    public withName(name: string): CreateScriptReq {
        this['name'] = name;
        return this;
    }
    public withType(type: string): CreateScriptReq {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): CreateScriptReq {
        this['description'] = description;
        return this;
    }
    public withContent(content: string): CreateScriptReq {
        this['content'] = content;
        return this;
    }
    public withVersion(version: string): CreateScriptReq {
        this['version'] = version;
        return this;
    }
}