

export class ListDatastore {
    public type?: string;
    public version?: string;
    private 'complete_version'?: string;
    private 'hotfix_versions'?: string;
    public constructor(type?: string, version?: string) { 
        this['type'] = type;
        this['version'] = version;
    }
    public withType(type: string): ListDatastore {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ListDatastore {
        this['version'] = version;
        return this;
    }
    public withCompleteVersion(completeVersion: string): ListDatastore {
        this['complete_version'] = completeVersion;
        return this;
    }
    public set completeVersion(completeVersion: string  | undefined) {
        this['complete_version'] = completeVersion;
    }
    public get completeVersion(): string | undefined {
        return this['complete_version'];
    }
    public withHotfixVersions(hotfixVersions: string): ListDatastore {
        this['hotfix_versions'] = hotfixVersions;
        return this;
    }
    public set hotfixVersions(hotfixVersions: string  | undefined) {
        this['hotfix_versions'] = hotfixVersions;
    }
    public get hotfixVersions(): string | undefined {
        return this['hotfix_versions'];
    }
}