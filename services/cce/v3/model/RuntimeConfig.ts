

export class RuntimeConfig {
    public lvType?: string;
    public constructor(lvType?: string) { 
        this['lvType'] = lvType;
    }
    public withLvType(lvType: string): RuntimeConfig {
        this['lvType'] = lvType;
        return this;
    }
}