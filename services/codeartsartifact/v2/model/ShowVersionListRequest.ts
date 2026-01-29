

export class ShowVersionListRequest {
    private 'build_version'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withBuildVersion(buildVersion: string): ShowVersionListRequest {
        this['build_version'] = buildVersion;
        return this;
    }
    public set buildVersion(buildVersion: string  | undefined) {
        this['build_version'] = buildVersion;
    }
    public get buildVersion(): string | undefined {
        return this['build_version'];
    }
    public withOffset(offset: number): ShowVersionListRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowVersionListRequest {
        this['limit'] = limit;
        return this;
    }
}