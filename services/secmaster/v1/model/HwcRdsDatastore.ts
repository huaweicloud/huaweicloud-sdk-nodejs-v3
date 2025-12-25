

export class HwcRdsDatastore {
    public type?: string;
    public version?: string;
    private 'complete_version'?: string;
    public constructor(type?: string, version?: string) { 
        this['type'] = type;
        this['version'] = version;
    }
    public withType(type: string): HwcRdsDatastore {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): HwcRdsDatastore {
        this['version'] = version;
        return this;
    }
    public withCompleteVersion(completeVersion: string): HwcRdsDatastore {
        this['complete_version'] = completeVersion;
        return this;
    }
    public set completeVersion(completeVersion: string  | undefined) {
        this['complete_version'] = completeVersion;
    }
    public get completeVersion(): string | undefined {
        return this['complete_version'];
    }
}