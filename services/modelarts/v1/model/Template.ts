

export class Template {
    public name?: string;
    public version?: string;
    public inputs?: { [key: string]: object; };
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): Template {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): Template {
        this['version'] = version;
        return this;
    }
    public withInputs(inputs: { [key: string]: object; }): Template {
        this['inputs'] = inputs;
        return this;
    }
}