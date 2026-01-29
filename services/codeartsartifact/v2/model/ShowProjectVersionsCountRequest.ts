

export class ShowProjectVersionsCountRequest {
    private 'build_version'?: string;
    public constructor() { 
    }
    public withBuildVersion(buildVersion: string): ShowProjectVersionsCountRequest {
        this['build_version'] = buildVersion;
        return this;
    }
    public set buildVersion(buildVersion: string  | undefined) {
        this['build_version'] = buildVersion;
    }
    public get buildVersion(): string | undefined {
        return this['build_version'];
    }
}