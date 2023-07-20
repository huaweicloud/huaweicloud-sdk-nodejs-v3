

export class LVMConfig {
    public lvType?: string;
    public path?: string;
    public constructor(lvType?: string) { 
        this['lvType'] = lvType;
    }
    public withLvType(lvType: string): LVMConfig {
        this['lvType'] = lvType;
        return this;
    }
    public withPath(path: string): LVMConfig {
        this['path'] = path;
        return this;
    }
}