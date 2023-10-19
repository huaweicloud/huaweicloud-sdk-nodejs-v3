

export class Version {
    public version?: number;
    public constructor(version?: number) { 
        this['version'] = version;
    }
    public withVersion(version: number): Version {
        this['version'] = version;
        return this;
    }
}