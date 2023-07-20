

export class MediaTypes {
    public base?: string;
    public type?: string;
    public constructor(base?: string, type?: string) { 
        this['base'] = base;
        this['type'] = type;
    }
    public withBase(base: string): MediaTypes {
        this['base'] = base;
        return this;
    }
    public withType(type: string): MediaTypes {
        this['type'] = type;
        return this;
    }
}