

export class CreateScriptReq {
    public name?: string;
    public type?: CreateScriptReqTypeEnum | string;
    public description?: string;
    public content?: string;
    public version?: string;
    public constructor(name?: string, type?: string, content?: string) { 
        this['name'] = name;
        this['type'] = type;
        this['content'] = content;
    }
    public withName(name: string): CreateScriptReq {
        this['name'] = name;
        return this;
    }
    public withType(type: CreateScriptReqTypeEnum | string): CreateScriptReq {
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

/**
    * @export
    * @enum {string}
    */
export enum CreateScriptReqTypeEnum {
    POWERSHELL = 'POWERSHELL',
    BAT = 'BAT',
    SHELL = 'SHELL'
}
