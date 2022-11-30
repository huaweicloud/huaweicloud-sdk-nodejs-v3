

export class VersionMediatypes {
    public type: string;
    public base: string;
    public constructor(type?: any, base?: any) { 
        this['type'] = type;
        this['base'] = base;
    }
    public withType(type: string): VersionMediatypes {
        this['type'] = type;
        return this;
    }
    public withBase(base: string): VersionMediatypes {
        this['base'] = base;
        return this;
    }
}