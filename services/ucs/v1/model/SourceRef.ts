

export class SourceRef {
    public kind?: string;
    public name?: string;
    public constructor(kind?: string, name?: string) { 
        this['kind'] = kind;
        this['name'] = name;
    }
    public withKind(kind: string): SourceRef {
        this['kind'] = kind;
        return this;
    }
    public withName(name: string): SourceRef {
        this['name'] = name;
        return this;
    }
}