

export class NovaVersionMediaType {
    public base?: string;
    public type?: string;
    public constructor(base?: string, type?: string) { 
        this['base'] = base;
        this['type'] = type;
    }
    public withBase(base: string): NovaVersionMediaType {
        this['base'] = base;
        return this;
    }
    public withType(type: string): NovaVersionMediaType {
        this['type'] = type;
        return this;
    }
}