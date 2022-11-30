

export class RuntimeConfig {
    public lvType: string;
    public constructor(lvType?: any) { 
        this['lvType'] = lvType;
    }
    public withLvType(lvType: string): RuntimeConfig {
        this['lvType'] = lvType;
        return this;
    }
}