

export class LvmConfig {
    public lvType?: string;
    public path?: string;
    public constructor(lvType?: string) { 
        this['lvType'] = lvType;
    }
    public withLvType(lvType: string): LvmConfig {
        this['lvType'] = lvType;
        return this;
    }
    public withPath(path: string): LvmConfig {
        this['path'] = path;
        return this;
    }
}