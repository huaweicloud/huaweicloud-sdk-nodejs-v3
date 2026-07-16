

export class Config {
    public script?: string;
    public type?: string;
    public mode?: string;
    public constructor() { 
    }
    public withScript(script: string): Config {
        this['script'] = script;
        return this;
    }
    public withType(type: string): Config {
        this['type'] = type;
        return this;
    }
    public withMode(mode: string): Config {
        this['mode'] = mode;
        return this;
    }
}